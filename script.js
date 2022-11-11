function preencherTela(data) {
   
    document.getElementById("Pokemon").src = data.sprites.front_default;
  
    document.getElementById("nomePokemon").innerText = data.name;
  }
  fetch("https://pokeapi.co/api/v2/pokemon/" + idPoke)
  
  function idPokemon() {
    let idPoke = document.getElementById("idPok").value;
    console.log(idPoke);
  
    fetch("https://pokeapi.co/api/v2/pokemon/" + idPoke)
    
    
    .then((response) => response.json())
      
    .then((data) => {
      preencherTela(data);
    });
  }