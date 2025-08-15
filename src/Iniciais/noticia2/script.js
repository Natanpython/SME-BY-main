 let slideAtual = 0;
        const slides = document.getElementById("slides");
        const totalSlides = slides.children.length;

        function mudarSlide(direcao) {
            slideAtual = (slideAtual + direcao + totalSlides) % totalSlides;
            slides.style.transform = `translateX(-${slideAtual * 100}%)`;
        }