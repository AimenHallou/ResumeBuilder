
export const getResumeSuggestions = async (fileContent) => {

    
    return [
      {
        type: 'suggestion',
        message: 'Consider rephrasing this sentence for better readability.',
        line: 3,
      },
      {
        type: 'suggestion',
        message: 'This skill is not relevant to the target job position.',
        line: 6,
      },
    ];
  };
  