import React, {Component} from 'react';

/* estilos en linea */
/* const styles = {
  height: '200px',
  background: 'gold',
  padding: '1em',
  boxSizing: 'border-box'
}

class App extends Component {
  state = {
    x: 0,
    y: 0
  }
  manejador = (event) =>{
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
  render () {
    return (
      <div 
        style={styles}
        onMouseMove={this.manejador}
      >
        <div>
          X: { this.state.x }
          <br/>
          Y: { this.state.y }
        </div>
      </div>
    )
  }
} */


/* Manejador de eventos de input */
/* class App extends Component {
  state = {
    text: '',
    evento: ''
  }
  manejador = (event) =>{
    this.setState({
      text: event.target.value,
      // muestra el tipo de evento que se realizo
      evento: event.type
    })
  }
  render(){
    return (
      <div>
        <input 
          type="text"
          onChange= {this.manejador}
          onCopy={this.manejador}
          onPaste={this.manejador}
        />
        <h1>
          {this.state.text}
        </h1>
        <h2>
          {this.state.evento}
        </h2>
      </div>
    )
  }
} */

/* Eventos con el DOM */
// el metodo preventdefault  lo que realiza es prevenir/evitar el comportamiento
// por defecto
class App extends Component{
  manejador = (e) =>{
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <a
          href="https://google.com"
          // esto evita que al dar click me lleve al link como lo hace por defecto
          onClick={this.manejador}
        >
          Google
        </a>
      </div>
    )
  }
}


export default App;