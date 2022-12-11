function solution(n) {
  let ternary = n.toString(3);
  let ternary_reversed = ternary.split("").reverse().join("");
  let answer = parseInt(ternary_reversed, 3);
  return answer;
}

// 참고: https://jsikim1.tistory.com/161
// Number.prototype.toString(): https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
// parseInt: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt
