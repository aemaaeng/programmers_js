// 둘만의 암호 - https://school.programmers.co.kr/learn/courses/30/lessons/150370
function solution(s, skip, index) {
  s = s.split("");
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let removed = alphabet.split("").filter((el) => !skip.includes(el));

  for (let i = 0; i < s.length; i++) {
    let targetIdx = removed.indexOf(s[i]) + index;
    if (targetIdx >= removed.length) {
      targetIdx = targetIdx % removed.length;
    }
    s[i] = removed[targetIdx];
  }

  return s.join("");
}
