import React from 'react';
import TarjetaFruta from './componentes/TarjetaFruta/TarjetaFruta';

const App = () =>{
    return(
      <div>
        <TarjetaFruta name = "sandia" price = {2.00}/>
        <TarjetaFruta name = "naranja" price = {1.50}/>
        <TarjetaFruta name = "kiwi" price = {3.00}/>
      </div>
    )
}

export default App;