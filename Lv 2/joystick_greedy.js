// 조이스틱
// https://school.programmers.co.kr/learn/courses/30/lessons/42860
function solution(name) {
  let answer = 0;
  let min = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    const cur = name[i];
    answer += Math.min(cur.charCodeAt() - 65, 91 - cur.charCodeAt());
    let idx = i + 1;

    while (idx < name.length && name[idx] === "A") {
      idx += 1;
    }

    min = Math.min(min, i * 2 + name.length - idx, i + 2 * (name.length - idx));
  }

  return answer + min;
}
