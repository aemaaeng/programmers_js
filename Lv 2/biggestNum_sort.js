// https://school.programmers.co.kr/learn/courses/30/lessons/42746
// sort function을 작성하는 것이 관건이었던 문제
// 자바스크립트의 sort function은 숫자가 들어와도 일시적으로 문자로 변환하여 비교한다
// **두 요소를 결합해 보고 사전 순서상 더 뒤에 오게 되는 숫자가 앞으로 가도록**
// 참고: https://chanhuiseok.github.io/posts/prog-2/

function solution(numbers) {
  const arr = numbers.map((el) => String(el));
  const sorted = arr.sort((a, b) => {
    // 문자를 결합해봄
    return b + a - (a + b);
  });
  return sorted[0] === "0" ? "0" : sorted.join("");
}
