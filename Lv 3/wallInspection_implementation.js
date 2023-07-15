// https://school.programmers.co.kr/learn/courses/30/lessons/60062
function permutation(arr, num) {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = permutation(rest, num - 1);
    const attach = permutations.map((permutation) => [v, ...permutation]);
    res.push(...attach);
  });
  return res;
}

function solution(n, weak, dist) {
  const L = weak.length;
  for (let i = 0; i < L; i++) {
    weak.push(weak[i] + n);
  }

  let answer = dist.length + 1;
  const permutations = permutation(dist, dist.length);

  // 탐색을 시작할 시작점
  for (let i = 0; i < L; i++) {
    // 친구를 뽑아서 점검을 보냄
    for (const friends of permutations) {
      let cnt = 1;
      let pos = weak[i] + friends[cnt - 1];
      // 시작점부터 모든 취약점 확인
      for (let j = i; j < i + L; j++) {
        if (pos < weak[j]) {
          cnt += 1;
          // 길이를 넘어가면 break
          if (cnt > dist.length) break;
          pos = weak[j] + friends[cnt - 1];
        }
      }
      answer = Math.min(answer, cnt);
    }
  }
  if (answer > dist.length) return -1;
  return answer;
}
