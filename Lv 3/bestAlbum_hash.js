// https://school.programmers.co.kr/learn/courses/30/lessons/42579
function solution(genres, plays) {
  const answer = [];
  const bySong = {};
  const total = {};

  for (let i = 0; i < genres.length; i++) {
    if (!bySong[genres[i]]) bySong[genres[i]] = [];
    if (!total[genres[i]]) total[genres[i]] = 0;
    bySong[genres[i]].push([i, plays[i]]);
    total[genres[i]] += plays[i];
  }

  for (let genre in bySong) {
    bySong[genre] = bySong[genre].sort((a, b) => {
      if (b[1] === a[1]) {
        return a[0] - b[0];
      }
      return b[1] - a[1];
    });
  }

  const arr = [];
  for (let play in total) {
    arr.push([play, total[play]]);
  }
  arr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < arr.length; i++) {
    const genre = arr[i][0];
    let cnt = 0;

    while (bySong[genre].length && cnt < 2) {
      answer.push(bySong[genre].shift()[0]);
      cnt += 1;
    }
  }

  return answer;
}
