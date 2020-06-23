import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/* const Saludo = (props) =>{
  //puedo hacer un condicional ternario de las siguiente manera
  return (
    <div>
      <div>
        { props.name && <strong>{props.name}</strong>}
      </div>
      {props.saluda ? <h1>Hola, tu eres genial</h1> : <p> Wops, no hay saludo para ti! </p>}
    </div>
  )
}
const App = () =>{
  return(
    <div>
      <Saludo saluda name='Alberxo'/>
    </div>
  )
} */

/* Inyectando HTML */
/* class App extends Component{
  state = {

    /* por seguridad react no mostrara el elemento como html, por lo cual cuando queremos realizar esto debemos utilizar una propiedad con un nombre particular que se colocara en el div del render 

    marcado: `
      <h1>Inyectando HTML con React</h1>
      <br/>
      <br/>
      <a href="#">Algun Link</a>
    `
  }
  render() {
    return (
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: this.state.marcado
          }}
        >
        </div>
      </div>
    )
  }
} */

/* Introduccion a la prop children */
// utilizo la destructuracion para que los parametros que paso por title sean mas visibles eliminando el uso de props
/* const Title = ({ uiColor, children }) =>{
  const styles = {
    padding: '0.3em',
    color: '#FFF',
    background: uiColor,
    borderRadius: '0.3em',
    textAlign: 'center',
    fontSize: '50px'
  }

  return(
    //la prop children hace referencia a los elementos hijos dentro de mi componente cuando separo las tag en dos, es decir, <tag></tag>
      <h1 style={styles}>{children}</h1>
  )
}
class App extends Component{
  state = {
    uiColor: 'tomato',
  }
  render() {
    const { uiColor } = this.state
    return(
      <div>
        <Title uiColor={uiColor} text='Ahi vamos'>
          Alberto <em>Giffard</em>
        </Title>
      </div>
    )
  }
} */

/* Fragments */

/* lo que nos permite react fragment es evitar que cuando traemos un array tengamos que proporcionar un key unico para cada nodo, lo cual se vuelve tedioso y poco legible ahi entra fragment, la forma de hacerlo es que en la etiqueta donde vayamos a colocar la key escribamos Fragment importandolo al principio asi como Component, y si se tiene la ultima version de babel se puede pasar dejando el tag vacio, es decir <> pero al utilizar esta forma no se le pueden pasar parametros al tag para que react lo logre entender bien */

/* const Computacion = () =>{
  return(
    <>
      <li>Monitor</li>
      <li>Mouse</li>
      <li>Teclado</li>
    </>
  )
}
const Ropa = () =>{
  return(
    <>
      <li>Playera</li>
      <li>Jeans</li>
      <li>Short</li>
    </>
  )
}
class App extends Component {
  render() {
    return(
      <div>
        <Computacion/>
        <Ropa/>
      </div>
    )
  }
} */

/* entendiendo los portals */
//aca cree un div modal en index.html
/* class PortalModal extends Component{
  render () {
    if (!this.props.visible) {
      return(
        null
      )
    }
    const styles = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      background: 'linear-gradient(to top right, #667eea, #764ba2',
      opacity: '0.95',
      color: '#FFF'
    }
    //primero va lo que queremos montar y luego en donde lo vamos a montar
    return ReactDOM.createPortal((
      <div style={styles}>
        { this.props.children }
      </div>
    ), document.getElementById('modal-root'))
  }
}
class App extends Component{
  state = {
    visible: false,
    num: 0
  }
  componentDidMount () {
    setInterval(() =>{
      this.setState(state =>({
        num: state.num + 1
      }))
    }, 1000)
  }

  mostrar = () =>{
    this.setState({ visible: true })
  }

  cerrar = () =>{
    this.setState({ visible: false })
  }
  render() {
    return(
      <div>
        <button onClick={this.mostrar}>
          Mostrar
        </button>
        <PortalModal visible={this.state.visible} >
          <button onClick={this.cerrar}>
            Cerrar
          </button>
          <h1>
            Hola desde un portal modal { this.state.num}
          </h1>
        </PortalModal>
      </div>
    )
  }
} */

/* Controlar datos de entrada con proptypes */
/* class Profile extends Component{
  //se interpone la palabra static ya que proptype es estatico
  static propTypes = {
    //le pasamos el tipo de datos que esperamos, por ejemplo en la siguiente linea le decimos que esperamos un string

    //le podemos pasar isrequired si es necesario pasar este prop para que no arroje error
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    mail: PropTypes.string,
    age: PropTypes.number,
  }

  // pasar props por defecto se utiliza la siguiente linea

  //si no paso ningun prop tomara por defecto el de esta lista, por ejemplo, si no pasara como prop el name(que esta escrito dentro del class App mas abajo) tomara el name de aca
  static defaultProps = {
    name: 'Robert Test'
  }
  
  saluda = () =>{
    this.props.onHello()
  }
  render() {
    //traigo las props con destructuración
    const { name, bio, mail } = this.props;
    return(
      <div>
        <h1>{name}</h1>
        <p>
          {bio}
        </p>
        <a href={`mailto:${mail}`}>
          {mail}  
        </a> 
        <button onClick={this.saluda}>
          Saluda
        </button>
      </div>
    )
  }
}
class App extends Component{
  render() {
    return(
      <div>
        <Profile
          name='Junior Prueba'
          bio='Soy un objeto de prueba'
          mail='pruebame@gmail.com'
        />
      </div>
    )
  }
} */

export default App;