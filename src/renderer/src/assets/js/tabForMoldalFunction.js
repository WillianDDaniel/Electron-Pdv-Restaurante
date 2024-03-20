const handleKeyDown = (e) => {
    const modalElement = document.querySelector('.ReactModal__Content'); // Seletor para o elemento do modal
    const focusableElements = modalElement.querySelectorAll('input, textarea, button'); // Obtém todos os elementos focáveis dentro do modal
  
    if (e.key === 'Tab') {
      const currentElement = e.target;
      const currentIndex = Array.from(focusableElements).indexOf(currentElement);
  
      let nextIndex;
  
      if (!e.shiftKey) {
        // Se a tecla "Tab" foi pressionada sem a tecla "Shift"
        nextIndex = currentIndex + 1; // Calcula o próximo índice
        // Se o próximo índice for igual ao número de elementos focáveis, voltamos ao primeiro elemento
        if (nextIndex === focusableElements.length) {
          nextIndex = 0;
        }
      } else {
        // Se a tecla "Shift + Tab" foi pressionada
        // Calcula o índice do elemento anterior, garantindo que volte ao final se estiver no início da lista
        nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
      }
  
      // Move o foco para o próximo ou anterior elemento, dependendo da tecla pressionada
      focusableElements[nextIndex].focus();
  
      e.preventDefault();
    }
  };
  
  export default handleKeyDown;
  


