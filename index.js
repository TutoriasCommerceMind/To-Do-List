// Seleccionando el <input> del HTML

const input = document.querySelector("input");

// Seleccior el boton con la clase "btn-add" del HTML

const addBtn = document.querySelector(".btn-add");

// Seleccionar el <ul> del HTML

const ul = document.querySelector("ul");

// Seleccionar el "empty" que se encuentra en un <div>

const empty = document.querySelector(".empty");

// Agregar un evento de escucha para el clic.

addBtn.addEventListener("click", (e) => {
  // Instancia el comportamiento predeterminado del evento (en este caso seria enviar el formulario)
  e.preventDefault();

  // Guardar la informacion del texto ingresado por el input

  const text = input.value;

  // Verificar que el texto no sea vacio.

  if (text !== "") {
    // Crear un nuevo elmento <li>

    const li = document.createElement("li");

    // Crear un nuevo elemento <p>

    const p = document.createElement("p");

    // Al parrafo ingresarle el texto que brindo el usuario.

    p.textContent = text;

    // Agregarle el elemento <p> como hijo del elemento <li>

    li.appendChild(p);

    // Agregar un elemento de estado como hijo del elemento <li>

    li.appendChild(addStatusElement());

    // Agregar el boton de eliminacion como hijo del elemento <li>

    li.appendChild(addDeleteBtn());

    // Agergarle el elemento <li> como hijo del elemento <ul>

    ul.appendChild(li);
  }

  // Reestablecer el valor del input

  input.value = "";

  // Ocultar el elemento empty con "none"

  empty.style.display = "none";
});

// Definimos la funcion para agregar el boton de eliminar.

function addDeleteBtn() {
  //Creamos un nuevo <button>

  const deleteBtn = document.createElement("button");

  // Darle el texto de una "X"

  deleteBtn.textContent = "X";

  // Darle la clase de "btn-delete"

  deleteBtn.className = "btn-delete";

  // Creacion del evento para escuchar el click de eliminacion de tarea.

  deleteBtn.addEventListener("click", (e) => {
    //Obtener el <li> PADRE del boton de eliminacion

    const item = e.target.parentElement;

    // Elminar el elemento <li> del elemento <ul>

    ul.removeChild(item);

    // Obtenemos todos los elementos <li> presentes en el <ul>

    const items = document.querySelectorAll("li");

    // Verificamos que no existan elementos <li> despues de eliminar uno

    if (items.length === 0) {
      // Muestra el elemento con la clase "empty"

      empty.style.display = "block";
    }
  });

  // Retornar el boton de eliminar
  return deleteBtn;
}

// Funcion para agregar un elemetno de estado (Por defecto va a ser "P")

function addStatusElement() {
  // Crear un nuevo elemento <span>

  const statusSpan = document.createElement("span");

  // Establece la clase del elemento

  statusSpan.className = "status";

  // Establece el texto del elemento por defecto. En este caso "En Progreso"

  statusSpan.textContent = "En Progreso";

  // Agregar un evento para cambiar el estado

  statusSpan.addEventListener("click", () => {
    if (statusSpan.textContent === "En progreso") {
      statusSpan.textContent = "Completado";
    } else {
      statusSpan.textContent = "En progreso";
    }
  });

  return statusSpan;
}
