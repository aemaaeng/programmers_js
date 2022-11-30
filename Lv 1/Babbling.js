function solution(babbling) {
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    // 중복 문자열은 미리 거르기
    if (
      babbling[i].includes("ayaaya") ||
      babbling[i].includes("yeye") ||
      babbling[i].includes("woowoo") ||
      babbling[i].includes("mama")
    )
      continue;

    babbling[i] = babbling[i].replaceAll("aya", " ");
    babbling[i] = babbling[i].replaceAll("ye", " ");
    babbling[i] = babbling[i].replaceAll("woo", " ");
    babbling[i] = babbling[i].replaceAll("ma", " ");
    // 맨 마지막에 공백은 전부 빈 문자열로 대체
    babbling[i] = babbling[i].replaceAll(" ", "");

    if (babbling[i].length === 0) {
      answer += 1;
    }
  }
  return answer;
}
