/* eslint-disable react/prop-types */
import './hero.scss'
import './Card.scss'
function Card(props){
    return(
      <div className="card">
        <img src={props.img} alt="" />

        <h3>manali</h3>
        <p>time : <span>2 days & 3 nights</span></p>
        <p>rating : <span>⭐4.5</span></p>
        <p>reviews : <span>4,30,320</span></p>
        <p>cost : <span>₹2000.00/day</span></p>
      </div>

    )
}

function Index() {
  return (
    <>
      <h1>This is index page</h1>
      <section className="hero">

        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  )
}

export default Index
