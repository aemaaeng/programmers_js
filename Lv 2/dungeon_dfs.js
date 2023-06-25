// https://school.programmers.co.kr/learn/courses/30/lessons/87946
function solution(k, dungeons) {
  const visited = new Array(dungeons.length).fill(false);
  let max = 0;

  function dfs(hp, cnt) {
    for (let i = 0; i < dungeons.length; i++) {
      const [min, cost] = dungeons[i];
      if (visited[i]) continue;
      if (min <= hp) {
        visited[i] = true;
        dfs(hp - cost, cnt + 1);
        visited[i] = false;
      }
    }
    max = Math.max(max, cnt);
  }

  dfs(k, 0);

  return max;
}
