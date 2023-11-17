// 대충 만든 자판 - https://school.programmers.co.kr/learn/courses/30/lessons/160586
function solution(keymap, targets) {
  const answer = [];

  for (const str of targets) {
    let cnt = 0;

    // 문자열을 만들 수 있는가?
    for (let i = 0; i < str.length; i++) {
      let pos = 102;

      // 가장 가까운 위치 찾기
      keymap.forEach((key) => {
        if (key.indexOf(str[i]) !== -1) {
          pos = Math.min(key.indexOf(str[i]) + 1, pos);
        }
      });

      // 단어가 하나라도 없으면 -1로 만들고 반복문 멈추기
      if (pos === 102) {
        cnt = -1;
        break;
      }

      cnt += pos;
    }

    answer.push(cnt);
  }

  return answer;
}
