import React, {Component} from 'react';
import './App.css'
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
class App extends Component{
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
}
export default App;