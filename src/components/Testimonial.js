const Testimonial = () => {
  return (
    <div className='testimonial' id="testimonial">
        <h1 style={{fontWeight: 'bold', textAlign: 'center', color: '#c72830'}}>Testimonials</h1>
        <h1 style={{fontWeight: 'bold', fontSize: '0.5rem', textAlign: 'center', color: 'black'}}>These are what our clients are saying about us</h1>
        <div className="testimonialRow">
            <div className="testimonialCol">
                <h1 style={{fontWeight: 'bold'}}>Customer name</h1>
                <h1 style={{fontWeight: 'bold'}}>Location</h1>
                <h3>His/her feedback</h3>
            </div>
            <div className="testimonialCol">
                <h1 style={{fontWeight: 'bold'}}>Customer name</h1>
                <h1 style={{fontWeight: 'bold'}}>Location</h1>
                <h3>His/her feedback</h3>
            </div>
            <div className="testimonialCol">
                <h1 style={{fontWeight: 'bold'}}>Customer name</h1>
                <h1 style={{fontWeight: 'bold'}}>Location</h1>
                <h3>His/her feedback</h3>
            </div>
        </div>
    </div>
  )
}
export default Testimonial