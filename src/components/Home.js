import image1 from '../images/beefBurger.jpg'
import image2 from '../images/chickenSalad.jpg'
import image3 from '../images/catfishBbq.jpg'
import image4 from '../images/clubSandwich.jpg'
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div id='home'>
        {/* Landing Page/Home */}
        <div id="home-container">
            <div className="row">
                <div id="home1" className="col-1">
                    <span className="span" style={{fontSize: '2rem'}}>Home made meals </span>
                    <span className="span" style={{fontSize: '1.5rem'}}>at your finger tip.</span>
                    <span className="span" style={{marginTop: '5px', textAlign: 'start'}}>Helping you enjoy comfortable and healthy 
                     food anywhere and anytime on the go </span>
                    <span className="span" style={{marginTop: '5px', fontSize: '1.5rem'}}>You are <span style={{fontSize: '1.5rem'}}>home</span> far</span>
                    <span className="span" style={{fontSize: '1.3rem'}}>away from <span style={{fontSize: '1.3rem'}}>home</span></span>
                    
                    <Link to='menu' smooth={true} style={{backgroundColor: '#c72830', color: 'white', display: 'block',
                                    height: '40px', width: '100px',
                                    borderRadius: '5px', paddingTop: '9px',
                                    textAlign: 'center', marginTop: '30px'}}>Order Now</Link>
                </div>
                <div id="home2" className="boxes">
                        <img src="images/shawarma.jpg" alt="" className="homeImg" width="200px" />
                        <div className="box box1">
                            <img src={image1} alt="image1" className='images'/>
                        </div>
                        <div className="box box2">
                            <img src={image2} alt="image2" className="images" />
                        </div>
                        <div className="box box3">
                            <img src={image3} alt="image3" className="images" />
                        </div>
                        <div className="box box4">
                            <img src={image4} alt="image4" className="images" />
                        </div>
                </div>
            </div>
            <div>
                    <h1 className="open">Open from 8AM to 6PM <br/>Sunday to Saturday</h1>    
            </div>
            {/* Cart */}
            <div id="cart" style={{display: 'none'}}>
                <ul id="ulCart"></ul>
                <button id="delete">delete</button>
                <button id="closeCart">Close</button>
            </div>
            <button id="displayCart" style={{display: 'none'}}>Cart</button>
        </div>
    </div>
  )
}
export default Home