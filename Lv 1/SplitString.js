// 문자열 나누기 - https://school.programmers.co.kr/learn/courses/30/lessons/140108
function solution(s) {
  let answer = 0;
  let firstLetter = "";
  let firstCnt = 0;
  let otherCnt = 0;

  for (let i = 0; i < s.length; i++) {
    if (firstLetter === "") {
      firstLetter = s[i];
    }

    if (s[i] === firstLetter) firstCnt += 1;
    else otherCnt += 1;

    if (firstCnt === otherCnt) {
      answer += 1;
      firstLetter = "";
      firstCnt = 0;
      otherCnt = 0;
    }
  }

  if (firstCnt !== 0 || otherCnt !== 0) answer += 1;

  return answer;
}

function anotherSolution(s) {
  let answer = 0;
  let current;
  let cnt = 0;

  for (let i = 0; i < s.length; i++) {
    // 0이 되면 개수가 같아졌다는 뜻
    if (cnt === 0) {
      answer += 1;
      current = s[i];
      cnt = 1;
    } else {
      // 다른 문자이면 하나 빼고 같으면 1 더하기
      if (current !== s[i]) cnt -= 1;
      else cnt += 1;
    }
  }

  return answer;
}
