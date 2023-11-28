// 최대공약수와 최소공배수 - https://school.programmers.co.kr/learn/courses/30/lessons/12940
function gcd(a, b) {
  if (a % b === 0) return b;
  else return gcd(b, a % b);
}

function lcm(a, b) {
  return Math.floor((a * b) / gcd(a, b));
}

function solution(n, m) {
  const answer = [];
  let num1 = Math.max(n, m);
  let num2 = Math.min(n, m);

  answer.push(gcd(num1, num2));
  answer.push(lcm(num1, num2));

  return answer;
}
