// 가장 먼 노드
// https://school.programmers.co.kr/learn/courses/30/lessons/49189

function solution(n, edge) {
  let answer = 0;

  const graph = Array.from(new Array(n + 1), () => new Array());
  for (const [from, to] of edge) {
    graph[from].push(to);
    graph[to].push(from);
  }

  const visited = new Array(n + 1).fill(false);

  function bfs(x) {
    const queue = [[x, 0]];
    visited[x] = true;
    let cnt = 0;
    let max_distance = 0;

    while (queue.length) {
      const [a, distance] = queue.shift();

      if (max_distance < distance) {
        max_distance = distance;
        cnt = 1;
      } else if (max_distance === distance) {
        cnt += 1;
      }

      for (let i = 0; i < graph[a].length; i++) {
        const cur = graph[a][i];
        if (visited[cur]) continue;
        visited[cur] = true;
        queue.push([cur, distance + 1]);
      }
    }

    return cnt;
  }

  answer = bfs(1);
  return answer;
}
