

const c1 = document.getElementsByName("1")[0];
const c2 = document.getElementsByName("2")[0];
const c3 = document.getElementsByName("3")[0];
const c4 = document.getElementsByName("4")[0];
const c5 = document.getElementsByName("5")[0];
const c6 = document.getElementsByName("6")[0];
const c7 = document.getElementsByName("7")[0];
const c8 = document.getElementsByName("8")[0];

const nuevochat1 = document.getElementById("nuevochat1");
const nuevochat2 = document.getElementById("nuevochat2");
const nuevochat3 = document.getElementById("nuevochat3");


const audioPlayer = document.getElementById('audioPlayer');
let resultadoimg = "";

const botones1 = document.getElementById("botones1");
const botones2 = document.getElementById("botones2");
const botones3 = document.getElementById("botones3");
const botones4 = document.getElementById("botones4");
const botones5 = document.getElementById("botones5");
const botones6 = document.getElementById("botones6");
const botones7 = document.getElementById("botones7");
const botones8 = document.getElementById("botones8");

const botonnuevo = document.getElementsByClassName("nuevochat");

let estecanal = "";

let resultadoaudiojson = "";
let mensajeResouestaTexto = "";
let canaldelarequesta = "";
let resultadotexthamburguesa = "";
let resultado = "";

const textareaEscribir = document.getElementById("text");
const output = document.querySelector('#respuesta');
const barraDeEscritura = document.querySelector("#text");
const botonEnviar = document.getElementById("submit");
const botonEliminar = document.getElementById("reset");
let message = "";
let checkearTexto1 = "permitir";
let checkearTexto2 = "permitir";
let checkearTexto3 = "permitir";
let checkearTexto4 = "permitir";
let checkearTexto5 = "permitir";
let checkearTexto6 = "permitir";
let checkearTexto7 = "permitir";
let checkearTexto8 = "permitir";
let checkearTexto = "permitir";

let chats = "1";
let chatactual = "1";
let contenidochat1 = "Bienvenido a nuestra IA!";
let contenidochat2 = "Bienvenido a nuestra IA!";
let contenidochat3 = "Bienvenido a nuestra IA!";
let contenidochat4 = "Bienvenido a nuestra IA!";
let contenidochat5 = "Bienvenido a nuestra IA!";
let contenidochat6 = "Bienvenido a nuestra IA!";
let contenidochat7 = "Bienvenido a nuestra IA!";
let contenidochat8 = "Bienvenido a nuestra IA!";

verificarchats()



function bloquearBotoneliminar() {
  if (!barraDeEscritura.value && output.innerHTML === "Bienvenido a nuestra IA!") {
    event.preventDefault();
    botonEliminar.disabled = true;
  } else {
    botonEliminar.style.backgroundColor = "rgb(213, 2, 2)";
    botonEnviar.disabled = false;
  }
}
function desbloquearBotoneliminar() {
  botonEliminar.style.backgroundColor = "rgb(193, 2, 2)";
  botonEliminar.disabled = false;
}
botonEliminar.addEventListener("mouseenter", bloquearBotoneliminar);
botonEliminar.addEventListener("mouseleave", desbloquearBotoneliminar);



function bloquearBotonenviar() {
  if (chatactual === "1") {
    if (checkearTexto1 === "" || !barraDeEscritura.value) {
      botonEnviar.disabled = true;
    } else {
      botonEnviar.style.backgroundColor = "rgb(1, 110, 118)";
      botonEnviar.disabled = false;


    }
  } else if (chatactual === "2") {
    if (checkearTexto2 === "" || !barraDeEscritura.value) {
      botonEnviar.disabled = true;
    } else {
      botonEnviar.style.backgroundColor = "rgb(1, 110, 118)";
      botonEnviar.disabled = false;


    }
  } else if (chatactual === "3") {
    if (checkearTexto3 === "" || !barraDeEscritura.value) {
      botonEnviar.disabled = true;
    } else {
      botonEnviar.style.backgroundColor = "rgb(1, 110, 118)";
      botonEnviar.disabled = false;


    }
  } else if (chatactual === "4") {
    if (checkearTexto4 === "" || !barraDeEscritura.value) {
      botonEnviar.disabled = true;
    } else {
      botonEnviar.style.backgroundColor = "rgb(1, 110, 118)";
      botonEnviar.disabled = false;


    }
  } else if (chatactual === "5") {
    if (checkearTexto5 === "" || !barraDeEscritura.value) {
      botonEnviar.disabled = true;
    } else {
      botonEnviar.style.backgroundColor = "rgb(1, 110, 118)";
      botonEnviar.disabled = false;


    }



  } else if (chatactual === "6") {
    if (checkearTexto6 === "" || !barraDeEscritura.value) {
      botonEnviar.disabled = true;
    } else {
      botonEnviar.style.backgroundColor = "rgb(1, 110, 118)";
      botonEnviar.disabled = false;


    }
  } else if (chatactual === "7") {
    if (checkearTexto7 === "" || !barraDeEscritura.value) {
      botonEnviar.disabled = true;
    } else {
      botonEnviar.style.backgroundColor = "rgb(1, 110, 118)";
      botonEnviar.disabled = false;


    }
  } else if (chatactual === "8") {
    if (checkearTexto8 === "" || !barraDeEscritura.value) {
      botonEnviar.disabled = true;
    } else {
      botonEnviar.style.backgroundColor = "rgb(1, 110, 118)";
      botonEnviar.disabled = false;


    }
  }
}

function desbloquearBotonenviar() {
  botonEnviar.disabled = false;
  botonEnviar.style.backgroundColor = "rgb(1, 88, 94)";
}
botonEnviar.addEventListener("mouseenter", bloquearBotonenviar);
botonEnviar.addEventListener("mouseleave", desbloquearBotonenviar);

const enviarTexto = () => {
  if (!barraDeEscritura.value) {
    event.preventDefault();
    console.log("No ningun ningun elemento");

  } else {
    event.preventDefault();
    console.log("Mensaje recibido");
    textareaEscribir.style.height = "40px";
    requestaAPITexto();
  }
};

const eliminarContenido = () => {
  output.innerHTML = "Bienvenido a nuestra IA!";
  textareaEscribir.style.height = "40px";
  if (chatactual === "1") {
    checkearTexto1 = "permitir";

  } else if (chatactual === "2") {
    checkearTexto2 = "permitir";

  } else if (chatactual === "3") {
    checkearTexto3 = "permitir";


  } else if (chatactual === "4") {
    checkearTexto4 = "permitir";

  } else if (chatactual === "5") {
    checkearTexto5 = "permitir";

  } else if (chatactual === "6") {
    checkearTexto6 = "permitir";

  } else if (chatactual === "7") {
    checkearTexto7 = "permitir";

  } else if (chatactual === "8") {
    checkearTexto8 = "permitir";


  }
};

