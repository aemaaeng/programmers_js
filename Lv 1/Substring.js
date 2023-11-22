// 크기가 작은 부분 문자열 - https://school.programmers.co.kr/learn/courses/30/lessons/147355
function solution(t, p) {
  let answer = 0;
  let strings = [];
  const L = p.length;

  for (let i = 0; i < t.length; i++) {
    strings.push(t.substring(i, i + L));
  }

  strings = strings.filter((el) => el.length === L).map(Number);
  answer = strings.filter((el) => el <= Number(p)).length;

  return answer;
}

function anotherSolution(t, p) {
  let answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    let sliced = t.slice(i, i + p.length);
    if (+sliced <= +p) answer += 1;
  }

  return answer;
}
