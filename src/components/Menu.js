import menu from "../menus"
import OrderModal from "./OrderModal"
import { useState, useEffect } from "react"
const Menu = () => {
  const [showOrderModal, setShowOrderModal] = useState(false)
  const [orderName, setOrderName] = useState()
    console.log(menu[0].starter)
    console.log('menu renderd')
    const starter = menu[0].starter
    const salad = menu[1].salad
    const pasta = menu[2].pasta
    const barbeque = menu[3].barbeque
    const sandwich = menu[4].sandwich
    const burger = menu[5].burger
    const pepperSoup = menu[6].pepperSoup
    const pizza = menu[7].pizza

    const toggleModal = () => {
      setShowOrderModal(prevShowOrderModal => !prevShowOrderModal)
    }

    const starterOrderModal = (id) => {
      setShowOrderModal(prevShowOrderModal => !prevShowOrderModal)
      const starters = starter.find(starter => starter.id === id )
      setOrderName( starters.foodName)
      console.log(orderName)
  } 
  
    const saladOrderModal = (id) => {
    setShowOrderModal(prevShowOrderModal => !prevShowOrderModal)
    const salads = salad.find(salad => salad.id === id )
    setOrderName( salads.foodName)
    console.log(orderName)
}
  const pastaOrderModal = (id) => {
  setShowOrderModal(prevShowOrderModal => !prevShowOrderModal)
  const pastas = pasta.find(pasta => pasta.id === id )
  setOrderName( pastas.foodName)
  console.log(orderName)
}

  const bbqOrderModal = (id) => {
  setShowOrderModal(prevShowOrderModal => !prevShowOrderModal)
  const bbq = barbeque.find(barbeque => barbeque.id === id )
  setOrderName( bbq.foodName)
  console.log(orderName)
}

  const sandwichOrderModal = (id) => {
  setShowOrderModal(prevShowOrderModal => !prevShowOrderModal)
  const sandwichs = sandwich.find(sandwich => sandwich.id === id )
  setOrderName( sandwichs.foodName)
  console.log(orderName)
}

  const burgerOrderModal = (id) => {
  setShowOrderModal(prevShowOrderModal => !prevShowOrderModal)
  const burgers = burger.find(burger => burger.id === id )
  setOrderName( burgers.foodName)
  console.log(orderName)
}

  const peppersoupOrderModal = (id) => {
  setShowOrderModal(prevShowOrderModal => !prevShowOrderModal)
  const pepperSoups = pepperSoup.find(pepperSoup => pepperSoup.id === id )
  setOrderName( pepperSoups.foodName)
  console.log(orderName)
}

  const pizzaOrderModal = (id) => {
  setShowOrderModal(prevShowOrderModal => !prevShowOrderModal)
  const pizzas = pizza.find(pizza => pizza.id === id )
  setOrderName( pizzas.foodName)
  console.log(orderName)
}

    
  return (
    
    <div className='menus' id="menu">
        {showOrderModal && <OrderModal toggleOrderModal={toggleModal} orderName={orderName}/>}
        <h1 style={{fontWeight: 'bold', fontSize: '2rem', color: '#c72830'}}>Our Menu</h1>
        <div className='starter'>
            <h1 className='category'>Starter</h1>
            <div className='foodGrid'>
              {starter.map(starter => {
                return (
                  <div key={starter.id} className='foodBorder'>
                      <h2 className='readyTime'>Ready time: {starter.readyTime}</h2>
                      <img src={starter.foodImg} alt="starter" className='foodImg' />
                      <h1 className='foodName'>{starter.foodName}</h1>
                      <div className='price-order'>
                        <h2 className='foodPrice'>{starter.foodPrice}</h2>
                        <button className='order' onClick={()=> starterOrderModal(starter.id)}>Order</button>
                      </div>
                  </div>
                )
              })}
            </div>
        </div>
        <div className='salad'>
              <h1 className="category">Salad</h1>
              <div className='foodGrid'>
                {salad.map(salad => {
                  return (
                    <div key={salad.id} className="foodBorder">
                        <h2 className="readyTime">Ready time: {salad.readyTime}</h2>
                        <img src={salad.foodImg} alt="salad" className='foodImg' />
                        <h1 className="foodName">{salad.foodName}</h1>
                        <div className="price-order">
                          <h2 className="foodPrice">{salad.foodPrice}</h2>
                          <button className="order" onClick={() => saladOrderModal(salad.id)}>Order</button>
                        </div>
                    </div>
                  )
                })}
              </div>
        </div>
        <div className='pasta'>
              <h1 className="category">Pasta</h1>
              <div className='foodGrid'>
                {pasta.map(pasta => {
                  return (
                    <div key={pasta.id} className="foodBorder">
                        <h2 className="readyTime">Ready time: {pasta.readyTime}</h2>
                        <img src={pasta.foodImg} alt="pasta" className='foodImg' />
                        <h1 className="foodName">{pasta.foodName}</h1>
                        <div className="price-order">
                          <h2 className="foodPrice">{pasta.foodPrice}</h2>
                          <button className="order" onClick={() => pastaOrderModal(pasta.id)}>Order</button>
                        </div>
                    </div>
                  )
                })}
              </div>
        </div>
        <div className='barbeque'>
              <h1 className="category" style={{width: '200px'}}>Barbeque</h1>
              <div className='foodGrid'>
                {barbeque.map(barbeque => {
                  return (
                    <div key={barbeque.id} className="foodBorder">
                        <h2 className="readyTime">Ready time: {barbeque.readyTime}</h2>
                        <img src={barbeque.foodImg} alt="barbeque" className='foodImg' />
                        <h1 className="foodName">{barbeque.foodName}</h1>
                        <div className="price-order">
                          <h2 className="foodPrice">{barbeque.foodPrice}</h2>
                          <button className="order" onClick={() => bbqOrderModal(barbeque.id)}>Order</button>
                        </div>
                    </div>
                  )
                })}
              </div>
        </div>
        <div className='sandwich'>
              <h1 className="category" style={{width: '200px'}}>Sandwich</h1>
              <div className='foodGrid'>
                {sandwich.map(sandwich => {
                  return (
                    <div key={sandwich.id} className="foodBorder">
                        <h2 className="readyTime">Ready time: {sandwich.readyTime}</h2>
                        <img src={sandwich.foodImg} alt="sandwich" className='foodImg' />
                        <h1 className="foodName">{sandwich.foodName}</h1>
                        <div className="price-order">
                          <h2 className="foodPrice">{sandwich.foodPrice}</h2>
                          <button className="order" onClick={() => sandwichOrderModal(sandwich.id)}>Order</button>
                        </div>
                    </div>
                  )
                })}
              </div>
        </div>
        <div className='burger'>
              <h1 className="category">Burger</h1>
              <div className='foodGrid'>
                {burger.map(burger => {
                  return (
                    <div key={burger.id} className="foodBorder">
                        <h2 className="readyTime">Ready time: {burger.readyTime}</h2>
                        <img src={burger.foodImg} alt="burger" className='foodImg' />
                        <h1 className="foodName">{burger.foodName}</h1>
                        <div className="price-order">
                          <h2 className="foodPrice">{burger.foodPrice}</h2>
                          <button className="order" onClick={() => burgerOrderModal(burger.id)}>Order</button>
                        </div>
                    </div>
                  )
                })}
              </div>
        </div>
        <div className='pepperSoup'>
              <h1 className="category" style={{width: '200px'}}>Peppersoup</h1>
              <div className='foodGrid'>
                {pepperSoup.map(pepperSoup => {
                  return (
                    <div key={pepperSoup.id} className="foodBorder">
                        <h2 className="readyTime">Ready time: {pepperSoup.readyTime}</h2>
                        <img src={pepperSoup.foodImg} alt="pepperSoup" className='foodImg' />
                        <h1 className="foodName">{pepperSoup.foodName}</h1>
                        <div className="price-order">
                          <h2 className="foodPrice">{pepperSoup.foodPrice}</h2>
                          <button className="order" onClick={()=> peppersoupOrderModal(pepperSoup.id)}>Order</button>
                        </div>
                    </div>
                  )
                })}
              </div>
        </div>
        <div className='pizza'>
              <h1 className="category">pizza</h1>
              <div className='foodGrid'>
                {pizza.map(pizza => {
                  return (
                    <div key={pizza.id} className="foodBorder">
                        <h2 className="readyTime">Ready time: {pizza.readyTime}</h2>
                        <img src={pizza.foodImg} alt="pizza" className='foodImg' />
                        <h1 className="foodName">{pizza.foodName}</h1>
                        <div className="price-order">
                          <h2 className="foodPrice">{pizza.foodPrice}</h2>
                          <button className="order" onClick={() => pizzaOrderModal(pizza.id)}>Order</button>
                        </div>
                    </div>
                  )
                })}
              </div>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}
export default Menu