// 최소 직사각형
function solution(sizes) {
  let sorted_sizes = sizes.map((el) => el.sort((a, b) => a - b));

  // width들만 뽑아낸 배열과 height만 뽑아낸 배열 만들기
  let width_arr = sorted_sizes.map((el) => el[0]);
  let height_arr = sorted_sizes.map((el) => el[1]);
  let maxWidth = Math.max(...width_arr);
  let maxHeight = Math.max(...height_arr);

  return maxWidth * maxHeight;
}
