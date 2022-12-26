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
    const createdDiv$$ = document.createElement("div");
      createdDiv$$.setAttribute("class","character");
    const createdP$$ = document.createElement("p");

    // Recorre los elementos de tu listado
    let finded = false;

    myFinder.forEach((element) => {

      const elementUp = element.toUpperCase();
      console.log(typeof elementUp); console.log("ELEMENT UP:", elementUp);
      console.log(typeof inputFinder); console.log("INPUT FINDER:", inputFinder);

      // Si el elemento coincide el del input
      if (inputFinder === elementUp && finded === false) {

        // Añade al P el mensaje -> 'Lo hemos encontrado' + inputFinder
        createdP$$.setAttribute("class","character");
        createdP$$.textContent = "Lo hemos encontrado " + inputFinder;
        finded = true;
        console.log(finded)

      } else if (finded === false) {

        // Añade al P el mensaje -> 'No hemos encontrado' + inputFinder
        createdP$$.textContent = "No hemos encontrado " + inputFinder;
        createdP$$.setAttribute("class","character--error");
      }
    });

    // Añade el p en el div
    createdDiv$$.appendChild(createdP$$);

    // Usa querySelector para recuperar el body
    const selBody$$ = document.querySelector("body");

    // Añade el div sobre el body
    selBody$$.appendChild(createdDiv$$);
  };