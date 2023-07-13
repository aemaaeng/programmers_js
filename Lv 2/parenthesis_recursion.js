// https://school.programmers.co.kr/learn/courses/30/lessons/60058
function isRight(str) {
  // 올바른 괄호 문자열인지 판단하는 함수
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") cnt += 1;
    else {
      if (cnt === 0) return false;
      cnt -= 1;
    }
  }

  return true;
}

function balancedIdx(str) {
  // 균형잡힌 괄호 문자열이 되는 인덱스 출력
  let openCnt = 0;
  let closeCnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") openCnt += 1;
    if (str[i] === ")") closeCnt += 1;

    if (openCnt === closeCnt) return i;
  }
}

function solution(p) {
  let answer = "";
  if (p.length === 0) return answer;

  let idx = balancedIdx(p);
  // 리턴된 인덱스를 기준으로 문자열을 나눈다
  let u = p.slice(0, idx + 1);
  let v = p.slice(idx + 1, p.length);

  if (isRight(u)) {
    answer = u + solution(v);
  } else {
    answer += "(";
    answer += solution(v);
    answer += ")";
    u = u.slice(1, u.length - 1);
    let reversed = "";
    for (let i = 0; i < u.length; i++) {
      if (u[i] === "(") reversed += ")";
      if (u[i] === ")") reversed += "(";
    }
    answer += reversed;
  }

  return answer;
}
