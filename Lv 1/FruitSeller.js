function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => a - b);
  // cnt가 score의 길이를 m으로 나눈 것과 같아질 때까지
  let max_box = Math.floor(score.length / m);
  let cnt = 0;
  let boxes = [];

  while (cnt < max_box) {
    let sliced = score.slice(-m);
    boxes.push(sliced);
    score.splice(score.length - m, m);
    answer += Math.min(...sliced) * m;
    cnt += 1;
  }

  if (answer < score.length) {
    return 0;
  }

  return answer;
}
