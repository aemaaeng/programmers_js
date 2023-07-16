// https://school.programmers.co.kr/learn/courses/30/lessons/72411
function combination(arr, num) {
  const results = [];

  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((select, i, origin) => {
    const remainder = origin.slice(i + 1);
    const combinations = combination(remainder, num - 1);
    const combine = combinations.map((v) => [select, ...v].sort().join("")); // 조합을 만들 때 알파벳 순으로 정렬해서 순서를 통일시키는게 포인트였음
    results.push(...combine);
  });

  return results;
}

function solution(orders, course) {
  const answer = [];

  for (let i = 0; i < course.length; i++) {
    const map = {};
    let max = 0;
    orders.forEach((order) => {
      combination(order.split(""), course[i]).forEach((el) => {
        map[el] ? (map[el] += 1) : (map[el] = 1);
      });
      for (const key in map) {
        max = Math.max(max, map[key]);
      }
    });

    for (const key in map) {
      if (map[key] > 1 && map[key] === max) answer.push(key);
    }
  }

  return answer.sort();
}
