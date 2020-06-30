import React, {Component, forwardRef} from 'react';
/* import './App.css'
import Chart from 'chart.js'; */
/* Iteraciones */
/* const frutas = [
  'fresa',
  'manzana',
  'sandia',
  'kiwi',
  'durazno',
  'mango',
  'piña'
]

class App extends Component {
  render () {
    return (
      <div>
        <ul>
          {frutas.map((fruta) =>{
            return(
            <li>{fruta}</li>
            )
          })}
        </ul>
      </div>
    )
  }
} */

/* Iteracion con diferentes elementos */
/* class App extends Component{
  state = {
    products: [
      {
        id: 1,
        name: 'camisa unicornio',
        colors: ['#467367', '#05fd88', '#a706ee'],
        price: 20
      },
      {
        id: 2,
        name: 'jeans',
        colors: ['#d35eff','#9956e8', '#876bff', '#5662e8'],
        price: 32
      },
      {
        id: 3,
        name: 'taza',
        colors: ['#d35eff','#9956e8', '#876bff', '#5662e8'],
        price: 20
      },
      {
        id: 4,
        name: 'camisa icecream',
        colors: ['#2544b3','#ff8a69', '#5076ff', '#7fcc2b', '#73b32e'],
        price: 20
      },
      {
        id: 5,
        name: 'camisa dragon',
        colors: ['#b32542','#ff6987', '#ff4f73', '#14b32e', '#5eff78'],
        price: 20
      }
    ]
  }
  render() {
    return(
      <div>
        <h3>
          Iterando lista de objetos
        </h3>
        <div>
          {this.state.products.map((product) =>{
            return(
              <div>
                $ {product.price} - {product.name}

                {/* aca voy hacer un map anidado para recorrer colors, que es un array de string}
                <div>
                  {product.colors.map((color) =>{
                    return(
                      <span
                        style = {{
                          width: '13px',
                          height: '13px',
                          borderRadius: '0.1em',
                          border: '1px solid gray',
                          display: 'inline-block',
                          margin: '0.1em',
                          background: color
                        }}
                      >
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
} */

/* Iterando propiedades de objetos */
/* class App extends Component{
  state = {
    user: {
      name: 'Junior Prueba',
      country: 'Jamaica',
      twitter: '@Chunior',
      youtube: 'Testing'
    }
  }
  render() {
    const { user } = this.state
    const keys = Object.keys(user) //me trae los nombre de los atributos => [ 'name', 'country', 'twitter', 'youtube' ]
    return(
      <div>
        <h3>Iterando propiedades de objetos</h3>
        <ul>
          {keys.map((key) =>(
            <li>
              <strong>{ key }:</strong> { user[key] }
            </li>
          ))}
        </ul>
      </div>
    )
  }
} */

/* prop key al iterar listas con React */
/* const users = [
  { id: 1, name: 'Gerado Gallegos', country: 'Mexico'},
  { id: 2, name: 'Leanne Graham', country: 'USA'},
  { id: 3, name: 'Ervin Howell', country: 'Colombia'},
  { id: 4, name: 'Rodrigo Fernandez', country: 'Peru'},
  { id: 5, name: 'Alfredo Bauch', country: 'Guatemala'},
  { id: 6, name: 'Fernanda Valencia', country: 'España'}
]

class App extends Component {
  render () {
    return (
      <div>
        <h1>Iterando</h1>
        <ul>
          {users.map((user, index) => (
            <li key={index + user.name}>
              { user.name }
            </li>
          ))}
        </ul>
      </div>
    )
  }
} */

