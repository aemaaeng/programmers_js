// https://school.programmers.co.kr/learn/courses/30/lessons/60059
// 90도 회전 함수
function clockwise(arr) {
  const turned = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      turned[i] ? turned[i].push(arr[j][i]) : (turned[i] = [arr[j][i]]);
    }
  }
  return turned;
}

// 리스트의 중앙 부분이 전부 1인지 확인하는 함수
function check(arr) {
  const L = arr.length / 3;
  for (let i = L; i < L * 2; i++) {
    for (let j = L; j < L * 2; j++) {
      if (arr[i][j] !== 1) return false;
    }
  }
  return true;
}

function solution(key, lock) {
  const N = lock.length;
  const M = key.length;
  const extended = Array.from(new Array(N * 3), () => new Array(N * 3).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      extended[i + N][j + N] = lock[i][j];
    }
  }

  // 회전을 4번 해봄
  for (let rotation = 0; rotation < 4; rotation++) {
    key = clockwise(key);

    for (let i = 0; i < N * 2; i++) {
      for (let j = 0; j < N * 2; j++) {
        for (let x = 0; x < M; x++) {
          for (let y = 0; y < M; y++) {
            extended[i + x][j + y] += key[x][y];
          }
        }

        if (check(extended) === true) return true;

        for (let x = 0; x < M; x++) {
          for (let y = 0; y < M; y++) {
            extended[i + x][j + y] -= key[x][y];
          }
        }
      }
    }
  }

  return false;
}
