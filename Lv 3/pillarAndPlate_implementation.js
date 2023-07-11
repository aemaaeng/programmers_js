// https://school.programmers.co.kr/learn/courses/30/lessons/60061
// 기둥과 보 설치

// 헬퍼 함수들
function findIndex(el, arr) {
  // 기준 array에 el이 있는지 확인하는 함수 (있으면 인덱스 리턴, 없으면 -1 리턴)
  for (let i = 0; i < arr.length; i++) {
    let cnt = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (el[j] === arr[i][j]) {
        cnt += 1;
      }
      if (cnt === arr[i].length) return i;
    }
  }

  return -1;
}

function deleteElement(el, arr) {
  // 기준 2차원 array에서 el을 지운 array를 리턴하는 함수
  // splice 활용
  const idx = findIndex(el, arr);
  arr.splice(idx, 1);
  return arr;
}

function possible(answer) {
  for (let frame of answer) {
    const [x, y, stuff] = frame;
    if (stuff === 0) {
      // 배열 안에 특정 원소가 존재하는지 탐색하는 함수 작성 필요
      if (
        y === 0 ||
        findIndex([x - 1, y, 1], answer) !== -1 ||
        findIndex([x, y, 1], answer) !== -1 ||
        findIndex([x, y - 1, 0], answer) !== -1
      ) {
        continue;
      } else {
        return false;
      }
    } else if (stuff === 1) {
      // 양 쪽 기둥이 존재하는지 확인해야 하므로 && 연산자 사용하고 있음
      if (
        findIndex([x, y - 1, 0], answer) !== -1 ||
        findIndex([x + 1, y - 1, 0], answer) !== -1 ||
        (findIndex([x - 1, y, 1], answer) !== -1 &&
          findIndex([x + 1, y, 1], answer) !== -1)
      ) {
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
}

function solution(n, build_frame) {
  let answer = [];

  for (let frame of build_frame) {
    const [x, y, stuff, operation] = frame;
    // 설치와 삭제 분기
    if (operation === 0) {
      answer = deleteElement([x, y, stuff], answer);
      if (!possible(answer)) {
        // 불가능하면 다시 집어넣기
        answer.push([x, y, stuff]);
      }
    }

    if (operation === 1) {
      answer.push([x, y, stuff]);
      if (!possible(answer)) {
        // 불가능하면 삭제하기
        answer = deleteElement([x, y, stuff], answer);
      }
    }
  }

  return answer.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        // 기둥 우선
        return a[2] - b[2];
      }
      // y좌표 우선
      return a[1] - b[1];
    }
    // x좌표 우선
    return a[0] - b[0];
  });
}
