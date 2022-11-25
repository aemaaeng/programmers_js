function solution(k, score) {
  let answer = new Array(score.length).fill(null);
  let honor = [];
  for (let i = 0; i < score.length; i++) {
    // k보다 작을 때
    if (i < k - 1) {
      honor[i] = score[i];
      honor.sort((a, b) => b - a);
      answer[i] = honor[honor.length - 1];
    } else {
      honor[i] = score[i];
      honor.sort((a, b) => b - a);
      answer[i] = honor[k - 1];
    }
  }
  return answer;
}

// expected: [10, 10, 10, 20, 20, 100, 100]
console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
