// 예산 - https://school.programmers.co.kr/learn/courses/30/lessons/12982
function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);

  for (const demand of d) {
    if (budget - demand >= 0) {
      answer += 1;
      budget -= demand;
    } else {
      break;
    }
  }

  return answer;
}
