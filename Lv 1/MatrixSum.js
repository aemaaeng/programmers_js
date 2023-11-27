// 행렬의 덧셈 - https://school.programmers.co.kr/learn/courses/30/lessons/12950
function solution(arr1, arr2) {
  const answer = Array.from(
    new Array(arr1.length),
    () => new Array(arr1[0].length)
  );

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return answer;
}
