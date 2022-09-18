import React from 'react'
import CardHome from './CardHome'
import  {useNavigate} from 'react-router-dom'
const Home = () => {
    const nav = useNavigate()
    return (
        <>
            <div className='container my-2'>
                <div style={{ 'color': 'white' }}>
                    <h1 className='topm'>Welcome To Gamer's Lab</h1>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={require('../Hangman.png')} className="d-block w-90 center" height='300' alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('../Keyspeed.png')} className="d-block w-90 center" height='300' alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('../wordle.png')} className="d-block w-90 center hoverc" height='300' alt="..." onClick={()=>{nav('/wordle')}} />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="card center my-3" style={{ "width": "60rem" }}>
                        <div className="card-body" style={{ 'color': 'black' }}>
                            <CardHome />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home