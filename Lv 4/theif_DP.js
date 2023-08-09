// 도둑질
// https://school.programmers.co.kr/learn/courses/30/lessons/42897
function solution(money) {
  const N = money.length;
  const D = Array.from(new Array(2), () => new Array(N).fill(0));

  D[0][0] = 0;
  D[1][0] = money[0];
  D[0][1] = money[1];
  D[1][1] = Math.max(money[0], money[1]);

  // 최댓값 구할 시 스프레드 문법을 쓰면 효율성 테스트에서 런타임 에러 발생
  // 최댓값 변수를 선언해서 업데이트하는 식으로 값을 구해야 함
  let max = 0;

  for (let i = 2; i < N; i++) {
    if (i === N - 1) {
      D[1][i] = D[1][i - 1];
    } else {
      D[1][i] = Math.max(D[1][i - 1], D[1][i - 2] + money[i]);
    }
    D[0][i] = Math.max(D[0][i - 1], D[0][i - 2] + money[i]);
    max = Math.max(D[1][i], D[0][i]);
  }

  return max;
}
