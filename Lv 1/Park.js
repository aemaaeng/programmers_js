// 공원 산책 - https://school.programmers.co.kr/learn/courses/30/lessons/172928
function solution(park, routes) {
  park = park.map((el) => el.split(""));
  let currentPos;

  // 시작 지점 찾기
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === "S") currentPos = [i, j];
    }
  }

  const moveObj = {
    N: [-1, 0],
    S: [1, 0],
    E: [0, 1],
    W: [0, -1],
  };

  for (const route of routes) {
    const [direction, moves] = route.split(" ");
    let nx = currentPos[0];
    let ny = currentPos[1];
    let flag = false;

    for (let i = 0; i < Number(moves); i++) {
      nx += moveObj[direction][0];
      ny += moveObj[direction][1];

      if (nx < 0 || ny < 0 || nx >= park.length || ny >= park[0].length) {
        flag = true;
        break;
      }

      if (park[nx][ny] === "X") {
        flag = true;
        break;
      }
    }
    if (!flag) currentPos = [nx, ny];
  }

  return currentPos;
}
