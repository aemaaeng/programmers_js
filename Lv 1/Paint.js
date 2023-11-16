// 덧칠하기 - https://school.programmers.co.kr/learn/courses/30/lessons/161989
function solution(n, m, section) {
  let answer = 1;
  let painted = section[0];

  for (let i = 1; i < n; i++) {
    if (section[i] - painted >= m) {
      answer += 1;
      painted = section[i];
    }
  }

  return answer;
}
