function solution(left, right) {
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

  for (let i = left; i <= right; i++) {
    if (divide(i) % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}

// 어떤 수의 제곱근이 정수이면 약수의 개수는 홀수라는 점을 이용할 수도 있다.
// 제곱근이 정수라면 약수 중에 자기 자신을 제곱한 수가 있다는 뜻이기 때문. 짝이 없으니까 당연히 약수의 개수는 홀수일수밖에 없다.
// Number.isInteger(): https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

function solution2(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}
