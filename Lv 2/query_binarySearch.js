// https://school.programmers.co.kr/learn/courses/30/lessons/72412
// hash와 binarySearch를 이용해야 했던 문제

function combination(arr, score, map, start) {
  //java backend junior pizza
  const key = arr.join("");
  if (!map[key]) map[key] = [];
  map[key].push(+score);

  for (let i = start; i < arr.length; i++) {
    let copied = arr.slice();
    copied[i] = "-";
    // -를 포함해서 가능한 모든 조합을 만들어 맵에 넣는다
    combination(copied, score, map, i + 1);
  }
}

function binarySearch(arr, score) {
  if (!arr) return 0;
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] >= score) right = mid;
    else left = mid + 1;
  }

  return arr.length - left;
}

function solution(info, query) {
  const answer = [];

  const map = {};
  info.forEach((el) => {
    el = el.split(" ");
    const score = el.pop();
    combination(el, score, map, 0);
  });

  // 이분탐색을 위한 정렬
  for (let key in map) {
    map[key] = map[key].sort((a, b) => a - b);
  }

  for (let i = 0; i < query.length; i++) {
    let queryString = query[i].split(/ and | /);
    let queryScore = +queryString.pop();
    queryString = queryString.join("");
    // map[queryString]에서 query 점수를 기준으로 이분탐색을 해야한다.
    let scoreIdx = binarySearch(map[queryString], queryScore);
    answer.push(scoreIdx);
  }

  return answer;
}

// 처음에 썼던 코드 (효율성 테스트 통과 X)
// function isQualified(info, query) {
//   for (let i = 0; i < 5; i++) {
//     if (query[i] === "-") continue;
//     if (i === 4) {
//       if (+query[i] > +info[i]) return false;
//     } else {
//       if (query[i] !== info[i]) return false;
//     }
//   }
//   return true;
// }

// function solution(info, query) {
//   const answer = [];

//   let splittedInfo = info.map((el) => el.split(" "));
//   let splittedQuery = query.map((el) => {
//     el = el.split(" and ");
//     el.push(...el.pop().split(" "));
//     return el;
//   });

//   for (let i = 0; i < splittedQuery.length; i++) {
//     let cnt = 0;
//     for (let j = 0; j < splittedInfo.length; j++) {
//       if (isQualified(splittedInfo[j], splittedQuery[i])) cnt += 1;
//     }
//     answer.push(cnt);
//   }

//   return answer;
// }
