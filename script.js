const input = document.getElementById("file-upload");
const galeria = document.getElementById("galeria");

input.addEventListener("change", function () {
  const file = input.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const div = document.createElement("div");
      div.classList.add("foto");
      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = "Foto subida";
      const p = document.createElement("p");
      p.textContent = "Una nueva foto de nuestro amor.";
      div.appendChild(img);
      div.appendChild(p);
      galeria.prepend(div);
    };
    reader.readAsDataURL(file);
  }
});

// Cambiar entre modo día y noche
const botonTema = document.getElementById("cambiar-tema");
botonTema.addEventListener("click", function() {
  document.body.classList.toggle("noche");
  if (document.body.classList.contains("noche")) {
    botonTema.textContent = "🌞 Modo Día";
  } else {
    botonTema.textContent = "🌙 Modo Noche";
  }
});

function validarFecha() {
    const fechaInput = document.getElementById("fecha").value;
    const fechaCorrecta = "27/10/2024";
  
    if (fechaInput === fechaCorrecta) {
      document.getElementById("acceso").style.display = "none";
      document.getElementById("contenido").style.display = "block";
    } else {
      document.getElementById("error-message").style.display = "block";
    }
  }