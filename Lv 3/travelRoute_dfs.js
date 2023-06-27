// https://school.programmers.co.kr/learn/courses/30/lessons/43164
function solution(tickets) {
  let answer = [];
  const result = [];
  const visited = [];

  const L = tickets.length;
  tickets.sort(); // 출발 공항을 기준으로 오름차순 정렬

  function dfs(v, cnt) {
    result.push(v);

    // 모든 티켓을 사용해야 하므로 개수 확인하기
    if (cnt === L) {
      answer = result;
      return true;
    }

    for (let i = 0; i < L; i++) {
      if (!visited[i] && tickets[i][0] === v) {
        visited[i] = true;
        if (dfs(tickets[i][1], cnt + 1)) return true;
        visited[i] = false;
      }
    }

    result.pop();
    return false;
  }

  dfs("ICN", 0);

  return answer;
}
