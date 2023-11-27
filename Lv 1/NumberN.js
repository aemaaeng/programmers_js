// x만큼 간격이 있는 n개의 숫자 - https://school.programmers.co.kr/learn/courses/30/lessons/12954
function solution(x, n) {
  const answer = [];
  let sum = x;

  for (let i = 0; i < n; i++) {
    answer.push(sum);
    sum += x;
  }

  return answer;
}