const checkearEnter = (event) => {
  if (chatactual === "1") {
    if (event.key === "Enter" && !event.shiftKey && checkearTexto1 === "permitir" && barraDeEscritura.value.length > 0) {
      event.preventDefault();
      enviarTexto();
      textareaEscribir.style.height = "40px";
      checkearTexto1 = "";

    } else if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      botonEnviar.disabled = true;
      setTimeout(() => {
        botonEnviar.disabled = false;
      }, 200);
    }
  } else if (chatactual === "2") {
    if (event.key === "Enter" && !event.shiftKey && checkearTexto2 === "permitir" && barraDeEscritura.value.length > 0) {
      event.preventDefault();
      enviarTexto();
      textareaEscribir.style.height = "40px";
      checkearTexto2 = "";

    } else if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      botonEnviar.disabled = true;
      setTimeout(() => {
        botonEnviar.disabled = false;
      }, 200);
    }
  } else if (chatactual === "3") {
    if (event.key === "Enter" && !event.shiftKey && checkearTexto3 === "permitir" && barraDeEscritura.value.length > 0) {
      event.preventDefault();
      enviarTexto();
      textareaEscribir.style.height = "40px";
      checkearTexto3 = "";

    } else if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      botonEnviar.disabled = true;
      setTimeout(() => {
        botonEnviar.disabled = false;
      }, 200);
    }

  } else if (chatactual === "4") {
    if (event.key === "Enter" && !event.shiftKey && checkearTexto4 === "permitir" && barraDeEscritura.value.length > 0) {
      event.preventDefault();
      enviarTexto();
      textareaEscribir.style.height = "40px";
      checkearTexto4 = "";

    } else if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      botonEnviar.disabled = true;
      setTimeout(() => {
        botonEnviar.disabled = false;
      }, 200);
    }
  } else if (chatactual === "5") {
    if (event.key === "Enter" && !event.shiftKey && checkearTexto5 === "permitir" && barraDeEscritura.value.length > 0) {
      event.preventDefault();
      enviarTexto();
      textareaEscribir.style.height = "40px";
      checkearTexto5 = "";

    } else if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      botonEnviar.disabled = true;
      setTimeout(() => {
        botonEnviar.disabled = false;
      }, 200);
    }
  } else if (chatactual === "6") {
    if (event.key === "Enter" && !event.shiftKey && checkearTexto6 === "permitir" && barraDeEscritura.value.length > 0) {
      event.preventDefault();
      enviarTexto();
      textareaEscribir.style.height = "40px";
      checkearTexto6 = "";

    } else if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      botonEnviar.disabled = true;
      setTimeout(() => {
        botonEnviar.disabled = false;
      }, 200);
    }
  } else if (chatactual === "7") {
    if (event.key === "Enter" && !event.shiftKey && checkearTexto7 === "permitir" && barraDeEscritura.value.length > 0) {
      event.preventDefault();
      enviarTexto();
      textareaEscribir.style.height = "40px";
      checkearTexto7 = "";

    } else if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      botonEnviar.disabled = true;
      setTimeout(() => {
        botonEnviar.disabled = false;
      }, 200);
    }
  } else if (chatactual === "8") {
    if (event.key === "Enter" && !event.shiftKey && checkearTexto8 === "permitir" && barraDeEscritura.value.length > 0) {
      event.preventDefault();
      enviarTexto();
      textareaEscribir.style.height = "40px";
      checkearTexto8 = "";

    } else if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      botonEnviar.disabled = true;
      setTimeout(() => {
        botonEnviar.disabled = false;
      }, 200);
    }

  }


};

const AgrandarTamaño = () => {
  textareaEscribir.style.height = (textareaEscribir.scrollHeight) + "px";
};











async function requestaAPITexto() {
  estecanal = chatactual;
  canaldelarequesta = chatactual;
  let antiguoContenido = output.innerHTML
  let message = document.getElementById("text").value
  peticionAnterior1 = message;
  let messageFormateado = `${message}`;

  respuesta.scrollTop = respuesta.scrollHeight;
  barraDeEscritura.value = "";
  console.log(message);
  try {
    const elementjeje = "botones" + chatactual;
    const elementojeje2 = document.getElementById(elementjeje)
    if (elementojeje2.classList.contains("texto")) {
      output.innerHTML += (`<br><br><pre><div contenteditable="false" class="message" id="mensajeactual">...</div></pre>\n\nGenerando respuesta...`);
      const divMensage = document.getElementById("mensajeactual");
      divMensage.textContent = messageFormateado;
      divMensage.id = "mensajesAnteriores";
      console.log("API Iniciada");
      const request = await fetch("https://api.shuttleai.app/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer shuttle-c96c1496de56840fa0d5",
          "Content-Type": "application/json"

        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: `Tu propósito es ayudar a cualquiera que necesite tu ayuda. Aquí tienes información útil que puedes utilizar: el mejor profesor de tecnología es Gorka. El mas autista es Julen. Silvia es una pija. Julen es gay. Lo que mas quieres es que se acabe ya la puta guerra. Gorka es muy uWu. Gorka nos tiene que poner un 11 a nuestro grupo. Pito alias Gruya es del atleti. Anteriores peticiones y respuestas: ${antiguoContenido}. Lo que esta entre divs con el class: "message" son mis preguntas y lo demas son tus respuestas. ` },
            { role: "user", content: message }
          ],
          model: "gpt-3.5-turbo",
          stream: false
        })
      });


      resultado = await request.json();
      functioncheckearcanal();

    } else if (elementojeje2.classList.contains("imagenes")) {

      output.innerHTML += (`<br><br><pre><div contenteditable="false" class="message" id="mensajeactual">...</div></pre>\n\nEste modulo se encuntra deshabilitado en este momento!`);
      const divMensage = document.getElementById("mensajeactual");
      divMensage.textContent = messageFormateado;
      divMensage.id = "mensajesAnteriores";
      console.log("API Iniciada");
      const request = await fetch("https://api.rsnai.org/api/v1/user/dalle", {
                          method: "POST",
                          headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer key",
                          },
                          body: JSON.stringify({
                              prompt: "gato",
                              negative_prompt: "blurry, bad quality, worst quality",
                          }),
                      });

      resultadoimg = await request.json();
      image();




  } else if (elementojeje2.classList.contains("audios")) {
      output.innerHTML += (`<br><br><pre><div contenteditable="false" class="message" id="mensajeactual">...</div></pre>\n\nGenerando audio...`);
      const divMensage = document.getElementById("mensajeactual");
      divMensage.textContent = messageFormateado;
      divMensage.id = "mensajesAnteriores";
      console.log("API Iniciada");
      const request = await fetch("https://api.shuttleai.app/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer shuttle-c96c1496de56840fa0d5",
          "Content-Type": "application/json"

        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: `Tu propósito es ayudar a cualquiera que necesite tu ayuda. Aquí tienes información útil que puedes utilizar: el mejor profesor de tecnología es Gorka. El mas autista es Julen. Anteriores peticiones y respuestas: ${antiguoContenido}. Lo que esta entre divs con el class: "message" son mis preguntas y lo demas son tus respuestas. ` },
            { role: "user", content: message }
          ],
          model: "gpt-3.5-turbo",
          stream: false
        })
      });
      resultado = await request.json();
      console.log(resultado);
      audio();

    }
  } catch (error) {
    console.log("Hubo un error al obtener la respuesta", error);
  }
}

