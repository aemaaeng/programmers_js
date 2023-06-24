// https://school.programmers.co.kr/learn/courses/30/lessons/118667
function solution(queue1, queue2) {
  let sum1 = queue1.reduce((acc, cur) => acc + cur);
  let sum2 = queue2.reduce((acc, cur) => acc + cur);
  const q = [...queue1, ...queue2];
  const target = (sum1 + sum2) / 2;

  // 투 포인터 응용
  let q1Pointer = 0;
  let q2Pointer = queue1.length;

  for (let i = 0; i < queue1.length * 3; i++) {
    if (sum1 === target) return i;
    sum1 =
      sum1 > target
        ? sum1 - q[q1Pointer++ % q.length]
        : sum1 + q[q2Pointer++ % q.length];
  }

  return -1;
}
