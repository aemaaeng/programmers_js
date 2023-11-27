// 하샤드 수 - https://school.programmers.co.kr/learn/courses/30/lessons/12947
function solution(x) {
  let answer = true;
  let sum = String(x)
    .split("")
    .reduce((acc, cur) => Number(acc) + Number(cur), 0);

  answer = x % sum === 0 ? true : false;

  return answer;
}
