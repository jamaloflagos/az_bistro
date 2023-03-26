import { useEffect, useState } from "react"
const date = new Date()
const time = new Date()
const OrderModal = ({toggleOrderModal, orderName}) => {
    console.log(date, time)
    const [customerData, setCustomerData] = useState({
        date: date.toDateString(),
        dateTime: time.toLocaleTimeString(),
        orderName: orderName,
        name: '',
        phone: '',
        location: ''
    })    
    const getCustomerData = (e) => {
        console.log(e.target)
        const {name, value} = e.target
        setCustomerData(prevCustomerData => {
            return {
                ...prevCustomerData,
                [name]: value
            }
        })
    }

    const handleSubmit = () => {
        toggleOrderModal()
        fetch('https://az-bistro-8deab-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify(customerData),
            header: {
                "Content-Type": 'application/json'
            }
        })
    }

    console.log(customerData)
  return (
    <div className="orderModal">
        <div className="orderInput">
            <h1 style={{color: '#c72830', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '20px'}}>{orderName}</h1>
            <label htmlFor='name'> Your name:
                <input type="text"
                       name="name" 
                       id="name" 
                       value={customerData.name}
                       onChange={getCustomerData}
                />
            </label>
            <label htmlFor='location'> Location:
                <input 
                        type="text" 
                        name="location" 
                        id="location"
                        value={customerData.location} 
                        onChange={getCustomerData}
                />
            </label>
            <label htmlFor='number'> Phone number
                <input 
                        type="text" 
                        name="phone" 
                        id="number" 
                        value={customerData.phone}
                        onChange={getCustomerData}
                />
            </label>
            <button type="submit" onClick={handleSubmit}>Place order</button>
        </div>
    </div>
  )
}
export default OrderModal