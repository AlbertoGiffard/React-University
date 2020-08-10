import React, {Component} from 'react';

/* const Gato = (props) =>{
  return( 
    <div>
      <h1>Gato</h1>
      <pre>
        {JSON.stringify(props, null, 4)}
      </pre>
    </div>
  )
}

class App extends Component {
  state = {
    fuerza: 100,
    vidasRestantes: 7
  }

  render () {
    const otrosDatos = {
      raza: 'tropical',
      peleasNocturnas: 300
    }
    return (
      <div>
        <Gato 
          name='Garfield' 
          age='2 años'
          { ...otrosDatos }  
          { ...this.state }
        />
      </div>
    )
  }
} */
class Boton extends Component{
  state = {
    dispararError: false
  }

  fuerzoError = () =>{
    this.setState({ dispararError: true })
  }

  render() {
    if (this.state.dispararError) {
      // en la siguiente linea fuerzo el error, pero cuando esta en produccion debo dejar pagina en blanco para que el usuario no le muestre error
      throw new Error('Lo siento he fallado')
    }
    return(
      <button onClick={this.fuerzoError}>
        Boton con Bugg
      </button>
    )
  }
}

class LimiteErrores extends Component{
  state = {
    tieneError: false
  }

  //esto forma parte del ciclo de vida de una funcion donde atrapo al error
  componentDidCatch(error, errorInfo) {
    //aca podria mostrar la vista que se va ha mostrar si existe un error
    // aca va ha entrar si tieneError es solamente true
    this.setState({ 
      tieneError: true,
      error 
    })
  }
  // esta clase la uso para atrapar todo lo que este dentro de el como un prop, la uso dentro de app
  render() {
    if (this.state.tieneError) {
      return(
        <div>
          Wops! Algo ha salido mal
          <div>
            {this.state.error && this.state.error.toString()}
          </div>
        </div>
      )
    }
    return(

      this.props.children
    )
  }
}

class App extends Component {
  render(){
    return(
      <div>
        <LimiteErrores>
          <Boton/>
        </LimiteErrores>
      </div>
    )
  }
}

export default App;