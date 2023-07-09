function solution(s) {
  let answer = s.length;

  for (let i = 1; i <= s.length / 2; i++) {
    let compressed = "";
    let chunk = s.slice(0, i);
    // console.log(chunk);
    let cnt = 1;

    for (let j = i; j <= s.length; j += i) {
      // console.log(i, j);
      // console.log(s.slice(j, j + i));
      if (chunk === s.slice(j, j + i)) {
        cnt += 1;
      } else {
        compressed += cnt >= 2 ? `${cnt}${chunk}` : chunk;
        chunk = s.slice(j, j + i);
        cnt = 1;
      }
    }
    compressed += cnt >= 2 ? `${cnt}${chunk}` : chunk;
    answer = Math.min(answer, compressed.length);
  }
  return answer;
}

console.log(solution("aabbaccc"));
