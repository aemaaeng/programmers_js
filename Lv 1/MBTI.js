// 성격 유형 검사하기
function solution(survey, choices) {
  let answer = "";
  const scale = { 1: ["R", "T"], 2: ["C", "F"], 3: ["J", "M"], 4: ["A", "N"] };
  const result = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  const score = [3, 2, 1, 0, 1, 2, 3];

  for (let i = 0; i < choices.length; i++) {
    if (choices[i] < 4) {
      result[survey[i][0]] += score[choices[i] - 1];
    } else if (choices[i] > 4) {
      result[survey[i][1]] += score[choices[i] - 1];
    } else {
      continue;
    }
  }

  for (let i = 1; i < 5; i++) {
    if (result[scale[i][0]] >= result[scale[i][1]]) {
      answer += scale[i][0];
    } else if (result[scale[i][0]] < result[scale[i][1]]) {
      answer += scale[i][1];
    }
  }

  return answer;
}
