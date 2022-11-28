function solution(food) {
  let answer = "";
  for (let i = 1; i < food.length; i++) {
    let half = Math.floor(food[i] / 2);
    answer += String(i).repeat(half);
  }
  // 나머지 반은 앞 문자열을 뒤집어서 덧붙이기
  let reversed = answer.split("").reverse().join("");
  answer += `0${reversed}`;
  return answer;
}
