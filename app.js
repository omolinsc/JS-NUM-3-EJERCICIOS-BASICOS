// Ejercicio 1 -> over

var over = () => {
    // Añadir una clase sobre logo estilo: background-color: darkred;
    
  };
  // Ejercicio 1 -> out
  
  var out = () => {
    // Eliminar la clase añadida sobre logo estilo: background-color: darkred;
  };
  
  // Ejercicio 3 -> onkeyup
  
  var toUpperInput = () => {
    // Transforma el input a mayusculas
  };
  
  
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