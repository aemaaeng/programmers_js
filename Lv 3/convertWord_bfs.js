function solution(begin, target, words) {
  const visited = [];
  const queue = [];

  queue.push([begin, 0]);

  while (queue.length) {
    let [cur, step] = queue.shift();

    if (cur === target) return step;

    words.forEach((word) => {
      let diff = 0;

      if (visited.includes(word)) return;

      for (let i = 0; i < word.length; i++) {
        if (cur[i] !== word[i]) diff++;
      }

      if (diff === 1) {
        queue.push([word, step + 1]);
        visited.push(word);
      }
    });
  }

  return 0;
}
