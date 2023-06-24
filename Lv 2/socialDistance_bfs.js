// https://school.programmers.co.kr/learn/courses/30/lessons/81302

function checkDistance(room) {
  const arr = room.map((el) => el.split(""));
  const queue = [];

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (arr[i][j] === "P") queue.push([i, j]);
    }
  }

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= 5 || ny >= 5) continue;
      if (arr[nx][ny] === "X") continue;
      if (arr[nx][ny] === "P") return 0; // 바로 주변에 있음 -> 맨해튼 거리가 2보다 작으니까 바로 0 리턴

      for (let j = 0; j < 4; j++) {
        const nearNx = nx + dx[j];
        const nearNy = ny + dy[j];

        if (nearNx < 0 || nearNy < 0 || nearNx >= 5 || nearNy >= 5) continue;
        if (nearNx === x && nearNy === y) continue;
        if (arr[nearNx][nearNy] === "P") return 0;
      }
    }
  }

  return 1;
}

function solution(places) {
  const answer = [];

  for (let i = 0; i < places.length; i++) {
    answer.push(checkDistance(places[i]));
  }

  return answer;
}
