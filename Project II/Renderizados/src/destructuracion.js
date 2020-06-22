/* const user1 = {
    name: 'Junior Prueba',
    username: 'chunior',
    country: 'Jamaica',
    social: {
        facebook: 'https://fb...',
        twitter: 'https://tw...'
    }
}

const saluda = (user) =>{
   /*  const name = user.name;
    const country = user.country; */
    // con ECS6 las dos lineas de arriba significan lo mismo que escribir
    /* const { name, country } = user; */
    // la cual indica guardar las constantes name y country de user
    /* const { name, social, country } = user;
    //aca trae twitter de social
    const { twitter } = social; */
    //ahora cabe resaltar que si lo escribo de la siguiente forma me traera el valor de twitter mas no de social
    /* const { name, country, social: { twitter }} = user; */
    // tambien puedo asignar valores como por ejemplo, fijarse en sintaxis que se coloca un =
    /* const { name = 'Roberto Test', country, social: { twitter }} = user; 
    //tambien puedo renombrar las variables que utilizo por ejemplo este aliascool
    const { username: aliasCool, country, social: { twitter: tw }} = user;

    const orden = ['pizza', 'te verde', 'pie', 123, false, 'otro']
    //en la siguiente linea cada palabra que escriba indica la posicion en la cual se le esta asignando a cada valor dentro del array
    // el elemento spread al final lo que hace es traerme todos los demas valores restantes
    const [ comida, bebida, postre, ...restantes ] = orden
    console.log(
        `Hola soy ${aliasCool} y me gusta la ${comida}`
    );
    console.log(
        restantes
    );
    
}

saluda(user1); */