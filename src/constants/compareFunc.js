
let compareText = (text1,text2,ref1,ref2) =>{
    const firstWords = text1.match(/[\wა-ჰ]+|[^\s\w]/g) || [];
    const secondWords = text2.match(/[\wა-ჰ]+|[^\s\w]/g) || [];

    if(firstWords.length === 0 || secondWords.length === 0){
        return;
    }
    const highlightedFirst = firstWords
      .map((word, ) => {
        if (!secondWords.includes(word)) {
          return `<span class="highlighted_left">${word}</span>`;
        }
        return word;
      })
      .join(" ");

    const highlightedSecond = secondWords
      .map((word, ) => {
        if (!firstWords.includes(word)) {
          return `<span class="highlighted_right">${word}</span>`;
        }
        return word;
      })
      .join(" ");

    if (ref1.current) ref1.current.innerHTML = highlightedFirst;
    if (ref2.current) ref2.current.innerHTML = highlightedSecond;
  };

  export default compareText;