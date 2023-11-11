// 추억 점수 - https://school.programmers.co.kr/learn/courses/30/lessons/176963
function solution(name, yearning, photos) {
  const scoreObj = {};
  const answer = [];

  for (let i = 0; i < name.length; i++) {
    scoreObj[name[i]] = yearning[i];
  }

  for (const photo of photos) {
    let score = 0;
    for (let name of photo) {
      if (scoreObj[name]) score += scoreObj[name];
    }
    answer.push(score);
  }

  return answer;
}
