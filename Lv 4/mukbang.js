// https://school.programmers.co.kr/learn/courses/30/lessons/42891
// 먹는데 걸리는 시간 순으로 오름차순 정렬하여 하나씩 먹어치우는 방식으로 해결하는 문제 (그리디, 구현)
// 튜플 형태로 큐에 저장한다
function solution(food_times, k) {
  let count = 0; // 먹은 음식의 양
  let queue = food_times
    .map((el, idx) => [el, idx])
    .sort((a, b) => a[0] - b[0]);
  const total = food_times.reduce((acc, cur) => acc + cur); // 먹어야 하는 음식의 총량
  if (total <= k) return -1; // 음식의 총량보다 주어진 시간이 더 크다면 더 먹을 음식이 없다는 뜻

  let idx = 0;
  while (queue.length - idx) {
    let sum = queue[idx][0] - count; // 처음 먹을 음식에서 누적된 음식의 양을 뺀다
    if (k - (queue.length - idx) < 0) break;
    while (k - (queue.length - idx) * sum < 0) {
      sum -= 1;
    }

    k -= (queue.length - idx) * sum;
    count += sum;

    while (true) {
      if (queue[idx][0] - count === 0) {
        queue[idx][0] = 0; // 다 먹은 것으로 처리하고 인덱스를 1 증가시켜 계속 확인한다
        idx += 1;
      } else {
        break;
      }
    }
  }
  // 0보다 큰 것들만 남겨놓고 인덱스 순으로 오름차순 정렬
  queue = queue.filter((el) => el[0] > 0).sort((a, b) => a[1] - b[1]);
  return queue[k][1] + 1;
}
