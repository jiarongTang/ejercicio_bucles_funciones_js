const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  function getCapital(country) {
    // insert code
    let encontrado = false;
    for(const key in capitals){
        if(key == country){
            encontrado = true;
            console.log(`La capital de ${country} es ${capitals[key]}`);
        }
    }

    if(!encontrado){
        console.log("No se encuentra este pais en la lista.");
    }
  }

  getCapital('America');
  getCapital('Germany');
  
  