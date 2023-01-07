function solution(brown, yellow) {
  // brown / 2 + 2 => 가로 + 세로
  let sum = brown / 2 + 2;
  for (let i = sum - 1; i >= sum / 2; i--) {
    let row = i;
    let column = sum - i;
    if (yellow === (row - 2) * (column - 2)) {
      return [row, column];
    }
  }
}