/* Iteracion de componentes */
/* const images = [{
  author: {
    name: 'Vlad Bagacian',
    avatar: 'https://images.pexels.com/users/avatars/381880/vlad-bagacian-302.jpeg?w=256&h=256&fit=crop&crop=faces'
  },
  source: 'https://images.pexels.com/photos/1368388/pexels-photo-1368388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
  views: 153,
  id: 1
},
{
  author: {
    name: 'Moreno Matković',
    avatar: 'https://images.pexels.com/users/avatars/1265479/moreno-matkovic-149.jpeg?w=256&h=256&fit=crop&crop=faces'
  },
  source: 'https://images.pexels.com/photos/2779539/pexels-photo-2779539.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
  views: 214,
  id: 2
},
{
  author: {
    name: 'Jarod Lovekamp',
    avatar: 'https://images.pexels.com/users/avatars/1263347/jarod-lovekamp-411.jpeg?w=256&h=256&fit=crop&crop=faces'
  },
  source: 'https://images.pexels.com/photos/2404444/pexels-photo-2404444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
  views: 985,
  id: 3
},
{
  author: {
    name: 'Xandro Vandewalle',
    avatar: 'https://images.pexels.com/users/avatars/1431801/xandro-vandewalle-530.jpeg?w=256&h=256&fit=crop&crop=faces'
  },
  source: 'https://images.pexels.com/photos/2763239/pexels-photo-2763239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
  views: 124,
  id: 4
},
{
  author: {
    name: 'Two Dreamers',
    avatar: 'https://images.pexels.com/users/avatars/1190917/two-dreamers-438.jpeg?w=256&h=256&fit=crop&crop=faces'
  },
  source: 'https://images.pexels.com/photos/2717087/pexels-photo-2717087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
  views: 987,
  id: 5
},
{
  author: {
    name: 'Luis Quintero',
    avatar: 'https://images.pexels.com/users/avatars/447123/luis-quintero-294.jpeg?w=256&h=256&fit=crop&crop=faces'
  },
  source: 'https://images.pexels.com/photos/1408196/pexels-photo-1408196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
  views: 147,
  id: 6
},
{
  author: {
    name: 'Tobias Bjørkli',
    avatar: 'https://images.pexels.com/users/avatars/706370/tobias-bjorkli-371.jpeg?w=256&h=256&fit=crop&crop=faces'
  },
  source: 'https://images.pexels.com/photos/1940041/pexels-photo-1940041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
  views: 387,
  id: 7
},
{
  author: {
    name: 'Renato Abati',
    avatar: 'https://images.pexels.com/users/avatars/963082/renato-abati-706.jpeg?w=256&h=256&fit=crop&crop=faces'
  },
  source: 'https://images.pexels.com/photos/2768877/pexels-photo-2768877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
  views: 143,
  id: 8
},
{
  author: {
    name: 'Vlad Bagacian',
    avatar: 'https://images.pexels.com/users/avatars/381880/vlad-bagacian-302.jpeg?w=256&h=256&fit=crop&crop=faces'
  },
  source: 'https://images.pexels.com/photos/1368388/pexels-photo-1368388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
  views: 721,
  id: 9
},
{
  author: {
    name: 'Brayden Law',
    avatar: 'https://images.pexels.com/users/avatars/851295/brayden-law-840.jpeg?w=256&h=256&fit=crop&crop=faces'
  },
  source: 'https://images.pexels.com/photos/1829191/pexels-photo-1829191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
  views: 637,
  id: 10
}]

const Image = ({ image }) =>{
  return(
    <div className='card'>
      <img
        src={image.source}
        alt='Imagen'
        className='image'
      />
      <div className='footer'>
        <img
          src={image.author.avatar}
          alt='Avatar'
          className='avatar'
        />
        <div>
          {image.author.name}
        </div>
        <div>
          {image.views}
        </div>
      </div>
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <div className='images'>
        {/* para iterar el array de images uso esto 
        {images.map((image) => (
          <Image 
            image={image}
            key={image.id}  
          />
        ))}
      </div>
    )
  }
} */

