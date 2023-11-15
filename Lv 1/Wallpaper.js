// 바탕화면 정리 - https://school.programmers.co.kr/learn/courses/30/lessons/161990
function solution(wallpaper) {
  wallpaper = wallpaper.map((el) => el.split(""));
  const a = [];
  const b = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        a.push(i);
        b.push(j);
      }
    }
  }

  const answer = [
    Math.min(...a),
    Math.min(...b),
    Math.max(...a) + 1,
    Math.max(...b) + 1,
  ];

  return answer;
}
