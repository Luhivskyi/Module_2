function findLongestWord(string) {
  // Пиши код ниже этой строки
  const word = string.split(' ');
    let longestWord = word[0] ;

    for (let i = 1 ; i < word.length; i ++)  {
        if ( longestWord.length < word[i].length)  {
          longestWord = word[i];
        }
    }
      return  longestWord ;
}