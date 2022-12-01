// 삼총사
function solution(number) {
  let answer = 0;

  // 조합을 리턴하는 함수
  function combi(arr, n) {
    const results = [];
    if (n === 1) return arr.map((el) => [el]);
    arr.forEach((val, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const combinations = combi(rest, n - 1);
      const attached = combinations.map((el) => [val, ...el]);
      results.push(...attached);
    });
    return results;
  }

  // results에서 합이 0인 것들만 골라내어 answer에 1씩 더해주기
  combi(number, 3).map((arr) => {
    let sum = arr.reduce((acc, cur) => acc + cur);
    if (sum === 0) answer += 1;
  });

  return answer;
}

// 다른 사람들 풀이
// function solution(number) {
//   let result = 0;

//   const combination = (current, start) => {
//       if (current.length === 3) {
//           result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
//           return;
//       }

//       for (let i = start; i < number.length; i++) {
//           combination([...current, number[i]], i + 1);
//       }
//   }
//   combination([], 0);
//   return result;
// }