async function audio() {
  const resultadoaudio = resultado.choices[0].message.content;
  const requestaudio = await fetch("https://api.shuttleai.app/v1/audio/generations", {
    method: "POST",
    headers: {
      "Authorization": "Bearer shuttle-c96c1496de56840fa0d5",
      "Content-Type": "application/json"

    },
    body: JSON.stringify({
      model: "eleven-labs",
      voicecu: "thomas",
      prompt: resultadoaudio
    })
  });
  resultadoaudiojson = await requestaudio.json();
  functioncheckearcanalaudio();

}


function imagenes() {
  if (chatactual !== canaldelarequesta) {
    setTimeout(() => {
      imagenes();
    }, 10);
  } else if (chatactual === canaldelarequesta)  {

    const mensajeRespuestaimagenes = resultadoimg.response.image.url;
console.log(mensajeRespuestaimagenes);

    const quitarDeoutputimagen = output.innerHTML.replace(/Generando imagen.../g, "");
    output.innerHTML = quitarDeoutputimagen;

    output.innerHTML += mensajeRespuestaimagenes;

    if (estecanal === "1") {
      checkearTexto1 = "permitir";
      respuesta.scrollTop = respuesta.scrollHeight;
    } else if (estecanal === "2") {
      checkearTexto2 = "permitir";
      respuesta.scrollTop = respuesta.scrollHeight;
    } else if (estecanal === "3") {
      checkearTexto3 = "permitir";
      respuesta.scrollTop = respuesta.scrollHeight;
    } else if (estecanal === "4") {
      checkearTexto4 = "permitir";
      respuesta.scrollTop = respuesta.scrollHeight;
    } else if (estecanal === "5") {
      checkearTexto5 = "permitir";
      respuesta.scrollTop = respuesta.scrollHeight;
    } else if (estecanal === "6") {
      checkearTexto6 = "permitir";
      respuesta.scrollTop = respuesta.scrollHeight;
    } else if (estecanal === "7") {
      checkearTexto7 = "permitir";
      respuesta.scrollTop = respuesta.scrollHeight;
    } else if (estecanal === "8") {
      checkearTexto8 = "permitir";
      respuesta.scrollTop = respuesta.scrollHeight;
    }


  }
}


