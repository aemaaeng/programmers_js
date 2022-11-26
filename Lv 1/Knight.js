// 약수의 개수를 어떻게 구하느냐가 포인트였던 문제
// 제곱근을 이용해 시간복잡도를 줄여야 했다.
// 참고: https://kbw1101.tistory.com/32
function solution(number, limit, power) {
  let answer = 0;

  const divide = (num) => {
    let cnt = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        cnt += 1;
        if (i !== num / i) cnt += 1;
      }
    }
    return cnt;
  };

  for (let i = 1; i < number + 1; i++) {
    let divisors = divide(i);
    // 만약 divide(i)가 limit보다 작다면 그 값을 그냥 answer에 더하고
    // limit보다 크다면 power를 더한다.
    if (divisors <= limit) {
      answer += divisors;
    } else {
      answer += power;
    }
  }
  return answer;
}
