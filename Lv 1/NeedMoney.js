// 부족한 금액 계산하기
function solution(price, money, count) {
  let need = 0;
  let i = 1;

  while (i <= count) {
    need += price * i;
    i++;
  }

  return need <= money ? 0 : need - money;
}
