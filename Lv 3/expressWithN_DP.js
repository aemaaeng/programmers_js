// N으로 표현
// https://school.programmers.co.kr/learn/courses/30/lessons/42895
function solution(N, number) {
  if (N === number) return 1;
  let answer = 0;
  const D = Array.from(new Array(8), () => new Set());

  let str = "";

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < i + 1; j++) {
      str += `${N}`;
    }
    D[i].add(Number(str));
    str = "";
  }

  for (let i = 1; i < 8; i++) {
    for (let j = 0; j < i; j++) {
      for (let op1 of D[j]) {
        for (let op2 of D[i - j - 1]) {
          D[i].add(op1 + op2);
          D[i].add(op1 - op2);
          D[i].add(op1 * op2);
          if (op2 !== 0) D[i].add(Math.floor(op1 / op2));
        }
      }
    }
    if (D[i].has(number)) {
      answer = i + 1;
      break;
    } else {
      answer = -1;
    }
  }

  return answer;
}
