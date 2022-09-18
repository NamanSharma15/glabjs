import React, {useRef }  from 'react'
import { Link, useNavigate} from 'react-router-dom'
import NumGuess from './NumGuess';
const Navbar = (props) => {
    let navigate = useNavigate()
    const ref = useRef(null)
    const modal=() => {
        ref.current.click()
    }
    const onChangeH = () => {
        navigate('/')
    }
    const onChangeC = () => {
        navigate('/contact')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-navbar" >
                <div className="container-fluid">
                    <span className="navbar-brand" to="/">
                        <div className='d-flex'>
                            <img src={require('../glab-icon.png')} alt="" width="45" height="40" />
                            <span className='mx-2'>
                                <Link className="navbar-brand" style={{ 'fontSize': '25px' }} to="/"> Gamer's Lab </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </span>
                            <span className="nav-item dropdown mx-2 my-1collapse navbar-collapse" id="navbarSupportedContent">
                                <span className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Text Games
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><span className="dropdown-item" onClick={modal}>Guess The Number</span></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/jumblewords">Jumble Words</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/wordle">Wordle</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/hangman">HangMan</Link></li>
                                </ul>
                            </span>
                        </div>
                    </span>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" id='navBarSearchForm' placeholder="Search" aria-label="Search" />
                        <i className="fa fa-search cursorh" style={{ 'color': 'white', 'fontSize': '175%', 'marginTop': '5px' }} onClick={onChangeH}></i>
                    </form>
                    <div className='d-flex flex-row-reverse'>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item  mx-2">
                                    <i className="fa fa-home cursorh" style={{ 'color': 'white', 'fontSize': '200%', 'marginTop': '5px' }} onClick={onChangeH}></i>
                                </li>
                                <li className="nav-item  mx-2">
                                    <i className="fa fa-address-book cursorh" style={{ 'color': 'white', 'fontSize': '200%', 'marginTop': '5px' }} onClick={onChangeC}></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <NumGuess/>
            </div>
        </div>
    )
}

export default Navbar