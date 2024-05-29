function smoothScroll(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado de seguir el enlace
    
    const targetId = event.target.getAttribute('href'); // Obtiene el ID del elemento de destino
    
    setTimeout(() => {
      const targetElement = document.querySelector(targetId); // Selecciona el elemento de destino
      
      window.scrollTo({
        top: targetElement.offsetTop, // Establece la posición de desplazamiento al elemento de destino
        behavior: 'smooth' // Agrega un efecto de desplazamiento suave
      });
    }, 100); // Añade un pequeño retraso de 100 milisegundos antes de iniciar el desplazamiento
  }
  