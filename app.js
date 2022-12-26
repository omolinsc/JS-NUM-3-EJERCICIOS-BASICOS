// Ejercicio 1 -> over

var over = () => {
    // Añadir una clase sobre logo estilo: background-color: darkred;
    const findLogo$$ = document.querySelector(".logo");
    findLogo$$.setAttribute("style","background-color: darkred");
  };
  // Ejercicio 1 -> out
  console.log("Ejercicio # 1 - Cambiando el color del fondo a darkred", over);
  
  var out = () => {
    // Eliminar la clase añadida sobre logo estilo: background-color: darkred;
    const findLogo$$0 = document.querySelector(".logo");
    findLogo$$0.classList.remove("logo");
  };

  console.log("Ejercicio # 2 - Eliminando la clase del logo", out);
  
  // Ejercicio 3 -> onkeyup
  
  var toUpperInput = () => {
    // Transforma el input a mayusculas
    const text = findInput$$.value;
    const textUp = text.toUpperCase();
    findInput$$.value = textUp;
    console.log(textUp);
  };

  const findInput$$ = document.querySelector("#input-finder");
  findInput$$.addEventListener("onkeyup",toUpperInput);
    
  // Ejercicio 4 -> OnClick
  
  // Listado de personajes
  var myFinder = ["Wolverine", "Storm", "IronMan", "Hulk"];
  
  var searchMarvel = () => {
    // Recupera el valor del Input
    var inputFinder = document.getElementById("input-finder").value;
    // Crea un elemento div y un elemento p
  
    // Recorre los elementos de tu listado
    myFinder.forEach((element) => {
      
      // Si el elemento coincide el del input
      if (inputFinder === element) {
        // Añade al P el mensaje -> 'Lo hemos encontrado' + inputFinder
      } else {
        // Añade al P el mensaje -> 'No hemos encontrado' + inputFinder
      }
    });
    // Añade el p en el div
    // Usa querySelector para recuperar el body
    // Añade el div sobre el body
  };