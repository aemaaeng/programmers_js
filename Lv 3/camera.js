// 단속카메라
// https://school.programmers.co.kr/learn/courses/30/lessons/42884
function solution(routes) {
  let answer = 0;
  routes.sort((a, b) => a[1] - b[1]);

  let installedPos = -30001;

  for (let [start, end] of routes) {
    if (start <= installedPos) continue;
    else {
      answer += 1;
      installedPos = end;
    }
  }

  return answer;
}

// 문제 해결을 위한 아이디어를 떠올리는게 어려웠던 문제
// 진출점을 기준으로 오름차순 정렬한 후에 입력값을 살펴보며 진입지점이 카메라가 설치된 곳보다 값이 작으면 그냥 넘어가고 그것보다 크면 그 입력값의 진출점에 카메라를 새로 설치하는 식으로 해결해야 하는 문제이다.
