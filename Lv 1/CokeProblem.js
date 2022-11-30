// 콜라 문제
function solution(a, b, n) {
  let answer = 0;
  // n - canChange + ((canChange / a) * b);
  while (n >= a) {
    let canChange = n - (n % a);
    let received = (canChange / a) * b;
    n = n - canChange + received;
    answer += received;
  }
  return answer;
}
