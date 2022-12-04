// 신고 결과 받기
function solution(id_list, report, k) {
  let answer = new Array(id_list.length).fill(0);
  let reported = {};

  // report의 중복 제거
  report = Array.from(new Set(report));

  // 신고 횟수 객체에 정보 저장
  for (let i = 0; i < report.length; i++) {
    let reported_id = report[i].split(" ")[1];
    reported[reported_id] = (reported[reported_id] || 0) + 1;
  }

  // 신고 횟수가 k를 넘는 것을 필터링함
  for (let i = 0; i < report.length; i++) {
    let get_mail = report[i].split(" ")[0];
    let reported_id = report[i].split(" ")[1];
    if (reported[reported_id] >= k) {
      answer[id_list.indexOf(get_mail)] += 1;
    }
  }

  return answer;
}
