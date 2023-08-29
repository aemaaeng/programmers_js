// 순위
// 플로이드-와샬 활용 문제
function solution(n, results) {
  let answer = 0;

  const graph = Array.from(new Array(n + 1), () =>
    new Array(n + 1).fill(Infinity)
  );

  for (const [a, b] of results) {
    graph[a][b] = 1;
  }

  for (let i = 0; i < n + 1; i++) {
    graph[i][i] = 0;
  }

  for (let k = 1; k < n + 1; k++) {
    for (let i = 1; i < n + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  for (let i = 0; i < n + 1; i++) {
    let cnt = 0;
    for (let j = 0; j < n + 1; j++) {
      if (graph[i][j] !== Infinity || graph[j][i] !== Infinity) cnt += 1;
    }
    if (cnt === n) answer += 1;
  }

  return answer;
}
