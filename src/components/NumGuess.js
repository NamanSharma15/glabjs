import React, { useState,useRef} from 'react'

const NumGuess = (props) => {
    const refc = useRef(null)
    const [num, setnum] = useState(3)
    const [message, setMessage] = useState("")
    const [guess, setGuess] = useState('')
    const onChange = (e)=>{
        setGuess(e.target.value)
    }
    const handleClick = (e)=>{
        e.preventDefault();
        if(parseInt(guess)===num){
            setMessage("Your guess is correct")
            setnum(Math.floor(Math.random() * 100))
            setGuess("")
        }
        else{
            if(parseInt(guess)<num){
                setMessage("Number is Larger")
                setGuess("")
            }
            else{
                setMessage("Number is Smaller")
                setGuess("")
            }
        }
    }
const onClose = ()=>{
    setMessage("")
    setnum(Math.floor(Math.random() * 100))
}
let flag = false;
    return (
        <>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" style={{ 'color': 'red' }} id="exampleModalLabel">Guess The Number</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose} ref={refc}></button>
                    </div>
                    <div className="modal-body">
                        <h6>
                            In This Game You have to Guess the Number with the <br />
                            help of the given hints We have randomly Selected <br />
                            a number from 1 to 100
                        </h6>
                        Hints:
                        <br />
                        {
                            (num % 2 === 0) ? "Number is even" : "Number is odd"
                        }
                        <br />
                        {
                            (num > 50) ? "Number is Greater than 50" : "Number is Lesser than fifty"
                        }
                        <br/>
                        <form onSubmit={handleClick}>
                            <div className="mb-3">
                                <label htmlFor="number" className="form-label">Enter the number</label>
                                <input type="text" className="form-control" value={guess} id="number" onChange={onChange} autoComplete="off"  />
                                <button type="submit" className="btn btn-success mt-2" >Guess</button>
                            </div>
                        </form>
                        <hr />
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NumGuess