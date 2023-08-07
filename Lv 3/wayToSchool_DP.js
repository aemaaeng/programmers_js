// 등굣길
// https://school.programmers.co.kr/learn/courses/30/lessons/42898
function solution(m, n, puddles) {
  const D = Array.from(new Array(n + 1), () => new Array(m + 1).fill(0));

  // 좌표가 (m,n) 형태로 주어지는 것에 주의하기
  for (const [x, y] of puddles) {
    D[y][x] = 1;
  }

  D[0][1] = 1;

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (D[i][j]) D[i][j] = 0;
      else {
        D[i][j] = (D[i - 1][j] + D[i][j - 1]) % 1000000007;
      }
    }
  }

  // console.log(D);

  return D[n][m];
}

console.log(solution(4, 3, [[2, 2]]));
