function solution(answers) {
  const answer = [0, 0, 0, 0];

  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const N = answers.length;

  for (let i = 0; i < N; i++) {
    const check = answers[i];
    if (one[i % one.length] === check) answer[1] += 1;
    if (two[i % two.length] === check) answer[2] += 1;
    if (three[i % three.length] === check) answer[3] += 1;
  }

  let max = Math.max(...answer);
  const result = [];
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === max) result.push(i);
  }

  return result;
}
