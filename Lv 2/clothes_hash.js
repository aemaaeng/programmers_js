// https://school.programmers.co.kr/learn/courses/30/lessons/42578
function solution(clothes) {
  const closet = {};
  clothes.forEach((el) => {
    const [item, category] = el;
    if (!closet[category]) closet[category] = 0;
    closet[category] += 1;
  });

  let answer = 1;

  for (const key in closet) {
    answer *= closet[key] + 1; // 입지 않는 경우의 수까지 포함
  }

  return answer - 1; // 모두 입지 않는 경우의 수는 제외
}
