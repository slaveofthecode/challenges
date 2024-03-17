export const isPangram = (sentence) => {
  
  sentence = sentence.toLowerCase();

  const alphabetLetter = new Set();

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char.match(/[a-z]/)) 
      alphabetLetter.add(char);
    
  }
  
  return alphabetLetter.size === 26;
  
};
