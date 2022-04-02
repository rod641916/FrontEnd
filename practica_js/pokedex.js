const fetchPokemon = () => {
  const pokeNameInput = document.getElementById("pokeName");
  let pokeName = pokeNameInput.value;
  pokeName = pokeName.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  fetch(url)
    .then((res) => {
      if (res.status != "200") {
        console.log(res);
        pokeImage("./poke-sad.gif");
        alert("No se encontro el pokemon")
        nomPokemon("");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      if (data) {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
        console.log(pokeImg);



/*************Nombre pokemon***************** */
        let nombrePokemonImprimir = data.forms[0].name;
        console.log(nombrePokemonImprimir);
        apoyo=JSON.stringify(nombrePokemonImprimir)
        document.getElementById("nombre").innerHTML = nombrePokemonImprimir;


/*******************Tipo de pokemon***************/
        
        let tipoPokemon=data.types;

        if(tipoPokemon.length==2){
          let tipo1=tipoPokemon[0];
          let tipo2=tipoPokemon[1];

          let primerTipo=tipo1.type.name;
          let segundoTipo=tipo2.type.name;

          let dosTipos=[primerTipo,segundoTipo];

          console.log(primerTipo,segundoTipo);
          document.getElementById("tipo").innerHTML=dosTipos
        }else{
          let tipo1=tipoPokemon[0];
          let primerTipo=tipo1.type.name;
          console.log(primerTipo,"");
          document.getElementById("tipo").innerHTML=primerTipo;
        }
      


        /*********Estadisticas***************/
        let hpPokemon =data.stats[0].base_stat;
        console.log("Hp " + hpPokemon);
        apoyo=JSON.stringify(hpPokemon);
        document.getElementById("hp").innerHTML=hpPokemon;


        let attackPokemon = data.stats[1].base_stat;
        console.log("Attack " + attackPokemon);
        apoyo=JSON.stringify(attackPokemon);
        document.getElementById("attack").innerHTML=attackPokemon;

        let defensePokemon = data.stats[2].base_stat;
        console.log("Defense " + defensePokemon);
        apoyo=JSON.stringify(defensePokemon);
        document.getElementById("defense").innerHTML=defensePokemon;

        let specialAttackPokemon = data.stats[3].base_stat;
        console.log("Special Attack " + specialAttackPokemon);
        apoyo=JSON.stringify(hpPokemon);
        document.getElementById("specialAttack").innerHTML=specialAttackPokemon;

        let specialDefensePokemon = data.stats[4].base_stat;
        console.log("Special Defense " + specialDefensePokemon);
        apoyo=JSON.stringify(specialDefensePokemon);
        document.getElementById("specialDefense").innerHTML=specialDefensePokemon;

        let speedPokemon = data.stats[5].base_stat;
        console.log("Speed " + speedPokemon);
        apoyo=JSON.stringify(speedPokemon);
        document.getElementById("speed").innerHTML=speedPokemon;

        /**********Fin Estadisticas*****************/

        /**********Movimientos***************** */
        let movimientosPokemon = data.moves.map(mov=>mov.move.name);
        console.log(movimientosPokemon)

        let apoyo1=movimientosPokemon.stringify;
        for(var i=0; i < movimientosPokemon.parse; i++){
          apoyo1+=`<li>+apoyo1[i].types+</li>`;
  
        }
        document.getElementById("movimientos").innerHTML=movimientosPokemon;
      }
    });
};

const pokeImage = (url) => {
  const pokePhoto = document.getElementById("pokeImg");
  pokePhoto.src = url;
};