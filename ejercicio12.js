const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(mutants, power) {
    // insert code
    let lista = [];
    let encontrado = false;
    for(let elemetn of mutants){
        if(elemetn.power == power){
            lista.push(elemetn);
            encontrado = true;
        }
    }

    if(!encontrado){
        console.log(`No se ha encontrado ningun mutante con el poder ${power}.`);
    }else{
        console.log(`Si ha encontrado mutante con el poder ${power}.`);
        console.log(lista);
    }
  }
  
  findMutantByPower(mutants,'telekinesis');
  findMutantByPower(mutants,'teletransporte');