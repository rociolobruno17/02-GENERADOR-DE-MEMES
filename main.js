window.onload = () => {

    // domtoimage.toBlob($card).then((blob) => {
    //     saveAs(blob, "my-meme.png");
    //   });

    function $(element) {
        return document.querySelector(element)
    }

    // Estas son todos mis elementos de HTML
    const $body = $("body")
    const $botonModo = $(".boton-modo")
    const $iconoModo = $("#icono-modo")
    const $textoModo = $("#texto-modo")

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
    const $inputBrillo = $("#brillo");

    const $inputOpacidad = $("#opacidad");
    const $inputContraste = $("#contraste");
    const $inputDesenfoque = $("#desenfoque");
    const $inputGrises = $("#grises");
    const $inputSepia = $("#sepia");
    const $inputHue = $("#hue");
    const $inputSaturacion = $("#saturacion");
    const $inputNegativo = $("#negativo");

    const $contenedorImagen = $("#contenedor-imagen");
    const $urlImagen = $("#url-imagen");
    const $cargarImagen = $("#cargar-imagen");
    const $botonTexto = $(".boton-texto");
    const $panelTexto = $(".panel-control-texto");
    const $botonImagen = $(".boton-imagen");
    const $panelImagen = $(".panel-control-imagen");
    const $botonFiltros = $("#reestablecer-filtros");

    const $botonCerrarTexto = $("#cerrar-texto");
    const $botonCerrarImagen = $("#cerrar-imagen");

    const $checkboxTextoSuperior = $("#checkbox-texto-superior");
    const $checkboxTextoInferior = $("#checkbox-texto-inferior");



    // Función para aplicar modo claro y modo oscuro
    $botonModo.addEventListener("click", () => {
        if ($body.classList.contains("modo-oscuro")) {

            // Cambiar a modo claro
            $body.classList.remove("modo-oscuro");
            $body.classList.add("modo-claro");

            // Actualizar icono y texto
            $iconoModo.classList.remove("fi-rr-moon-stars");
            $iconoModo.classList.add("fi-rr-brightness");
            $textoModo.textContent = "Claro";

        } else {

            // Cambiar a modo oscuro
            $body.classList.remove("modo-claro");
            $body.classList.add("modo-oscuro");

            // Actualizar icono y texto
            $iconoModo.classList.remove("fi-rr-brightness");
            $iconoModo.classList.add("fi-rr-moon-stars");
            $textoModo.textContent = "Oscuro";
        }
    });





    // Función para mostrar el panel de imagen y ocultar el de texto

    $botonImagen.addEventListener('click', () => {
        $panelImagen.classList.add('panel-visible');
        $panelTexto.classList.remove('panel-visible');
    });


    // Función para mostrar el panel de texto y ocultar el de imagen
    $botonTexto.addEventListener('click', () => {
        $panelTexto.classList.add('panel-visible');
        $panelImagen.classList.remove('panel-visible');
    });

    // Función para abrir y cerrar panel
    $botonCerrarTexto.addEventListener('click', () => {
        $panelTexto.classList.remove('panel-visible');
    });

    $botonCerrarImagen.addEventListener('click', () => {
        $panelImagen.classList.remove('panel-visible');
    });


    // Función paracargar imagen de usuario

    $cargarImagen.addEventListener("click", () => {
        $contenedorImagen.style.backgroundImage = `url(${$urlImagen.value})`
    });






    // Función para editar el panel de imagen
    $inputBrillo.addEventListener("input", () => {
        let aux = $contenedorImagen.style.filter;
        $contenedorImagen.style.filter = `${aux} brightness(${$inputBrillo.value})`;
    });


    $inputOpacidad.addEventListener("input", () => {
        let aux = $contenedorImagen.style.filter;
        $contenedorImagen.style.filter = `${aux} opacity(${$inputOpacidad.value})`;
    });


    $inputContraste.addEventListener("input", () => {
        let aux = $contenedorImagen.style.filter;
        $contenedorImagen.style.filter = `${aux} contrast(${$inputContraste.value}%)`;
    });

    $inputDesenfoque.addEventListener("input", () => {
        let aux = $contenedorImagen.style.filter;
        $contenedorImagen.style.filter = `${aux} blur(${$inputDesenfoque.value}px)`;
    });

    $inputGrises.addEventListener("input", () => {
        let aux = $contenedorImagen.style.filter;
        $contenedorImagen.style.filter = `${aux} grayscale(${$inputGrises.value}%)`;
    });

    $inputSepia.addEventListener("input", () => {
        let aux = $contenedorImagen.style.filter;
        $contenedorImagen.style.filter = `${aux} sepia(${$inputSepia.value}%)`;
    });

    $inputHue.addEventListener("input", () => {
        let aux = $contenedorImagen.style.filter;
        $contenedorImagen.style.filter = `${aux} hue-rotat(${$inputHue.value}deg)`;
    });

    $inputSaturacion.addEventListener("input", () => {
        let aux = $contenedorImagen.style.filter;
        $contenedorImagen.style.filter = `${aux} saturate(${$inputSaturacion.value}%)`;
    });

    $inputNegativo.addEventListener("input", () => {
        let aux = $contenedorImagen.style.filter;
        $contenedorImagen.style.filter = `${aux} invert(${$inputNegativo.value})`;
    });



    // Función para editar el panel de texto
    $inputTop.addEventListener("input", () => {
        $topCard.innerText = $inputTop.value
    })

    $checkboxTextoSuperior.addEventListener("change", () => {
        if ($checkboxTextoSuperior.checked) {
            $topCard.style.display = "none"; // Oculta el texto
        } else {
            $topCard.style.display = "block"; // Muestra el texto
        }
    });

    $inputBottom.addEventListener("input", () => {
        $bottomCard.innerText = $inputBottom.value
    })

    $checkboxTextoInferior.addEventListener("change", () => {
        if ($checkboxTextoInferior.checked) {
            $bottomCard.style.display = "none"; // Oculta el texto
        } else {
            $bottomCard.style.display = "block"; // Muestra el texto
        }
    });

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



    // Función para restablecer valores en el panel de texto
    function reestablecerValores() {
        $inputTop.value = ""
        $checkboxTextoSuperior.checked = ""
        $inputBottom.value = ""
        $checkboxTextoInferior.checked = ""
        $topCard.innerText = "Texto superior"
        $bottomCard.innerText = "Texto inferior"
        $card.style.backgroundColor = "white"
        $inputAlign.value = "center"
        $inputTamañoFuente.value = "21"
        $inputInterlineado.value = "1.5"
        $inputFuente.value = "'Courier New', monospace";
        $inputColorFondo.value = "#ffffff";
        $inputColor.value = "#50007f";

        $topCard.style.fontFamily = "'Courier New', monospace";
        $bottomCard.style.fontFamily = "'Courier New', monospace";

    }

    $buttonReestablecer.addEventListener("click", reestablecerValores)

    reestablecerValores()



    // Función para restablecer filtros en el panel de imagen
    function reestablecerFiltros() {
        $inputBrillo.value = "1"
        $inputOpacidad.value = "1"
        $inputContraste.value = "100"
        $inputDesenfoque.value = "0"
        $inputGrises.value = "0"
        $inputSepia.value = "0"
        $inputHue.value = "0"
        $inputSaturacion.value = "100"
        $inputNegativo.value = "1"
        $contenedorImagen.style.backgroundImage = ""
    }

    $botonFiltros.addEventListener("click", reestablecerFiltros)


    // Función para descargar imagen
    $botonDescargar.addEventListener("click", () => {
        // $card.style.width = "500px"
        domtoimage.toBlob($card).then((blob) => {
            saveAs(blob, "mi-meme.png");
        }).catch((error) => {
            console.log(error)
        });

    })



}