// https://school.programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  let stack = [];
  const num = String(number);

  for (let i = 0; i < num.length; i++) {
    while (k > 0 && stack.length && stack[stack.length - 1] < num[i]) {
      stack.pop();
      k -= 1;
    }
    stack.push(num[i]);
  }

  // 끝에 k개를 잘라내야 한다.
  if (k > 0) stack = stack.slice(0, -k);

  return stack.join("");
}
