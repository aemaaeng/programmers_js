// 가장 가까운 같은 글자 - https://school.programmers.co.kr/learn/courses/30/lessons/142086
function solution(s) {
  const answer = [];
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    // 여기서 !obj[s[i]]로 작성하면 0번 인덱스도 false 처리되어서 정상적으로 결과가 출력되지 않음.
    if (obj[s[i]] === undefined) {
      // 처음 나오는 글자일 때
      obj[s[i]] = i;
      answer.push(-1);
    } else {
      // 이미 나온 적 있는 글자일 때
      // 현재 칸과 이전에 나온 인덱스의 차 구하기
      answer.push(i - obj[s[i]]);
      obj[s[i]] = i;
    }
  }

  return answer;
}
