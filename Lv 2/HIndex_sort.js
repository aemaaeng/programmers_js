// https://school.programmers.co.kr/learn/courses/30/lessons/42747
function solution(citations) {
  const sorted = citations.sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < sorted.length; i++) {
    const hIndex = sorted.length - i;
    if (sorted[i] >= hIndex) {
      answer = hIndex;
      break;
    }
  }

  return answer;
}