/* pasar datos al iterar listas con react */
/* class App extends Component{
  state = {
    fruits: [
      { name: 'Fresa', price: 5.4 },
      { name: 'Manzana', price: 2.3 },
      { name: 'Sandia', price: 1.2 },
      { name: 'Guayaba', price: 5 },
      { name: 'Pera', price: 4.12 },
      { name: 'Kiwi', price: 3.87 },
      { name: 'Limon', price: 7.21 },
      { name: 'Melon', price: 6.21 },
      { name: 'Cereza', price: 4.98 }
    ],

    frutaSeleccionada: {}
  }
  select = (frutaSeleccionada, event) =>{
    this.setState({
      frutaSeleccionada
    })
    
  }
  render() {
    const { fruits } = this.state;
    return (
      <ul>
        {fruits.map((fruit) =>(
          <li 
            key={fruit.name}
            onClick={this.select.bind(this, fruit)}
            style={{
              color: this.state.frutaSeleccionada.name === fruit.name ? 'red' : '#000'
            }}
          >
            {fruit.name} - $ {fruit.price}
          </li>
        ))}
      </ul>
    )
  }
} */

/* Referencias o refs con React */
/* class Entrada extends Component{
  constructor() {
    super()

    //aca dentro del constructor tenemos que llamar al metodo de react createRef
    this.entrada = React.createRef()
  }
  //la siguiente funcion es parte del ciclo de vida de una funcion, esta funcion se ejecuta cuando el componente es montado
  componentDidMount(){

  }

  focus = () =>{
    //aca con la siguiente linea hace foco al campo input
    this.entrada.current.focus()
    
  }

  blur = () =>{
    //en la siguiente linea elimina el foco del elemento referenciado
    this.entrada.current.blur()
  }
  render() {
    return(
      <div>
        {/* //le colocamos ref como propiedad al tag que queremos hacer referencia 
        <input type="text" ref={this.entrada}/>
        <button onClick={this.focus}>
          Focus
        </button>
        <button onClick={this.blur}>
          Blur
        </button>
      </div>
    )
  }
}
class App extends Component{
  render() {
    return(
      <div>
        <h1>
          React refs
        </h1>
        <Entrada/>
      </div>
    )
  }
}
 */

/* Integrar librerias de terceros usando las refs de React */

// las graficas se sacaron de chart.js se instalan con npm y luego la importo al principio 
/* class Graficas extends Component{
  // hago referencia al ref
  grafica = React.createRef();
  componentDidMount() {
    //cambio var por const ya que son constantes porque nunca van a variar
    //elimino el getelementbyid por this.grafica.current para acceder al contenido del tag canvas
    const ctx = this.grafica.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }
  render() {
    return(
      <div>
        <canvas
        //hago la refencia a este tag
          ref={this.grafica}
          width="400"
          height="400"
        >

        </canvas>
      </div>
    )
  }
}

class App extends Component{
  render() {
    return(
      <div>
        <h1>Usando refs</h1>
        <Graficas/>
      </div>
    )
  }
} */

/* reenvio de la prop especial ref con forwardRef */
//sirve para reenviar la ref del padre al hijo
/* const FancyInput = React.forwardRef((props, ref) =>(
  <div>
    <input type="text" ref={ref}/>
  </div>
))
class App extends Component{
  entrada = React.createRef()

  componentDidMount(){
    console.log(this.entrada);
    
  }
  render() {
    return(
      <div>
        <h1>Reenvio de refs</h1>
        <FancyInput ref={this.entrada}/>
      </div>
    )
  }
}  */

/* manejando inputs no controlados con refs */

/* const Unicorn = () =>{
  return(
    <span>
      Imagen
    </span>
  )
}

class InputNoControlado extends Component{


  handleSubmit = (e) =>{
    //aca obtengo los valores del ref de la siguiente forma
    // no olvidar el current.value para obtener el valor

    //respecto a los inputs controlados, cuando le pase el evento(e) como paremetro al ser un form, le puedo pasar .target y el valor que pase dentro de los [] indica cual de los input va a tomar, es decir, si paso e.target[0] este me tomaria el primer input del form
    //paso preventdefault para que no recargue la pagina y se puedan quedar los cambios guardados
    e.preventDefault()
    const nombre = e.target[0].value
    const email = e.target[1].value
    //manejo de datos
    this.props.onSend({nombre, email})
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder='Nombre'/>
        <input type="text" placeholder='Email'/>
        <button>
          Enviar
        </button>
      </form>
    )
  }
}
class App extends Component{
  send = (data) =>{
    console.log(data);
    
  }
  render() {
    return(
      <div>
        <h1>
          Inputs no controlados refs <Unicorn/>
        </h1>
        <InputNoControlado
          onSend={this.send}
        />
      </div>
    )
  }
} */

