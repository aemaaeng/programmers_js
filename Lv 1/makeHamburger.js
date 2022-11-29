function solution(ingredient) {
  let answer = 0;
  let stack = [];

  ingredient.forEach((el, idx) => {
    stack.push(el);

    // 길이가 4개가 넘어가는 순간부터 top 비교
    if (stack.length >= 4) {
      const check = stack.slice(-4).join("");
      if (check === "1231") {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        answer += 1;
      }
    }
  });

  return answer;
}
