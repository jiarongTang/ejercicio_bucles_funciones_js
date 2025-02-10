const actors = [
    { name: 'Leonardo DiCaprio', born: 1974 },
    { name: 'Tom Hanks', born: 1956 },
    { name: 'Meryl Streep', born: 1949 },
    { name: 'Brad Pitt', born: 1963 },
    { name: 'Johnny Depp', born: 1963 },
    { name: 'Scarlett Johansson', born: 1984 },
    { name: 'Jennifer Lawrence', born: 1990 },
    { name: 'Denzel Washington', born: 1954 },
    { name: 'Morgan Freeman', born: 1937 },
    { name: 'Cate Blanchett', born: 1969 }
  ];
  
  function calculateActorsAges(actors) {
    // insert code
    let lista = [];
    let anio = new Date().getFullYear();
    let edad = 0;

    for(let elemetn of actors){
        edad = anio - elemetn.born;
        elemetn.year = edad;
        lista.push(elemetn);
    }

    console.log(lista);
  }
  
  calculateActorsAges(actors);