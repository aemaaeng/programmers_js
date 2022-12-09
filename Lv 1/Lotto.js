// 로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
  let result = [];
  const rank = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };

  let noZero = lottos.filter((el) => el !== 0);
  let correct = noZero.filter((el) => win_nums.indexOf(el) !== -1).length;
  let zeroCount = lottos.filter((el) => el === 0).length;

  // 최고 순위 -> 남은 0이 전부 일치해야 최고 순위가 됨
  result.push(rank[zeroCount + correct]);
  // 최저 순위 -> 남은 0이 전부 일치하지 않아야 함 -> 지금 상태 그대로
  result.push(rank[correct]);

  return result;
}
