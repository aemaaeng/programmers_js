// 소수 판별 함수
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < parseInt(num ** 0.5) + 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 수 조합
function recur(set, arr, selected) {
  if (arr.length >= 1) {
    // for문
    for (let i = 0; i < arr.length; i++) {
      let newSelected = selected.concat(arr[i]);
      let copy = arr.slice();
      copy.splice(i, 1);

      if (isPrime(Number(newSelected))) {
        set.add(Number(newSelected));
      }
      recur(set, copy, newSelected);
    }
  }
}

function solution(numbers) {
  let nums = numbers.split("");
  let set = new Set();

  recur(set, nums, "");

  return set.size;
}
