// 폰켓몬
function solution(nums) {
  let answer = 0;
  const obj = {};
  const visited = {};

  for (const num of nums) {
    if (!obj[num]) obj[num] = 0;
    if (visited[num] === undefined) visited[num] = false;
    obj[num] += 1;
  }

  let selectedCnt = 0;
  while (selectedCnt < nums.length / 2) {
    for (const key of Object.keys(obj)) {
      if (selectedCnt === nums.length / 2) break;
      if (obj[key] === 0) continue;
      if (visited[key] === false) {
        visited[key] = true;
        answer += 1;
      }
      obj[key] -= 1;
      selectedCnt += 1;
    }
  }

  return answer;
}

function anotherSolution(nums) {
  const limit = nums.length / 2;
  const arr = [...new Set(nums)];

  // 중복을 제거한 set의 크기와 원본 배열의 크기를 비교
  // set의 크기가 최대보다 더 크다면 최대로, 아니라면 set의 크기로
  return arr.length > limit ? limit : arr.length;
}
