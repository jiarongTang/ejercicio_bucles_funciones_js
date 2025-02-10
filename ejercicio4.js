const cartoons = [
    { name: 'Mickey Mouse', debut: 1928 },
    { name: 'Bugs Bunny', debut: 1938 },
    { name: 'SpongeBob SquarePants', debut: 1999 },
    { name: 'Tom and Jerry', debut: 1940 },
    { name: 'Scooby-Doo', debut: 1969 },
    { name: 'The Flintstones', debut: 1960 },
    { name: 'Batman: The Animated Series', debut: 1992 },
    { name: 'The Simpsons', debut: 1989 },
    { name: 'Pokémon', debut: 1997 },
    { name: "Dexter's Laboratory", debut: 1996 }
  ];
  
  // Añade tu código de bucle aquí

let antiguo = 0;
let nombre = "";

for(let elemnt of cartoons){
    if(antiguo == 0 ){
        antiguo = elemnt.debut;
        nombre = elemnt.name;
    }else{
        if(antiguo >= elemnt.debut){
            nombre = elemnt.name;
            antiguo = elemnt.debut;
        }
    }
}

console.log(`La pelicula más antigua es ${nombre}`);