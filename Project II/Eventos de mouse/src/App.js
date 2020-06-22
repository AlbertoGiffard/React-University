import React, {Component} from 'react';
import './global.css';

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
/* class App extends Component{
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
} */

/* Conservar eventos */
//event.target.value accede al valor del input
/* class PersistenciaEventos extends Component {
  state = {
    color: 'blue'
  }
  handlerChange = (event) =>{
    const color = event.target.value;

    this.setState((state) =>({
      color: color
    }))
  }
  render () {
    return(
      <div>
        <input
          type="text"
          onChange={this.handlerChange}
        />
        <h1
          style={{
            color: this.state.color
          }}
        >
          {this.state.color}
        </h1>
      </div>
    )
  }
}
const App = () =>{
  return (
    <div>
      <PersistenciaEventos/>
    </div>
  )
} */

/* Eventos Personalizados */
class Hijo extends Component{
  manejadorClick = () =>{
    this.props.onSaluda('Alberto en React')
  }
  render() {
    return (
      <div className='box blue'>
        <h2>
          Hijo
        </h2>
        <button
        //el manejador lo envio como props, cuando sea personalizado
          onClick={this.manejadorClick}
        >
          Saluda
        </button>
      </div>
    )
  }
}

class App extends Component{
  state = {
    name: ''
  }
  manejador = (name) =>{
    this.setState({
      name: name
    })
  }
  render() {
    return (
      <div className='box red'>
        <Hijo
          // evento personalizado
          onSaluda={this.manejador}
        />
        <h1>
          Nombre: {this.state.name}
        </h1>
      </div>
    )
  }
}

export default App;