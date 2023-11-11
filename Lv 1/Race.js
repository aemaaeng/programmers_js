// 달리기 경주 - https://school.programmers.co.kr/learn/courses/30/lessons/178871
// 처음 해결책
// 일부 테스트케이스에서 시간 초과 - indexOf가 원인
function solution1(players, callings) {
  const answer = [...players];

  for (const name of callings) {
    let idx = answer.indexOf(name);
    answer.splice(idx, 1);
    answer.splice(idx - 1, 0, name);
  }

  return answer;
}

// 최종 해결책
function solution(players, callings) {
  const playersIdx = {};
  const answer = [...players];

  for (let i = 0; i < players.length; i++) {
    playersIdx[players[i]] = i;
  }

  for (const name of callings) {
    let idx = playersIdx[name];
    playersIdx[answer[idx - 1]] = idx;
    playersIdx[answer[idx]] = idx - 1;
    [answer[idx - 1], answer[idx]] = [answer[idx], answer[idx - 1]];
  }

  return answer;
}
