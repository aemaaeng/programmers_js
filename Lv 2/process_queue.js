// https://school.programmers.co.kr/learn/courses/30/lessons/42587
function solution(priorities, location) {
  let cnt = 0;
  let max = Math.max(...priorities);

  while (true) {
    let temp = priorities.shift();

    if (max === temp) {
      cnt += 1;
      if (location === 0) return cnt;
      max = Math.max(...priorities);
    } else {
      priorities.push(temp);
    }

    location = location === 0 ? priorities.length - 1 : location - 1;
  }
}
// 처음에 시도했던 방식 - 시간초과 발생
// while (true) {
//   let temp = queue.shift();

//   if (max === temp[1] && temp[0] === location) {
//       cnt += 1;
//       break;
//   }

//   if (temp[1] < max) {
//       queue.push(temp);
//   } else {
//       cnt += 1;
//       priorities.splice(temp[0], 1);
//       max = Math.max(...priorities);
//   }
// }
