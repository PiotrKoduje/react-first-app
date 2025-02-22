const strContains = (sentence, word) => {
  //console.log('sentence: ', sentence, '|| word: ', word);
  const answer = sentence.toLowerCase().includes(word.toLowerCase()) ? true : false;
  return answer;
};

export default strContains;