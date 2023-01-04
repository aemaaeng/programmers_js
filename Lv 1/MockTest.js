// 모의고사 (완전탐색)
function solution(answers) {
  let most = [];
  let cnt1 = 0;
  let cnt2 = 0;
  let cnt3 = 0;

  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let j = 0;
  for (let i = 0; i < answers.length; i++) {
    if (i % one.length === 0) {
      j = 0;
    }
    if (answers[i] === one[j]) {
      cnt1++;
    }
    j++;
  }

  j = 0;
  for (let i = 0; i < answers.length; i++) {
    if (i % two.length === 0) {
      j = 0;
    }
    if (answers[i] === two[j]) {
      cnt2++;
    }
    j++;
  }

  j = 0;
  for (let i = 0; i < answers.length; i++) {
    if (i % three.length === 0) {
      j = 0;
    }
    if (answers[i] === three[j]) {
      cnt3++;
    }
    j++;
  }

  let arr = [cnt1, cnt2, cnt3];
  let max = Math.max(...arr);
  if (cnt1 === max) most.push(1);
  if (cnt2 === max) most.push(2);
  if (cnt3 === max) most.push(3);

  return most;
}
