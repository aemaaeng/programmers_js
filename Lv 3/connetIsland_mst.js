// 섬 연결하기
// https://school.programmers.co.kr/learn/courses/30/lessons/42861
function find_parent(parent, x) {
  if (parent[x] !== x) parent[x] = find_parent(parent, parent[x]);
  return parent[x];
}

function union_parent(parent, a, b) {
  const rootA = find_parent(parent, a);
  const rootB = find_parent(parent, b);
  if (rootA < rootB) parent[rootB] = rootA;
  else parent[rootA] = rootB;
}

function solution(n, costs) {
  let answer = 0;
  const graph = [];
  const parent = new Array(n + 1).fill(0);
  for (let i = 1; i < parent.length; i++) {
    parent[i] = i;
  }

  for (const [from, to, cost] of costs) {
    graph.push({ from, to, cost });
    graph.push({ from: to, to: from, cost });
  }

  graph.sort((a, b) => a.cost - b.cost);

  for (const edge of graph) {
    const { from, to, cost } = edge;
    if (find_parent(parent, from) !== find_parent(parent, to)) {
      union_parent(parent, from, to);
      answer += cost;
    }
  }

  return answer;
}

solution(4, [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 5],
  [1, 3, 1],
  [2, 3, 8],
]); // answer: 4
