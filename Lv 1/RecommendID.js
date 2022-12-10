// 신규 아이디 추천
function solution(new_id) {
  let answer = "";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let allowed = "-_.";

  new_id = new_id.toLowerCase();

  for (let i = 0; i < new_id.length; i++) {
    if (
      new_id[i] !== "0" &&
      !Number(new_id[i]) &&
      lower.indexOf(new_id[i]) === -1
    ) {
      if (allowed.indexOf(new_id[i]) === -1) {
        continue;
      }
    }
    answer += new_id[i];
  }

  answer = answer.replace(/\.{2,}/g, ".");

  while (answer[0] === ".") {
    answer = answer.slice(1);
  }
  while (answer[answer.length - 1] === ".") {
    answer = answer.slice(0, answer.length - 1);
  }

  if (answer.length === 0) answer = "a";
  if (answer.length >= 16) answer = answer.slice(0, 15);

  while (answer[answer.length - 1] === ".") {
    answer = answer.slice(0, answer.length - 1);
  }

  while (answer.length < 3) {
    answer = answer.concat(answer[answer.length - 1]);
  }
  return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("=.="));
console.log(solution("123_.def"));
console.log(solution("abcdefghijklmn.p"));
console.log(solution("0"));

// 정규표현식 이용 풀이
// function solution(new_id) {
//   const answer = new_id
//       .toLowerCase() // 1
//       .replace(/[^\w-_.]/g, '') // 2
//       .replace(/\.+/g, '.') // 3
//       .replace(/^\.|\.$/g, '') // 4
//       .replace(/^$/, 'a') // 5
//       .slice(0, 15).replace(/\.$/, ''); // 6
//   const len = answer.length;
//   return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// }