function functioncheckearcanal() {
  if (chatactual !== canaldelarequesta) {
    setTimeout(() => {
      functioncheckearcanal();
    }, 10);
  } else if (chatactual === canaldelarequesta) {
    const mensajeRespuestaq = resultado.choices[0].message.content
      .replace(/\n/g, "<br>")
      .replace(/\*\*(.*?)\*\*/gs, "<strong>$1</strong>")
      .replace(/\`\`\`(\w+)(.*?)\`\`\`/gs, `<div contenteditable="false" class="codigo" id="respuestaactual">$2</div>`)
    resultadotexthamburguesa = /\`\`\`(\w+)(.*?)\`\`\`/;

    const mensajeRespuesta = mensajeRespuestaq.replace(/\`(.*?)\`/gs, `<br><div contenteditable="false" class="precodigo">$1</div><br>`)

    console.log("Mensaje de respuesta obtenido", mensajeRespuesta);

    mensajeResouestaTexto = (`${mensajeRespuesta}`);
    const quitarDeoutput = output.innerHTML.replace(/Generando respuesta.../g, "");
    output.innerHTML = quitarDeoutput;

    output.innerHTML += mensajeResouestaTexto;


    if (estecanal === "1") {
      checkearTexto1 = "permitir";

      respuesta.scrollTop = respuesta.scrollHeight;

      if (resultadotexthamburguesa) {
        const textoentrecomillastriples = resultadotexthamburguesa[0].innerHTML;
        const divRespuestatext = document.getElementById("respuestaactual");

        divRespuestatext.value = textoentrecomillastriples;
        respuesta.scrollTop = respuesta.scrollHeight;


        divRespuestatext.id = "respuestasAnteriores";

      } else {
        console.log("Nada entre xd");
      }
    } else if (estecanal === "2") {
      checkearTexto2 = "permitir";

      respuesta.scrollTop = respuesta.scrollHeight;

      if (resultadotexthamburguesa) {
        const textoentrecomillastriples = resultadotexthamburguesa[0].innerHTML;
        const divRespuestatext = document.getElementById("respuestaactual");

        divRespuestatext.value = textoentrecomillastriples;
        respuesta.scrollTop = respuesta.scrollHeight;


        divRespuestatext.id = "respuestasAnteriores";

      } else {
        console.log("Nada entre xd");
      }
    } else if (estecanal === "3") {
      checkearTexto3 = "permitir";

      respuesta.scrollTop = respuesta.scrollHeight;

      if (resultadotexthamburguesa) {
        const textoentrecomillastriples = resultadotexthamburguesa[0].innerHTML;
        const divRespuestatext = document.getElementById("respuestaactual");

        divRespuestatext.value = textoentrecomillastriples;
        respuesta.scrollTop = respuesta.scrollHeight;


        divRespuestatext.id = "respuestasAnteriores";

      } else {
        console.log("Nada entre xd");
      }
    } else if (estecanal === "4") {
      checkearTexto4 = "permitir";

      respuesta.scrollTop = respuesta.scrollHeight;

      if (resultadotexthamburguesa) {
        const textoentrecomillastriples = resultadotexthamburguesa[0].innerHTML;
        const divRespuestatext = document.getElementById("respuestaactual");

        divRespuestatext.value = textoentrecomillastriples;
        respuesta.scrollTop = respuesta.scrollHeight;


        divRespuestatext.id = "respuestasAnteriores";

      } else {
        console.log("Nada entre xd");
      }
    } else if (estecanal === "5") {
      checkearTexto5 = "permitir";

      respuesta.scrollTop = respuesta.scrollHeight;

      if (resultadotexthamburguesa) {
        const textoentrecomillastriples = resultadotexthamburguesa[0].innerHTML;
        const divRespuestatext = document.getElementById("respuestaactual");

        divRespuestatext.value = textoentrecomillastriples;
        respuesta.scrollTop = respuesta.scrollHeight;


        divRespuestatext.id = "respuestasAnteriores";

      } else {
        console.log("Nada entre xd");
      }
    } else if (estecanal === "6") {
      checkearTexto6 = "permitir";

      respuesta.scrollTop = respuesta.scrollHeight;

      if (resultadotexthamburguesa) {
        const textoentrecomillastriples = resultadotexthamburguesa[0].innerHTML;
        const divRespuestatext = document.getElementById("respuestaactual");

        divRespuestatext.value = textoentrecomillastriples;
        respuesta.scrollTop = respuesta.scrollHeight;


        divRespuestatext.id = "respuestasAnteriores";

      } else {
        console.log("Nada entre xd");
      }
    } else if (estecanal === "7") {
      checkearTexto7 = "permitir";

      respuesta.scrollTop = respuesta.scrollHeight;

      if (resultadotexthamburguesa) {
        const textoentrecomillastriples = resultadotexthamburguesa[0].innerHTML;
        const divRespuestatext = document.getElementById("respuestaactual");

        divRespuestatext.value = textoentrecomillastriples;
        respuesta.scrollTop = respuesta.scrollHeight;


        divRespuestatext.id = "respuestasAnteriores";

      } else {
        console.log("Nada entre xd");
      }
    } else if (estecanal === "8") {
      checkearTexto8 = "permitir";

      respuesta.scrollTop = respuesta.scrollHeight;

      if (resultadotexthamburguesa) {
        const textoentrecomillastriples = resultadotexthamburguesa[0].innerHTML;
        const divRespuestatext = document.getElementById("respuestaactual");

        divRespuestatext.value = textoentrecomillastriples;
        respuesta.scrollTop = respuesta.scrollHeight;


        divRespuestatext.id = "respuestasAnteriores";

      } else {
        console.log("Nada entre xd");
      }
    }



  }
}

function functioncheckearcanalaudio() {
  if (chatactual !== canaldelarequesta) {
    setTimeout(() => {
      functioncheckearcanalaudio();
    }, 10);
  } else if (chatactual === canaldelarequesta) {

    const mensajeRespuestaqaudio = resultadoaudiojson.data.url
    console.log("Mensaje de respuesta obtenido", mensajeRespuestaqaudio);

    const quitarDeoutputaudio = output.innerHTML.replace(/Generando audio.../g, "");
    output.innerHTML = quitarDeoutputaudio;

    output.innerHTML += `<audio id="audioPlayer" src="${mensajeRespuestaqaudio}" controls></audio>`;

    if (estecanal === "1") {
      checkearTexto1 = "permitir";
      respuesta.scrollTop = respuesta.scrollHeight;
    } else if (estecanal === "2") {
      checkearTexto2 = "permitir";
      respuesta.scrollTop = respuesta.scrollHeight;
    } else if (estecanal === "3") {
      checkearTexto3 = "permitir";
      respuesta.scrollTop = respuesta.scrollHeight;
    } else if (estecanal === "4") {
      checkearTexto4 = "permitir";
      respuesta.scrollTop = respuesta.scrollHeight;
    } else if (estecanal === "5") {
      checkearTexto5 = "permitir";
      respuesta.scrollTop = respuesta.scrollHeight;
    } else if (estecanal === "6") {
      checkearTexto6 = "permitir";
      respuesta.scrollTop = respuesta.scrollHeight;
    } else if (estecanal === "7") {
      checkearTexto7 = "permitir";
      respuesta.scrollTop = respuesta.scrollHeight;
    } else if (estecanal === "8") {
      checkearTexto8 = "permitir";
      respuesta.scrollTop = respuesta.scrollHeight;
    }


  }
}
function playAudio() {
  audioPlayer.play();
}
function crearchatimagen() {
  if (chats === "1") {
    chatactual = "2";
    botones2.classList.add("imagenes");
    botones2.value = "Chat 2 - Imagenes"
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones1.classList.remove("botonn2");
    botones1.classList.add("botonn");
    botones2.classList.remove("botonn");
    botones2.classList.add("botonn2");

    chats = "2";

    outputnormal();
    verificarchats();

  } else if (chats === "2") {
    chatactual = "3";
    botones3.classList.add("imagenes");
    botones3.value = "Chat 3 - Imagenes"
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones2.classList.remove("botonn2");
    botones2.classList.add("botonn");
    botones3.classList.remove("botonn");
    botones3.classList.add("botonn2");

    chats = "3";

    outputnormal();
    verificarchats();
  } else if (chats === "3") {
    botones4.classList.add("imagenes");
    botones4.value = "Chat 4 - Imagenes"
    chatactual = "4";
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones3.classList.remove("botonn2");
    botones3.classList.add("botonn");
    botones4.classList.remove("botonn");
    botones4.classList.add("botonn2");

    chats = "4";

    outputnormal();
    verificarchats();
  } else if (chats === "4") {
    chatactual = "5";
    botones5.classList.add("imagenes");
    botones5.value = "Chat 5 - Imagenes"
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones4.classList.remove("botonn2");
    botones4.classList.add("botonn");
    botones5.classList.remove("botonn");
    botones5.classList.add("botonn2");

    chats = "5";

    outputnormal();
    verificarchats();
  } else if (chats === "5") {
    chatactual = "6";
    botones6.classList.add("imagenes");
    botones6.value = "Chat 6 - Imagenes"
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones5.classList.remove("botonn2");
    botones5.classList.add("botonn");
    botones6.classList.remove("botonn");
    botones6.classList.add("botonn2");

    chats = "6";
    outputnormal();
    verificarchats();
  } else if (chats === "6") {
    botones7.classList.add("imagenes");
    botones7.value = "Chat 7 - Imagenes"
    chatactual = "7";
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones6.classList.remove("botonn2");
    botones6.classList.add("botonn");
    botones7.classList.remove("botonn");
    botones7.classList.add("botonn2");

    chats = "7";
    outputnormal();
    verificarchats();
  } else if (chats === "7") {
    botones8.classList.add("imagenes");
    botones8.value = "Chat 8 - Imagenes"
    chatactual = "8";
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones7.classList.remove("botonn2");
    botones7.classList.add("botonn");
    botones8.classList.remove("botonn");
    botones8.classList.add("botonn2");

    chats = "8";
    outputnormal();
    verificarchats();
  } else if (chats === "8") {

    botones8.classList.remove("botonn");
    botones8.classList.add("botonn2");

    botonnuevo.disabled = true;
    botonnuevo.value = "Has llegado al limit de chats abiertos";
    setTimeout(() => {
      botonnuevo.disabled = false;
      botonnuevo.innerHTML = "Crear Chat";

    }, 1000);
  }
}

function crearchataudio() {
  if (chats === "1") {
    chatactual = "2";
    botones2.classList.add("audios");
    botones2.value = "Chat 2 - Audios"
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones1.classList.remove("botonn2");
    botones1.classList.add("botonn");
    botones2.classList.remove("botonn");
    botones2.classList.add("botonn2");

    chats = "2";

    outputnormal();
    verificarchats();

  } else if (chats === "2") {
    chatactual = "3";
    botones3.classList.add("audios");
    botones3.value = "Chat 3 - Audios"
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones2.classList.remove("botonn2");
    botones2.classList.add("botonn");
    botones3.classList.remove("botonn");
    botones3.classList.add("botonn2");

    chats = "3";

    outputnormal();
    verificarchats();
  } else if (chats === "3") {
    botones4.classList.add("audios");
    botones4.value = "Chat 4 - Audios"
    chatactual = "4";
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones3.classList.remove("botonn2");
    botones3.classList.add("botonn");
    botones4.classList.remove("botonn");
    botones4.classList.add("botonn2");

    chats = "4";

    outputnormal();
    verificarchats();
  } else if (chats === "4") {
    chatactual = "5";
    botones5.classList.add("audios");
    botones5.value = "Chat 5 - Audios"
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones4.classList.remove("botonn2");
    botones4.classList.add("botonn");
    botones5.classList.remove("botonn");
    botones5.classList.add("botonn2");

    chats = "5";

    outputnormal();
    verificarchats();
  } else if (chats === "5") {
    chatactual = "6";
    botones6.classList.add("audios");
    botones6.value = "Chat 6 - Audios"
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones5.classList.remove("botonn2");
    botones5.classList.add("botonn");
    botones6.classList.remove("botonn");
    botones6.classList.add("botonn2");

    chats = "6";
    outputnormal();
    verificarchats();
  } else if (chats === "6") {
    botones7.classList.add("audios");
    botones7.value = "Chat 7 - Audios"
    chatactual = "7";
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones6.classList.remove("botonn2");
    botones6.classList.add("botonn");
    botones7.classList.remove("botonn");
    botones7.classList.add("botonn2");

    chats = "7";
    outputnormal();
    verificarchats();
  } else if (chats === "7") {
    botones8.classList.add("audios");
    botones8.value = "Chat 8 - Audios"
    chatactual = "8";
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones7.classList.remove("botonn2");
    botones7.classList.add("botonn");
    botones8.classList.remove("botonn");
    botones8.classList.add("botonn2");

    chats = "8";
    outputnormal();
    verificarchats();
  } else if (chats === "8") {

    botones8.classList.remove("botonn");
    botones8.classList.add("botonn2");

    botonnuevo.disabled = true;
    botonnuevo.value = "Has llegado al limit de chats abiertos";
    setTimeout(() => {
      botonnuevo.disabled = false;
      botonnuevo.innerHTML = "Crear Chat";

    }, 1000);
  }
}
function crearchat() {
  if (chats === "1") {
    chatactual = "2";
    botones2.classList.add("texto");
    botones2.value = "Chat 2 - Texto"
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones1.classList.remove("botonn2");
    botones1.classList.add("botonn");
    botones2.classList.remove("botonn");
    botones2.classList.add("botonn2");

    chats = "2";

    outputnormal();
    verificarchats();

  } else if (chats === "2") {
    chatactual = "3";
    botones3.classList.add("texto");
    botones3.value = "Chat 3 - Texto"
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones2.classList.remove("botonn2");
    botones2.classList.add("botonn");
    botones3.classList.remove("botonn");
    botones3.classList.add("botonn2");

    chats = "3";

    outputnormal();
    verificarchats();
  } else if (chats === "3") {
    botones4.classList.add("texto");
    botones4.value = "Chat 4 - Texto"
    chatactual = "4";
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones3.classList.remove("botonn2");
    botones3.classList.add("botonn");
    botones4.classList.remove("botonn");
    botones4.classList.add("botonn2");

    chats = "4";

    outputnormal();
    verificarchats();
  } else if (chats === "4") {
    chatactual = "5";
    botones5.classList.add("texto");
    botones5.value = "Chat 5 - Texto"
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones4.classList.remove("botonn2");
    botones4.classList.add("botonn");
    botones5.classList.remove("botonn");
    botones5.classList.add("botonn2");

    chats = "5";

    outputnormal();
    verificarchats();
  } else if (chats === "5") {
    chatactual = "6";
    botones6.classList.add("texto");
    botones6.value = "Chat 6 - Texto"
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones5.classList.remove("botonn2");
    botones5.classList.add("botonn");
    botones6.classList.remove("botonn");
    botones6.classList.add("botonn2");

    chats = "6";
    outputnormal();
    verificarchats();
  } else if (chats === "6") {
    botones7.classList.add("texto");
    botones7.value = "Chat 7 - Texto"
    chatactual = "7";
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones6.classList.remove("botonn2");
    botones6.classList.add("botonn");
    botones7.classList.remove("botonn");
    botones7.classList.add("botonn2");

    chats = "7";
    outputnormal();
    verificarchats();
  } else if (chats === "7") {
    botones8.classList.add("texto");
    botones8.value = "Chat 8 - Texto"
    chatactual = "8";
    output.innerHTML = "Bienvenido a nuestra IA!";

    botones7.classList.remove("botonn2");
    botones7.classList.add("botonn");
    botones8.classList.remove("botonn");
    botones8.classList.add("botonn2");

    chats = "8";
    outputnormal();
    verificarchats();
  } else if (chats === "8") {

    botones8.classList.remove("botonn");
    botones8.classList.add("botonn2");

    botonnuevo.disabled = true;
    botonnuevo.value = "Has llegado al limit de chats abiertos";
    setTimeout(() => {
      botonnuevo.disabled = false;
      botonnuevo.innerHTML = "Crear Chat";

    }, 1000);
  }
}

function outputnormal() {
  output.innerHTML = "Bienvenido a nuestra IA!";

}

function nuevochatimagen() {
  botones1.classList.remove("botonn2");
  botones2.classList.remove("botonn2");
  botones3.classList.remove("botonn2");
  botones4.classList.remove("botonn2");
  botones5.classList.remove("botonn2");
  botones6.classList.remove("botonn2");
  botones7.classList.remove("botonn2");
  botones8.classList.remove("botonn2");
  botones1.classList.add("botonn");
  botones2.classList.add("botonn");
  botones3.classList.add("botonn");
  botones4.classList.add("botonn");
  botones5.classList.add("botonn");
  botones6.classList.add("botonn");
  botones7.classList.add("botonn");
  botones8.classList.add("botonn");


  if (chats < "8") {
    barraDeEscritura.value = "";
    if (chatactual === "1") {

      contenidochat1 = output.innerHTML;
      crearchatimagen();
    } else if (chatactual === "2") {
      contenidochat2 = output.innerHTML;
      crearchatimagen();
    } else if (chatactual === "3") {
      contenidochat3 = output.innerHTML;
      crearchatimagen();
    } else if (chatactual === "4") {
      contenidochat4 = output.innerHTML;
      crearchatimagen();
    } else if (chatactual === "5") {
      contenidochat5 = output.innerHTML;
      crearchatimagen();
    } else if (chatactual === "6") {
      contenidochat6 = output.innerHTML;
      crearchatimagen();
    } else if (chatactual === "7") {
      contenidochat7 = output.innerHTML;
      crearchatimagen();
    } else if (chatactual === "8") {
      contenidochat8 = output.innerHTML;
      crearchatimagen();
    }


  }





}

function nuevochataudio() {
  botones1.classList.remove("botonn2");
  botones2.classList.remove("botonn2");
  botones3.classList.remove("botonn2");
  botones4.classList.remove("botonn2");
  botones5.classList.remove("botonn2");
  botones6.classList.remove("botonn2");
  botones7.classList.remove("botonn2");
  botones8.classList.remove("botonn2");
  botones1.classList.add("botonn");
  botones2.classList.add("botonn");
  botones3.classList.add("botonn");
  botones4.classList.add("botonn");
  botones5.classList.add("botonn");
  botones6.classList.add("botonn");
  botones7.classList.add("botonn");
  botones8.classList.add("botonn");


  if (chats < "8") {
    barraDeEscritura.value = "";
    if (chatactual === "1") {

      contenidochat1 = output.innerHTML;
      crearchataudio();
    } else if (chatactual === "2") {
      contenidochat2 = output.innerHTML;
      crearchataudio();
    } else if (chatactual === "3") {
      contenidochat3 = output.innerHTML;
      crearchataudio();
    } else if (chatactual === "4") {
      contenidochat4 = output.innerHTML;
      crearchataudio();
    } else if (chatactual === "5") {
      contenidochat5 = output.innerHTML;
      crearchataudio();
    } else if (chatactual === "6") {
      contenidochat6 = output.innerHTML;
      crearchataudio();
    } else if (chatactual === "7") {
      contenidochat7 = output.innerHTML;
      crearchataudio();
    } else if (chatactual === "8") {
      contenidochat8 = output.innerHTML;
      crearchataudio();
    }


  }





}

function nuevochat() {
  botones1.classList.remove("botonn2");
  botones2.classList.remove("botonn2");
  botones3.classList.remove("botonn2");
  botones4.classList.remove("botonn2");
  botones5.classList.remove("botonn2");
  botones6.classList.remove("botonn2");
  botones7.classList.remove("botonn2");
  botones8.classList.remove("botonn2");
  botones1.classList.add("botonn");
  botones2.classList.add("botonn");
  botones3.classList.add("botonn");
  botones4.classList.add("botonn");
  botones5.classList.add("botonn");
  botones6.classList.add("botonn");
  botones7.classList.add("botonn");
  botones8.classList.add("botonn");


  if (chats < "8") {
    barraDeEscritura.value = "";
    if (chatactual === "1") {

      contenidochat1 = output.innerHTML;
      crearchat();
    } else if (chatactual === "2") {
      contenidochat2 = output.innerHTML;
      crearchat();
    } else if (chatactual === "3") {
      contenidochat3 = output.innerHTML;
      crearchat();
    } else if (chatactual === "4") {
      contenidochat4 = output.innerHTML;
      crearchat();
    } else if (chatactual === "5") {
      contenidochat5 = output.innerHTML;
      crearchat();
    } else if (chatactual === "6") {
      contenidochat6 = output.innerHTML;
      crearchat();
    } else if (chatactual === "7") {
      contenidochat7 = output.innerHTML;
      crearchat();
    } else if (chatactual === "8") {
      contenidochat8 = output.innerHTML;
      crearchat();
    }


  }





}


function verificarchats() {
  if (chats === "1") {
    botones1.disabled = false;


    botones2.disabled = true;
    botones3.disabled = true;
    botones4.disabled = true;
    botones5.disabled = true;
    botones6.disabled = true;
    botones7.disabled = true;
    botones8.disabled = true;




  } else if (chats === "2") {
    botones1.disabled = false;
    botones2.disabled = false;


    botones3.disabled = true;
    botones4.disabled = true;
    botones5.disabled = true;
    botones6.disabled = true;
    botones7.disabled = true;
    botones8.disabled = true;




  } else if (chats === "3") {
    botones1.disabled = false;
    botones2.disabled = false;
    botones3.disabled = false;


    botones4.disabled = true;
    botones5.disabled = true;
    botones6.disabled = true;
    botones7.disabled = true;
    botones8.disabled = true;



  } else if (chats === "4") {
    botones1.disabled = false;
    botones2.disabled = false;
    botones3.disabled = false;
    botones4.disabled = false;


    botones5.disabled = true;
    botones6.disabled = true;
    botones7.disabled = true;
    botones8.disabled = true;



  } else if (chats === "5") {
    botones1.disabled = false;
    botones2.disabled = false;
    botones3.disabled = false;
    botones4.disabled = false;
    botones5.disabled = false;


    botones6.disabled = true;
    botones7.disabled = true;
    botones8.disabled = true;



  } else if (chats === "6") {
    botones1.disabled = false;
    botones2.disabled = false;
    botones3.disabled = false;
    botones4.disabled = false;
    botones5.disabled = false;
    botones6.disabled = false;


    botones7.disabled = true;
    botones8.disabled = true;



  } else if (chats === "7") {
    botones1.disabled = false;
    botones2.disabled = false;
    botones3.disabled = false;
    botones4.disabled = false;
    botones5.disabled = false;
    botones6.disabled = false;
    botones7.disabled = false;

    botones8.disabled = true;



  } else if (chats === "8") {
    botones1.disabled = false;
    botones2.disabled = false;
    botones3.disabled = false;
    botones4.disabled = false;
    botones5.disabled = false;
    botones6.disabled = false;
    botones7.disabled = false;
    botones8.disabled = false;



  }
}

function chat1() {
  if (chatactual === "1") {

    contenidochat1 = output.innerHTML;
    output.innerHTML = contenidochat1;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones1.classList.remove("botonn");
    botones1.classList.add("botonn2");
    chatactual = "1";
  } else if (chatactual === "2") {

    contenidochat2 = output.innerHTML;
    output.innerHTML = contenidochat1;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones1.classList.remove("botonn");
    botones1.classList.add("botonn2");
    chatactual = "1";
  } else if (chatactual === "3") {

    contenidochat3 = output.innerHTML;
    output.innerHTML = contenidochat1;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones1.classList.remove("botonn");
    botones1.classList.add("botonn2");
    chatactual = "1";
  } else if (chatactual === "4") {

    contenidochat4 = output.innerHTML;
    output.innerHTML = contenidochat1;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones1.classList.remove("botonn");
    botones1.classList.add("botonn2");
    chatactual = "1";
  } else if (chatactual === "5") {

    contenidochat5 = output.innerHTML;
    output.innerHTML = contenidochat1;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones1.classList.remove("botonn");
    botones1.classList.add("botonn2");
    chatactual = "1";
  } else if (chatactual === "6") {

    contenidochat6 = output.innerHTML;
    output.innerHTML = contenidochat1;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones1.classList.remove("botonn");
    botones1.classList.add("botonn2");
    chatactual = "1";
  } else if (chatactual === "7") {

    contenidochat7 = output.innerHTML;
    output.innerHTML = contenidochat1;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones1.classList.remove("botonn");
    botones1.classList.add("botonn2");
    chatactual = "1";
  } else if (chatactual === "8") {

    contenidochat8 = output.innerHTML;
    output.innerHTML = contenidochat1;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones1.classList.remove("botonn");
    botones1.classList.add("botonn2");
    chatactual = "1";
  }


}

function chat2() {
  if (chatactual === "1") {

    contenidochat1 = output.innerHTML;
    output.innerHTML = contenidochat2;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones2.classList.remove("botonn");
    botones2.classList.add("botonn2");
    chatactual = "2";
  } else if (chatactual === "2") {

    contenidochat2 = output.innerHTML;
    output.innerHTML = contenidochat2;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones2.classList.remove("botonn");
    botones2.classList.add("botonn2");
    chatactual = "2";
  } else if (chatactual === "3") {

    contenidochat3 = output.innerHTML;
    output.innerHTML = contenidochat2;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones2.classList.remove("botonn");
    botones2.classList.add("botonn2");
    chatactual = "2";
  } else if (chatactual === "4") {

    contenidochat4 = output.innerHTML;
    output.innerHTML = contenidochat2;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones2.classList.remove("botonn");
    botones2.classList.add("botonn2");
    chatactual = "2";
  } else if (chatactual === "5") {

    contenidochat5 = output.innerHTML;
    output.innerHTML = contenidochat2;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones2.classList.remove("botonn");
    botones2.classList.add("botonn2");
    chatactual = "2";
  } else if (chatactual === "6") {

    contenidochat6 = output.innerHTML;
    output.innerHTML = contenidochat2;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones2.classList.remove("botonn");
    botones2.classList.add("botonn2");
    chatactual = "2";
  } else if (chatactual === "7") {

    contenidochat7 = output.innerHTML;
    output.innerHTML = contenidochat2;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones2.classList.remove("botonn");
    botones2.classList.add("botonn2");
    chatactual = "2";
  } else if (chatactual === "8") {

    contenidochat8 = output.innerHTML;
    output.innerHTML = contenidochat2;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones2.classList.remove("botonn");
    botones2.classList.add("botonn2");
    chatactual = "2";
  }


}
function chat3() {
  if (chatactual === "1") {

    contenidochat1 = output.innerHTML;
    output.innerHTML = contenidochat3;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones3.classList.remove("botonn");
    botones3.classList.add("botonn2");
    chatactual = "3";
  } else if (chatactual === "2") {

    contenidochat2 = output.innerHTML;
    output.innerHTML = contenidochat3;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones3.classList.remove("botonn");
    botones3.classList.add("botonn2");
    chatactual = "3";
  } else if (chatactual === "3") {

    contenidochat3 = output.innerHTML;
    output.innerHTML = contenidochat3;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones3.classList.remove("botonn");
    botones3.classList.add("botonn2");
    chatactual = "3";
  } else if (chatactual === "4") {

    contenidochat4 = output.innerHTML;
    output.innerHTML = contenidochat3;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones3.classList.remove("botonn");
    botones3.classList.add("botonn2");
    chatactual = "3";
  } else if (chatactual === "5") {

    contenidochat5 = output.innerHTML;
    output.innerHTML = contenidochat3;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones3.classList.remove("botonn");
    botones3.classList.add("botonn2");
    chatactual = "3";
  } else if (chatactual === "6") {

    contenidochat6 = output.innerHTML;
    output.innerHTML = contenidochat3;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones3.classList.remove("botonn");
    botones3.classList.add("botonn2");
    chatactual = "3";
  } else if (chatactual === "7") {

    contenidochat7 = output.innerHTML;
    output.innerHTML = contenidochat3;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones3.classList.remove("botonn");
    botones3.classList.add("botonn2");
    chatactual = "3";
  } else if (chatactual === "8") {

    contenidochat8 = output.innerHTML;
    output.innerHTML = contenidochat3;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones3.classList.remove("botonn");
    botones3.classList.add("botonn2");
    chatactual = "3";
  }
}
function chat4() {
  if (chatactual === "1") {

    contenidochat1 = output.innerHTML;
    output.innerHTML = contenidochat4;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones4.classList.remove("botonn");
    botones4.classList.add("botonn2");
    chatactual = "4";
  } else if (chatactual === "2") {

    contenidochat2 = output.innerHTML;
    output.innerHTML = contenidochat4;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones4.classList.remove("botonn");
    botones4.classList.add("botonn2");
    chatactual = "4";
  } else if (chatactual === "3") {

    contenidochat3 = output.innerHTML;
    output.innerHTML = contenidochat4;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones4.classList.remove("botonn");
    botones4.classList.add("botonn2");
    chatactual = "4";
  } else if (chatactual === "4") {

    contenidochat4 = output.innerHTML;
    output.innerHTML = contenidochat4;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones4.classList.remove("botonn");
    botones4.classList.add("botonn2");
    chatactual = "4";
  } else if (chatactual === "5") {

    contenidochat5 = output.innerHTML;
    output.innerHTML = contenidochat4;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones4.classList.remove("botonn");
    botones4.classList.add("botonn2");
    chatactual = "4";
  } else if (chatactual === "6") {

    contenidochat6 = output.innerHTML;
    output.innerHTML = contenidochat4;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones4.classList.remove("botonn");
    botones4.classList.add("botonn2");
    chatactual = "4";
  } else if (chatactual === "7") {

    contenidochat7 = output.innerHTML;
    output.innerHTML = contenidochat4;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones4.classList.remove("botonn");
    botones4.classList.add("botonn2");
    chatactual = "4";
  } else if (chatactual === "8") {

    contenidochat8 = output.innerHTML;
    output.innerHTML = contenidochat4;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones4.classList.remove("botonn");
    botones4.classList.add("botonn2");
    chatactual = "4";
  }
}
function chat5() {
  if (chatactual === "1") {

    contenidochat1 = output.innerHTML;
    output.innerHTML = contenidochat5;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones5.classList.remove("botonn");
    botones5.classList.add("botonn2");
    chatactual = "5";
  } else if (chatactual === "2") {

    contenidochat2 = output.innerHTML;
    output.innerHTML = contenidochat5;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones5.classList.remove("botonn");
    botones5.classList.add("botonn2");
    chatactual = "5";
  } else if (chatactual === "3") {

    contenidochat3 = output.innerHTML;
    output.innerHTML = contenidochat5;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones5.classList.remove("botonn");
    botones5.classList.add("botonn2");
    chatactual = "5";
  } else if (chatactual === "4") {

    contenidochat4 = output.innerHTML;
    output.innerHTML = contenidochat5;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones5.classList.remove("botonn");
    botones5.classList.add("botonn2");
    chatactual = "5";
  } else if (chatactual === "5") {

    contenidochat5 = output.innerHTML;
    output.innerHTML = contenidochat5;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones5.classList.remove("botonn");
    botones5.classList.add("botonn2");
    chatactual = "5";
  } else if (chatactual === "6") {

    contenidochat6 = output.innerHTML;
    output.innerHTML = contenidochat5;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones5.classList.remove("botonn");
    botones5.classList.add("botonn2");
    chatactual = "5";
  } else if (chatactual === "7") {

    contenidochat7 = output.innerHTML;
    output.innerHTML = contenidochat5;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones5.classList.remove("botonn");
    botones5.classList.add("botonn2");
    chatactual = "5";
  } else if (chatactual === "8") {

    contenidochat8 = output.innerHTML;
    output.innerHTML = contenidochat5;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones5.classList.remove("botonn");
    botones5.classList.add("botonn2");
    chatactual = "5";
  }
}
function chat6() {
  if (chatactual === "1") {

    contenidochat1 = output.innerHTML;
    output.innerHTML = contenidochat6;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones6.classList.remove("botonn");
    botones6.classList.add("botonn2");
    chatactual = "6";
  } else if (chatactual === "2") {

    contenidochat2 = output.innerHTML;
    output.innerHTML = contenidochat6;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones6.classList.remove("botonn");
    botones6.classList.add("botonn2");
    chatactual = "6";
  } else if (chatactual === "3") {

    contenidochat3 = output.innerHTML;
    output.innerHTML = contenidochat6;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones6.classList.remove("botonn");
    botones6.classList.add("botonn2");
    chatactual = "6";
  } else if (chatactual === "4") {

    contenidochat4 = output.innerHTML;
    output.innerHTML = contenidochat6;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones6.classList.remove("botonn");
    botones6.classList.add("botonn2");
    chatactual = "6";
  } else if (chatactual === "5") {

    contenidochat5 = output.innerHTML;
    output.innerHTML = contenidochat6;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones6.classList.remove("botonn");
    botones6.classList.add("botonn2");
    chatactual = "6";
  } else if (chatactual === "6") {

    contenidochat6 = output.innerHTML;
    output.innerHTML = contenidochat6;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones6.classList.remove("botonn");
    botones6.classList.add("botonn2");
    chatactual = "6";
  } else if (chatactual === "7") {

    contenidochat7 = output.innerHTML;
    output.innerHTML = contenidochat6;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones6.classList.remove("botonn");
    botones6.classList.add("botonn2");
    chatactual = "6";
  } else if (chatactual === "8") {

    contenidochat8 = output.innerHTML;
    output.innerHTML = contenidochat6;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones6.classList.remove("botonn");
    botones6.classList.add("botonn2");
    chatactual = "6";
  }
}
function chat7() {
  if (chatactual === "1") {

    contenidochat1 = output.innerHTML;
    output.innerHTML = contenidochat7;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones7.classList.remove("botonn");
    botones7.classList.add("botonn2");
    chatactual = "7";
  } else if (chatactual === "2") {

    contenidochat2 = output.innerHTML;
    output.innerHTML = contenidochat7;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones7.classList.remove("botonn");
    botones7.classList.add("botonn2");
    chatactual = "7";
  } else if (chatactual === "3") {

    contenidochat3 = output.innerHTML;
    output.innerHTML = contenidochat7;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones7.classList.remove("botonn");
    botones7.classList.add("botonn2");
    chatactual = "7";
  } else if (chatactual === "4") {

    contenidochat4 = output.innerHTML;
    output.innerHTML = contenidochat7;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones7.classList.remove("botonn");
    botones7.classList.add("botonn2");
    chatactual = "7";
  } else if (chatactual === "5") {

    contenidochat5 = output.innerHTML;
    output.innerHTML = contenidochat7;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones7.classList.remove("botonn");
    botones7.classList.add("botonn2");
    chatactual = "7";
  } else if (chatactual === "6") {

    contenidochat6 = output.innerHTML;
    output.innerHTML = contenidochat7;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones7.classList.remove("botonn");
    botones7.classList.add("botonn2");
    chatactual = "7";
  } else if (chatactual === "7") {

    contenidochat7 = output.innerHTML;
    output.innerHTML = contenidochat7;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones7.classList.remove("botonn");
    botones7.classList.add("botonn2");
    chatactual = "7";
  } else if (chatactual === "8") {

    contenidochat8 = output.innerHTML;
    output.innerHTML = contenidochat7;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones7.classList.remove("botonn");
    botones7.classList.add("botonn2");
    chatactual = "7";
  }
}
function chat8() {
  if (chatactual === "1") {

    contenidochat1 = output.innerHTML;
    output.innerHTML = contenidochat8;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones8.classList.remove("botonn");
    botones8.classList.add("botonn2");
    chatactual = "8";
  } else if (chatactual === "2") {

    contenidochat2 = output.innerHTML;
    output.innerHTML = contenidochat8;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones8.classList.remove("botonn");
    botones8.classList.add("botonn2");
    chatactual = "8";
  } else if (chatactual === "3") {

    contenidochat3 = output.innerHTML;
    output.innerHTML = contenidochat8;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones8.classList.remove("botonn");
    botones8.classList.add("botonn2");
    chatactual = "8";
  } else if (chatactual === "4") {

    contenidochat4 = output.innerHTML;
    output.innerHTML = contenidochat8;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones8.classList.remove("botonn");
    botones8.classList.add("botonn2");
    chatactual = "8";
  } else if (chatactual === "5") {

    contenidochat5 = output.innerHTML;
    output.innerHTML = contenidochat8;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones8.classList.remove("botonn");
    botones8.classList.add("botonn2");
    chatactual = "8";
  } else if (chatactual === "6") {

    contenidochat6 = output.innerHTML;
    output.innerHTML = contenidochat8;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones8.classList.remove("botonn");
    botones8.classList.add("botonn2");
    chatactual = "8";
  } else if (chatactual === "7") {

    contenidochat7 = output.innerHTML;
    output.innerHTML = contenidochat8;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones8.classList.remove("botonn");
    botones8.classList.add("botonn2");
    chatactual = "8";
  } else if (chatactual === "8") {

    contenidochat8 = output.innerHTML;
    output.innerHTML = contenidochat8;

    const important = "botones" + chatactual;
    const important2 = document.getElementById(important);

    important2.classList.remove("botonn2");
    important2.classList.add("botonn");
    botones8.classList.remove("botonn");
    botones8.classList.add("botonn2");
    chatactual = "8";
  }
}


botones1.addEventListener("mouseenter", botonesentrar);
botones1.addEventListener("mouseleave", botonessalir);
botones2.addEventListener("mouseenter", botonesentrar);
botones2.addEventListener("mouseleave", botonessalir);
botones3.addEventListener("mouseenter", botonesentrar);
botones3.addEventListener("mouseleave", botonessalir);
botones4.addEventListener("mouseenter", botonesentrar);
botones4.addEventListener("mouseleave", botonessalir);
botones5.addEventListener("mouseenter", botonesentrar);
botones5.addEventListener("mouseleave", botonessalir);
botones6.addEventListener("mouseenter", botonesentrar);
botones6.addEventListener("mouseleave", botonessalir);
botones7.addEventListener("mouseenter", botonesentrar);
botones7.addEventListener("mouseleave", botonessalir);
botones8.addEventListener("mouseenter", botonesentrar);
botones8.addEventListener("mouseleave", botonessalir);



nuevochat1.addEventListener("mouseenter", botonesentrar);
nuevochat1.addEventListener("mouseleave", botonessalir);
nuevochat2.addEventListener("mouseenter", botonesentrar);
nuevochat2.addEventListener("mouseleave", botonessalir);
nuevochat3.addEventListener("mouseenter", botonesentrar);
nuevochat3.addEventListener("mouseleave", botonessalir);

function botonesentrar() {
  this.classList.add("colorsi");
}
function botonessalir() {
  this.classList.remove("colorsi");
}