// https://school.programmers.co.kr/learn/courses/30/lessons/42889
function solution(N, stages) {
  let answer = [];
  const failure = {};
  let left = stages.length;

  function countElement(arr, target) {
    let cnt = 0;

    arr.map((el) => {
      if (el === target) cnt += 1;
    });

    return cnt;
  }

  for (let i = 1; i < N + 1; i++) {
    let cnt = countElement(stages, i);
    failure[i] = cnt / left;
    left -= cnt;
  }

  answer = Object.entries(failure);
  answer = answer
    .sort((a, b) => {
      if (b[1] === a[1]) {
        return a[0] - b[0];
      }
      return b[1] - a[1];
    })
    .map((el) => +el[0]);

  return answer;
}
