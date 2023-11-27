// 핸드폰 번호 가리기 - https://school.programmers.co.kr/learn/courses/30/lessons/12948
function solution(phone_number) {
  let answer = "*".repeat(phone_number.length - 4);

  answer = answer.concat(phone_number.slice(-4));

  return answer;
}
