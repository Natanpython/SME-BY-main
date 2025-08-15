 function toggleMenu() {
      const menu = document.getElementById('menu');
      const hamburger = document.getElementById('hamburger');

      menu.classList.toggle('active');
      hamburger.classList.toggle('active');
    }
    function navegar() {
      const select = document.getElementById('seletor');
      const url = select.value;

      if (url) {
        window.location.href = url;
      }
    }