/* Ventajas y desventajas de inputs controlados y no controlados */
/* en los inputs no controlados su sintaxis se parece mas a html puro, el cual lo hace mas visible de visualizar, tiene en desventaja que la informacion que suministre el usuario solo podra ser revisada cuando el usuario la envie, antes de esto no se podra corregir o modificar */

/* Inputs controlados */
/* class InputControlado extends Component{
  state = {
    text: '',
    tieneError: false,
    color: '#E8E8E8'
  }

  actualizar = (e) =>{
    const text= e.target.value
    const tieneError = text !== '' && text.length < 5
    //le coloco let ya que este si va ha variar
    let color = 'green'
    //trim limpia los espacios en blanco al principio y al final
    if (text.trim() === ''){
      color= '#E8E8E8'
    }

    if (text.trim() !== '' && text.trim().length < 5){
      color= 'red'
    }

    this.setState({ text, color })
    
    //propagando datos al padre
    this.props.onChange(this.props.name, text)
  }

  render() {
    const styles = {
      border: `1px solid ${this.state.color}`,
      padding: '0.3em 0.6em',
      outline: 'none'
    }
    return(
      <input 
        type="text"
        value={this.state.text}
        onChange={this.actualizar}
        style={styles}
        placeholder={this.props.placeholder}
      />
    )
  }
}
class App extends Component{
  state = {
    name: '',
    email: ''
  }
  actualizar = (name, text) =>{
    this.setState({
      [name]: text
    })
    
  }
  render() {
    return(
      <div>
        <h1>Inputs Controlados</h1>
        <InputControlado
          onChange={this.actualizar}
          placeholder='Nombre Completo'
          //le paso este valor para que sea reutilizable el codigo y asi no tener que repetir codigo para recibir los distintos parametros
          name='name'
        />
        <InputControlado
          onChange={this.actualizar}
          placeholder='Tu Email'
          name='email'
        />
        <h2>
          Nombre: {this.state.name}
        </h2>
        <h2>
          Email: {this.state.email}
        </h2>
      </div>
    )
  }
} */

/* usando el atributo for en formularios */
/* class InputNoControlado extends Component{
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor='name'>Nombre:</label>
          <input 
            type="text"
            placeholder='Nombre'
            id='name'
          />
        </p>
        <p>
          <label htmlFor='email'>E-mail:</label>
          <input 
            type="text"
            placeholder='Email'
            id='email'
          />
        </p>
        <button>
          Enviar
        </button>
      </form>
    )
  }
}


class App extends Component{

  send = (data) =>{
    console.log(data);
    
  }
  render() {
    return(
      <div>
        <h1>
          Atributo ref
        </h1>
        <InputNoControlado
          onSend={this.send}
        />
      </div>
    )
  }
} */

/* formulario con ejemplo de seleccion */
class App extends Component {
  state = {
    techs: ['Vue']
  }

  handleChange = (e) =>{
    //al ser objetos de html no me los devuelve como un array por lo tanto al pasarlo como array.from lo vuelve un array legible, luego lo mapeo para poder visualizar los objetos del array, dentro del array.from como segundo parametro se pasa el map
    const techs = Array.from(
      e.target.selectedOptions,
      ( option ) =>( option.value )
    )
    console.log(techs);
    this.setState({
      techs
    })
  }
  render () {
    return(
      <div>
        <h1>
          Etiqueta Select 
        </h1>
        <form>
          {/* la propiedad dentro del tag selected hace que por defecto este seleccionado el valor que coloquemos dentro sin la necesidad de pasarle selected a la opcion que necesitamos que se muestre de primero */}
          <select 
            onChange={this.handleChange}
            multiple
          >
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Vanilla">Vanilla</option>
          </select>
        </form>
        <ul>
          {this.state.techs.map((tech) =>(
            <li key={tech}>
              { tech }
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default App;