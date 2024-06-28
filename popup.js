document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get(['selectedWord'], function(result) {
    if (result.selectedWord) {
      document.getElementById('word').textContent = result.selectedWord;
      
      fetch(`https://www.morfix.co.il/${result.selectedWord}`)
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const translations = doc.querySelectorAll('.Translation_content_heToen');
          
          let simplifiedWord = '';
          translations.forEach(translation => {
            const word = translation.querySelector('.Translation_spTop_heToen').textContent.trim();
            const simpleWord = translation.querySelector('.Translation_hemin_heToen span').textContent.trim();
            simplifiedWord += `<span class="bold-word">${word}</span>: ${simpleWord}\n`;
          });
          
          document.getElementById('simplified-word').innerHTML = simplifiedWord.trim();
        })
        .catch(error => {
          document.getElementById('simplified-word').textContent = 'Error fetching simplified word.';
          console.error('Error:', error);
        });
    } else {
      document.getElementById('simplified-word').textContent = 'No word selected.';
    }
  });
});
