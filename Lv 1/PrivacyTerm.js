// https://school.programmers.co.kr/learn/courses/30/lessons/150370
// 구현 문제
function isExpired(today, dueDate) {
  today = today.split(".").map(Number);

  for (let i = 0; i < 3; i++) {
    if (today[i] > dueDate[i]) {
      return true;
    } else if (today[i] < dueDate[i]) {
      return false;
    } else {
      continue;
    }
  }

  return false;
}

function solution(today, terms, privacies) {
  const answer = [];

  const termsObj = {};
  terms.forEach((el) => {
    const [name, period] = el.split(" ");
    termsObj[name] = +period;
  });

  for (let i = 0; i < privacies.length; i++) {
    const [date, term] = privacies[i].split(" ");
    let [y, m, d] = date.split(".").map(Number);
    let temp = m;

    // 일단 더하고 나중에 처리하기
    // 12로 나눈 몫을 year에 더하고 나머지를 m에 더한다
    m = m + termsObj[term];

    if (m > 12) {
      if (m % 12 === 0) {
        y = y + m / 12 - 1;
        m = 12;
      } else {
        y = y + Math.floor(m / 12);
        m = m % 12;
      }
    }

    if (d === 1) {
      d = 28;
      m = m - 1;
    } else {
      d = d - 1;
    }

    if (isExpired(today, [y, m, d])) answer.push(i + 1);
  }

  return answer.sort((a, b) => a - b);
}
