function solution(n, lost, reserve) {
  let answer = 0;
  // lost와 reserve에 겹치는 학생이 있을 수 있으므로 필터로 한 번 거르기
  // includes()는 불리언값을 반환, indexOf()는 인덱스를 반환(없으면 -1)
  // find()는 판별 함수를 만족하는 첫 번째 요소의 "값"을 반환한다.
  let getRobbed = lost
    .sort((a, b) => a - b)
    .filter((el) => !reserve.includes(el));
  let hasMore = reserve
    .sort((a, b) => a - b)
    .filter((el) => !lost.includes(el));

  const noUniform = getRobbed.filter((el) => {
    const lend = hasMore.find((reserve) => Math.abs(reserve - el) === 1);

    if (!lend) return el;

    hasMore = hasMore.filter((el) => el !== lend);
  });

  answer = n - noUniform.length;
  return answer;
}
