// 숫자 문자열과 영단어
function solution(s) {
  if (Number(s)) return Number(s);
  let answer = "";

  let obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let key = "";
  for (let i = 0; i < s.length; i++) {
    if (Number(s[i])) {
      answer += s[i];
    } else {
      key += s[i];
      if (Object.keys(obj).indexOf(key) !== -1) {
        answer += obj[key];
        key = "";
      }
    }
  }

  return Number(answer);
}
