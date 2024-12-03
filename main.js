window.onload = () => {

    // domtoimage.toBlob($card).then((blob) => {
    //     saveAs(blob, "my-meme.png");
    //   });
    
    function $(element) {
        return document.querySelector (element)
    }
    
    const $body = $("body")
    const $botonModo = $(".boton-modo")
    const $inputTop = $("#textotop")
    const $inputBottom = $("#textobottom")
    const $inputColor = $("#textocolor")
    const $inputColorFondo = $("#textocolorfondo")
    const $inputAlign = $("#textoalign")
    const $card = $("#card")
    const $topCard = $("#topcard")
    const $bottomCard = $("#bottomcard")
    const $botonDescargar = $("#descargar")
    const $buttonReestablecer = $("#restablecer")
    const $inputFuente = $("#fuente-tipografica");
    const $inputTamañoFuente = $("#tamaño-fuente");
    const $inputInterlineado = $("#interlineado");
    
// Seleccionar elementos
const $botonTexto = document.querySelector('.boton-texto'); // Botón en el header
const $panelControl = document.querySelector('.panel-control'); // Panel lateral
    
    
    
    $botonModo.addEventListener("click", () => {
        if ($body.classList.contains("modo-oscuro")) {
            $body.classList.remove("modo-oscuro");
            $body.classList.add("modo-claro");
            $botonModo.innerText = "Modo oscuro" // Actualiza el texto
        } else {
            $body.classList.remove("modo-claro");
            $body.classList.add("modo-oscuro");
            $botonModo.innerText = "Modo claro" // Actualiza el texto
        }
    });
    
    
    
    
    
    
    $inputTop.addEventListener("input", () => {
        $topCard.innerText = $inputTop.value
    })
    
    $inputBottom.addEventListener("input", () => {
        $bottomCard.innerText = $inputBottom.value
    })
    
    $inputColor.addEventListener("input", () => {
        $card.style.color = $inputColor.value
    })
    
    $inputColorFondo.addEventListener("input", () => {
        $card.style.backgroundColor = $inputColorFondo.value
    })
    
    $inputAlign.addEventListener("input", () => {
        $card.style.textAlign = $inputAlign.value
    })
    
    $inputFuente.addEventListener("input", () => {
        $topCard.style.fontFamily = $inputFuente.value;
        $bottomCard.style.fontFamily = $inputFuente.value;
    });
    
    $inputTamañoFuente.addEventListener("input", () => {
        const tamaño = `${$inputTamañoFuente.value}px`;
        $topCard.style.fontSize = tamaño;
        $bottomCard.style.fontSize = tamaño;
    });
    
    $inputInterlineado.addEventListener("input", () => {
        const lineHeight = $inputInterlineado.value;
        $topCard.style.lineHeight = lineHeight;
        $bottomCard.style.lineHeight = lineHeight;
    });
    
    

    // Alternar la visibilidad del panel al hacer clic en el botón
    $botonTexto.addEventListener('click', () => {
    $panelControl.classList.toggle('oculto'); // Alterna la clase 'oculto'
    });

    
    
    $botonDescargar.addEventListener("click", () => {
        $card.style.width = "1200px"
        domtoimage.toBlob($card).then((blob) => {
            saveAs(blob, "mi-meme.png");
          });
    })
    
    
    
    
    
    
    function reestablecerValores () {
        $inputTop.value = "Top Text"
        $inputBottom.value = "Bottom Text"
        $topCard.innerText = "Top Text"
        $bottomCard.innerText = "Bottom Text"
        $card.style.backgroundColor = ""
        $inputAlign.value = ""
        $inputTamañoFuente.value = ""
        $inputInterlineado.value = ""
        $inputFuente.value = ""
        $inputColorFondo.value = ""
        $inputColor.value = ""
    }
    
    $buttonReestablecer.addEventListener("click", reestablecerValores)
    
    reestablecerValores ()
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }