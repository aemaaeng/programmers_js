// 숫자 짝꿍
function solution(X, Y) {
  let answer = "";
  let counterX = {};
  let counterY = {};

  for (let i = 0; i < X.length; i++) {
    counterX[X[i]] = (counterX[X[i]] || 0) + 1;
  }

  for (let i = 0; i < Y.length; i++) {
    counterY[Y[i]] = (counterY[Y[i]] || 0) + 1;
  }

  let xkeys = Object.keys(counterX);
  let ykeys = Object.keys(counterY);
  let filtered = xkeys.filter((el) => {
    return ykeys.indexOf(el) !== -1;
  });
  filtered = filtered.sort((a, b) => b - a);

  // filtered의 길이가 0이거나 0만 포함하고 있다면
  if (filtered.length === 0) {
    return "-1";
  } else if (filtered.length === 1 && filtered[0] === "0") {
    return "0";
  }

  // 각 객체에서 filtered의 등장 횟수 조회 -> 더 작은 것만큼 문자열에 repeat해서 answer에 덧붙이기
  for (let i = 0; i < filtered.length; i++) {
    let cnt = Math.min(counterX[filtered[i]], counterY[filtered[i]]);
    answer += filtered[i].repeat(cnt);
  }
  return answer;
}
