// 구명보트
// https://school.programmers.co.kr/learn/courses/30/lessons/42885
function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);

  for (let i = 0, j = people.length - 1; i <= j; i++) {
    if (people[i] + people[j] <= limit) j--;
    answer += 1;
  }

  return answer;
}

// 내림차순으로 정렬
// for 반복문에 포인터를 두 개 선언하여 양 끝의 합이 limit과 작거나 같을 때에만 j의 값을 줄여나가는 방식으로 범위를 좁혀가며 문제를 해결한다.
