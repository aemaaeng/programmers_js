// https://school.programmers.co.kr/learn/courses/30/lessons/42586
function solution(progresses, speeds) {
  const answer = [];

  while (progresses.length) {
    let cnt = 0;

    while (progresses[0] < 100) {
      progresses = progresses.map((el, idx) => el + speeds[idx]);
    }

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      cnt += 1;
    }

    answer.push(cnt);
  }

  return answer;
}
