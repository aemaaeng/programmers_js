// https://school.programmers.co.kr/learn/courses/30/lessons/84512
// 효율성 높인 방법으로 다시 풀어볼 것
function solution(word) {
  const digit = ["", "A", "E", "I", "O", "U"];
  const result = [];
  let answer = 0;

  function dfs(cnt, str) {
    if (cnt === 0) {
      result.push(str);
      return;
    }
    for (let i = 0; i < 6; i++) {
      dfs(cnt - 1, `${str}${digit[i]}`);
    }
  }

  dfs(5, "");

  // 중복 제거 후 정렬 (사전순)
  const data = [...new Set(result)].sort();
  answer = data.indexOf(word);

  return answer;
}
