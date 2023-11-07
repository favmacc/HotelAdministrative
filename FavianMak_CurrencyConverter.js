const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function translateText() {
  rl.question('Enter text to translate: ', (sourceText) => {
    const targetLanguage = 'fr'; // Change to the target language code

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(sourceText)}&langpair=en|${targetLanguage}`;

    axios
      .get(url)
      .then((response) => {
        const translatedText = response.data.responseData.translatedText;
        console.log(`Translated text: ${translatedText}`);
        rl.close(); // Close the readline interface
      })
      .catch((error) => {
        console.error('Translation error:', error);
        rl.close(); // Close the readline interface
      });
  });
}

translateText();

module.exports = {
   
}