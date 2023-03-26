const Choose = () => {
  return (
    <div id="choose">
        {/* Why choose us */}
        <div className="choose">
            <h1 style={{fontWeight: 'bold', color: '#c72830'}}>Why Choose Us</h1>
            <h1 style={{fontWeight: 'bold', color: 'black'}}>This is what makes us standout and different</h1>
            <div className="chooseRow">
                <div className="chooses">
                    <div className="i">icon</div>
                    <h1 className="why" style={{margin: '10px 0 10px 0', fontWeight: 'bold', color: '#c72830'}}>Easy to order</h1>
                    <h2>Order the choice of your food at a single click anytime, anywhere with ease and comfort</h2>
                </div>
                <div className="chooses">
                    <div className="i">icon</div>
                    <h1 className="why" style={{margin: '10px 0 10px 0', fontWeight: 'bold', color: '#c72830'}}>Fast delivery</h1>
                    <h2>Food delivery is very fast and very reliable, you won't wait all day before your food get delivered to you at your location</h2>
                </div>
                <div className="chooses">
                    <div className="i">icon</div>
                    <h1 className="why" style={{margin: '10px 0 10px 0', fontWeight: 'bold', color: '#c72830'}}>100% Quality</h1>
                    <h2>We provide tasty and sumptuous meal for you and your loved ones for a healthy living at affordable price.</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Choose