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






 // Función para aplicar modo claro y modo oscuro
    
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


// Función para que el usuario cargue la URL de una imagen en el panel de imagen

$cargarImagen.addEventListener("click", () => {
    // event.preventDefault(); // Prevenir el envío del formulario
    // const imageUrl = $urlImagen.value.trim(); // Obtener y limpiar la URL ingresada
    // if (imageUrl) {
    //     const imgElement = document.createElement("img"); // Crear un elemento <img>
    //     imgElement.src = imageUrl; // Asignar la URL como fuente
    //     imgElement.alt = "mi-meme.png"; // Agregar un texto alternativo
    //     $contenedorImagen.innerHTML = ""; // Limpiar cualquier contenido anterior
    //     $contenedorImagen.appendChild(imgElement); // Insertar la nueva imagen
    // } else {
    //     alert("Por favor, ingresa una URL válida."); // Avisar si el campo está vacío
    // }

    $contenedorImagen.style.backgroundImage = `url(${$urlImagen.value})`
});

// Función para editar el panel de imagen

$inputBrillo.addEventListener("input", () => {
    $contenedorImagen.style.filter = `brightness(${$inputBrillo.value})`;
});


$inputOpacidad.addEventListener("input", () => {
    $contenedorImagen.style.filter = `opacity(${$inputOpacidad.value})`;
});

    
$inputContraste.addEventListener("input", () => {
    $contenedorImagen.style.filter = `contrast(${$inputContraste.value}%)`;
});

$inputDesenfoque.addEventListener("input", () => {
    $contenedorImagen.style.filter = `blur(${$inputDesenfoque.value}px)`;
});

$inputGrises.addEventListener("input", () => {
    $contenedorImagen.style.filter = `grayscale	(${$inputGrises.value}%)`;
});

$inputSepia.addEventListener("input", () => {
    $contenedorImagen.style.filter = `sepia	(${$inputSepia.value}%)`;
});

$inputHue.addEventListener("input", () => {
    $contenedorImagen.style.filter = `hue-rotation (${$inputHue.value}deg)`;
});

$inputSaturacion.addEventListener("input", () => {
    $contenedorImagen.style.filter = `saturation (${$inputSaturacion.value}%)`;
});

$inputNegativo.addEventListener("input", () => {
    $contenedorImagen.style.filter = `invert (${$inputNegativo.value})`;
});


// Función para editar el panel de texto
    
    
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
    

    
    
        
    
    

    
    function reestablecerValores () {
        $inputTop.value = ""
        $inputBottom.value = ""
        $topCard.innerText = " Texto superior"
        $bottomCard.innerText = "Texto inferior "
        $card.style.backgroundColor = "white"
        $inputAlign.value = ""
        $inputTamañoFuente.value = ""
        $inputInterlineado.value = ""
        $inputFuente.value = ""
        $inputColorFondo.value = ""
        $inputColor.value = ""

    
    }
    
    $buttonReestablecer.addEventListener("click", reestablecerValores)
    
    reestablecerValores ()
    
function reestablecerFiltros () {
    $inputBrillo.value = "1"
    $inputOpacidad.value = "1"
    $inputContraste.value = "100"
    $inputDesenfoque.value = "0"
    $inputGrises.value = "0"
    $inputSepia.value = "0"
    $inputHue.value = "0"
    $inputSaturacion.value = "100"
    $inputNegativo.value = "0"
    $contenedorImagen.style.backgroundImage = ""
}

$botonFiltros.addEventListener("click", reestablecerFiltros)


    // function iniciarValores () {
    //     $inputBrillo.value = "1"
    //     $inputOpacidad.value = "1"
    //     $inputContraste.value = "100"
    //     $inputDesenfoque.value = "0"
    //     $inputGrises.value = "0"
    //     $inputSepia.value = "0"
    //     $inputHue.value = "0"
    //     $inputSaturacion.value = "100"
    //     $inputNegativo.value = "0"

    // }

    // iniciarValores ()
    




    $botonDescargar.addEventListener("click", () => {
        $card.style.width = "500px"
        domtoimage.toBlob($card).then((blob) => {
            saveAs(blob, "mi-meme.png");
          });
    })
    
    








    











    }