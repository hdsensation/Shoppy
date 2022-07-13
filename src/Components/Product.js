import React from 'react'
import { Dispatchcart } from './Cart'


export const Product = ({ product ,det,set}) => {
  

  const dispatch = Dispatchcart()
  const addtocart = (item) => {
    dispatch({ type: 'ADD', item })
    alert(`Item added ${item.title}`)
  }

  function change(cat) {
    let fdata= product.filter((x)=> x.category === cat)
    set(fdata)
    
  }


  return (
    <>
      < div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://miro.medium.com/max/1018/1*iAu65xDmvpVdBJgps6EDEw.png" className="d-block w-100" alt="..." height={'350px'} />
          </div>
        </div>

        <div className="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Catergory
    </button>
    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <li><button className='dropdown-item'onClick={()=>set(product)}>ALL</button></li>
      <li><button className='dropdown-item'onClick={()=>change(`men's clothing`)}>Mens</button></li>
      <li><button className='dropdown-item'onClick={()=>change(`women's clothing`)}>Womens</button></li>
      <li><button className='dropdown-item'onClick={()=>change("jewelery")}>Jewelery</button></li>
      <li><button className='dropdown-item'onClick={()=>change("electronics")}>Electronics</button></li>

    </ul>
  </div>




        <div className='container'>
          <div className='row'>
            {det.map(product =>
              <div className="col-md-4" key={product.id}>
                <div className="my-3">
                  <div className="card">
                    <img src={product.image} className="card-img-top" alt="..." height={'250px'} />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <h3>PRICE :${product.price}</h3>
                      <button type="button" className="btn btn-outline-warning" onClick={() => addtocart(product)}>ADD TO CART</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </>

  )
}
