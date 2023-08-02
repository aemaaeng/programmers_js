// 가사 검색
// https://school.programmers.co.kr/learn/courses/30/lessons/60060

function binary_left(arr, target) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

function binary_right(arr, target) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

// 단어를 길이별로 분류한 함수에서 처음으로 그 단어가 등장하는 위치와 마지막으로 그 단어가 등장하는 위치를 이분 탐색으로 찾아내는 함수
function countWords(arr, leftVal, rightVal) {
  let rightIdx = binary_right(arr, rightVal);
  let leftIdx = binary_left(arr, leftVal);

  return rightIdx - leftIdx;
}

function reverse(word) {
  return word.split("").reverse().join("");
}

let arr = Array.from(new Array(10001), () => new Array());
let reversedArr = Array.from(new Array(10001), () => new Array());

function solution(words, queries) {
  const answer = [];

  for (const word of words) {
    arr[word.length].push(word);
    reversedArr[word.length].push(reverse(word));
  }

  arr = arr.map((el) => el.sort());
  reversedArr = reversedArr.map((el) => el.sort());

  let res = 0;
  for (const q of queries) {
    if (q[0] !== "?") {
      res = countWords(
        arr[q.length],
        q.replaceAll("?", "a"),
        q.replaceAll("?", "z")
      );
    } else {
      res = countWords(
        reversedArr[q.length],
        reverse(q),
        reverse(q).replaceAll("?", "z")
      );
    }
    answer.push(res);
  }

  return answer;
}

// "fro??"가 쿼리로 주어진 경우 길이가 5인 단어의 리스트에서 "froaa"보다 크고 "frozz"보다 작거나 같은 단어의 개수를 이진탐색으로 찾아낸다.
// 단어는 알파벳 순으로 크기 비교가 가능하다
// 와일드카드가 접두사로 등장하는 경우를 다루기 위해 단어를 뒤집어놓은 리스트도 만든다
