import React, {Component} from 'react';
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

export default App;