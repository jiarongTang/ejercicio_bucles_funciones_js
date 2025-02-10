const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  
  function findOldestXMen(xMen) {
    // insert code
    let antiguo = 0;
    let heroe = {};

    for(let element of xMen){
        if(antiguo == 0){
            antiguo = element.year;
            heroe = element;
        }else{
            if(antiguo >= element.year){
                heroe = element;
                antiguo = element.year;
            }
        }
    }

    console.log(heroe);
  }

findOldestXMen(xMen);
  