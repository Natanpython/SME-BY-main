const meuTrack = document.querySelector('.meu-carousel-track');
  const meuPrevButton = document.querySelector('.meu-prev');
  const meuNextButton = document.querySelector('.meu-next');

  let meuPosition = 0;
  const meuItemWidth = document.querySelector('.meu-carousel-item').offsetWidth + 20; // item + margem
  const meuVisibleWidth = document.querySelector('.meu-carousel').offsetWidth;
  const meuMaxScroll = meuTrack.scrollWidth - meuVisibleWidth;

  meuNextButton.addEventListener('click', () => {
    meuPosition -= meuItemWidth;
    if (Math.abs(meuPosition) > meuMaxScroll) {
      meuPosition = -meuMaxScroll;
    }
    meuTrack.style.transform = `translateX(${meuPosition}px)`;
  });

  meuPrevButton.addEventListener('click', () => {
    meuPosition += meuItemWidth;
    if (meuPosition > 0) {
      meuPosition = 0;
    }
    meuTrack.style.transform = `translateX(${meuPosition}px)`;
  });

   function toggleMenu() {
      const menu = document.getElementById('menu');
      const hamburger = document.getElementById('hamburger');

      menu.classList.toggle('active');
      hamburger.classList.toggle('active');
    }