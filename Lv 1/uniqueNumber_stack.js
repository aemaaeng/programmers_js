// https://school.programmers.co.kr/learn/courses/30/lessons/42586
function solution(arr) {
  // 수를 차례로 stack에 넣고
  // top과 arr[i]가 같으면 달라질 때까지 stack에서 pop
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && stack[stack.length - 1] === arr[i]) {
      stack.pop();
    }
    stack.push(arr[i]);
  }

  return stack;
}
