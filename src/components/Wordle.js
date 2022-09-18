import React, { useState, useEffect,useRef} from 'react'
const Wordle = () => {
  const [AccWord, setAccWord] = useState("")
  const host = "http://localhost:5000"
  const cguess = useRef(null)
  useEffect(() => {
    setAccWord(AccWord.toUpperCase())
    // eslint-disable-next-line
  }, [])
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/words`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json()
    const L1=[] 
    json.forEach(element => {
      L1.push(element.Sentence)
    });
    let index = Math.floor(Math.random()*L1.length)
    let S = L1[index]
    setAccWord(S)
  }
    useEffect(() => {
      getNotes()
    }, [])
  const [ModalT, setModalT] = useState("")
  const [ModalC, setModalC] = useState("")
  const [onWord, setonWord] = useState(1)
  const [emp, setemp] = useState(0)
  const [words1, setwords1] = useState([])
  const [words2, setwords2] = useState([])
  const [words3, setwords3] = useState([])
  const [words4, setwords4] = useState([])
  const [words5, setwords5] = useState([])
  const [words6, setwords6] = useState([])
  const [word1, setword1] = useState([])
  const [word2, setword2] = useState([])
  const [word3, setword3] = useState([])
  const [word4, setword4] = useState([])
  const [word5, setword5] = useState([])
  const [word6, setword6] = useState([])
  function refreshPage() {
    window.location.reload(false);
  }
  const Enter = (e) => {
    if (word1.length === 5 && onWord === 1) {
      let col = []
      if (word1.join("") === AccWord) {
        col = [1, 1, 1, 1, 1]
        setwords1(col)
        setModalT('Winner')
        setModalC('You Have Guessed the word correctly')
        setTimeout(() => {
          cguess.current.click()
        }, 1000);
      }
      else {
        for (let i = 0; i < 5; i++) {
          if (word1[i] === AccWord.split("")[i]) {

            col.push(1)
          }
          else if (AccWord.split("").includes(word1[i])) {
            col.push(2)
          }
          else {
            col.push(3)
          }
        }
        setwords1(col)
      }
      setonWord(2)
    }
    else if (word2.length === 5 && onWord === 2) {
      let col = []
      if (word2.join("") === AccWord) {
        col = [1, 1, 1, 1, 1]
        setwords2(col)
        setModalT('Winner')
        setModalC('You Have Guessed the word correctly')
        setTimeout(() => {
          cguess.current.click()
        }, 1000);
      }
      else {
        for (let i = 0; i < 5; i++) {
          if (word2[i] === AccWord.split("")[i]) {

            col.push(1)
          }
          else if (AccWord.split("").includes(word2[i])) {
            col.push(2)
          }
          else {
            col.push(3)
          }
        }
        setwords2(col)
      }
      setonWord(3)
    }
    else if (word3.length === 5 && onWord === 3) {
      let col = []
      if (word3.join("") === AccWord) {
        col = [1, 1, 1, 1, 1]
        setwords3(col)
        setModalT('Winner')
        setModalC('You Have Guessed the word correctly')
        setTimeout(() => {
          cguess.current.click()
        }, 1000);
      }
      else {
        for (let i = 0; i < 5; i++) {
          if (word3[i] === AccWord.split("")[i]) {

            col.push(1)
          }
          else if (AccWord.split("").includes(word3[i])) {
            col.push(2)
          }
          else {
            col.push(3)
          }
        }
        setwords3(col)
      }
      setonWord(4)
    }
    else if (word4.length === 5 && onWord === 4) {
      let col = []
      if (word4.join("") === AccWord) {
        col = [1, 1, 1, 1, 1]
        setwords4(col)
        setModalT('Winner')
        setModalC('You Have Guessed the word correctly')
        setTimeout(() => {
          cguess.current.click()
        }, 1000);
      }
      else {
        for (let i = 0; i < 5; i++) {
          if (word4[i] === AccWord.split("")[i]) {

            col.push(1)
          }
          else if (AccWord.split("").includes(word4[i])) {
            col.push(2)
          }
          else {
            col.push(3)
          }
        }
        setwords4(col)
      }
      setonWord(5)
    }
    else if (word5.length === 5 && onWord === 5) {
      let col = []
      if (word5.join("") === AccWord) {
        col = [1, 1, 1, 1, 1]
        setwords5(col)
        setModalT('Winner')
        setModalC('You Have Guessed the word correctly')
        setTimeout(() => {
          cguess.current.click()
        }, 1000);
      }
      else {
        for (let i = 0; i < 5; i++) {
          if (word5[i] === AccWord.split("")[i]) {

            col.push(1)
          }
          else if (AccWord.split("").includes(word5[i])) {
            col.push(2)
          }
          else {
            col.push(3)
          }
        }
        setwords5(col)
      }
      setonWord(6)
    }
    else if (word6.length === 5 && onWord === 6) {
      let col = []
      if (word6.join("") === AccWord) {
        col = [1, 1, 1, 1, 1]
        setwords6(col)
        setModalT('Winner')
        setModalC('You Have Guessed the word correctly')
        setTimeout(() => {
          cguess.current.click()
        }, 1000);
      }
      else {
        for (let i = 0; i < 5; i++) {
          if (word6[i] === AccWord.split("")[i]) {

            col.push(1)
          }
          else if (AccWord.split("").includes(word6[i])) {
            col.push(2)
          }
          else {
            col.push(3)
          }
        }
        setwords6(col)
        setModalT('Out of Guesses')
        setModalC(`You Are Out of Guesses Correct Word is ${AccWord}`)
        setTimeout(() => {
          cguess.current.click()
        }, 1000);
      }
      setonWord(7)
    }
  }
  const fill1 = (letter) => {
    if (onWord === 1) {
      if (word1.length < 5) {
        let cemp = emp + 1
        let l = word1
        l.push(letter)
        setword1(l)
        setemp(cemp)
      }
    }
    else if (onWord === 2) {
      if (word2.length < 5) {
        let cemp = emp + 1
        let l = word2
        l.push(letter)
        setword2(l)
        setemp(cemp)
      }
    }
    else if (onWord === 3) {
      if (word3.length < 5) {
        let cemp = emp + 1
        let l = word3
        l.push(letter)
        setword3(l)
        setemp(cemp)
      }
    }
    else if (onWord === 4) {
      if (word4.length < 5) {
        let cemp = emp + 1
        let l = word4
        l.push(letter)
        setword4(l)
        setemp(cemp)
      }
    }
    else if (onWord === 5) {
      if (word5.length < 5) {
        let cemp = emp + 1
        let l = word5
        l.push(letter)
        setword5(l)
        setemp(cemp)
      }
    }
    else if (onWord === 6) {
      if (word6.length < 5) {
        let cemp = emp + 1
        let l = word6
        l.push(letter)
        setword6(l)
        setemp(cemp)
      }
    }
  }
  const backs = () => {
    if (onWord === 1) {
      word1.pop()
      if (word1.length > -1) {
        let bemp = emp - 1
        setemp(bemp)
      }
    }
    else if (onWord === 2) {
      word2.pop()
      if (word2.length > -1) {
        let bemp = emp - 1
        setemp(bemp)
      }
    }
    else if (onWord === 3) {
      word3.pop()
      if (word3.length > -1) {
        let bemp = emp - 1
        setemp(bemp)
      }
    }
    else if (onWord === 4) {
      word4.pop()
      if (word4.length > -1) {
        let bemp = emp - 1
        setemp(bemp)
      }
    }
    else if (onWord === 5) {
      word5.pop()
      if (word5.length > -1) {
        let bemp = emp - 1
        setemp(bemp)
      }
    }
    else if (onWord === 6) {
      word6.pop()
      if (word6.length > -1) {
        let bemp = emp - 1
        setemp(bemp)
      }
    }
  }
  const getColor = (lis, num) => {
    let color = "";
    let tc = "white"
    if (lis[num] === 1) {
      color = "green"
    }
    else if (lis[num] === 2) {
      color = "#8B8000"
    }
    else if (lis[num] === 3) {
      color = "grey"
    }
    else {
      tc = 'black'
    }
    return { 'color': tc, 'backgroundColor': color }
  }
  return (
    <div className='topm'>
      <div className="card center" style={{ "width": "60rem" }}>
        <div className="card-body textB">
          <h1 className='tittle' >Wordle</h1>
          <hr style={{ 'height': '5px', 'backgroundColor': 'black', 'color': 'black' }} />
          <br />
          <br />
          <div className='center'>
            <span className='ebox mx-1' style={(onWord > 1) ? getColor(words1, 0) : { 'color': 'black' }}>{(emp > 0) ? word1[0] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 1) ? getColor(words1, 1) : { 'color': 'black' }}>{(emp > 1) ? word1[1] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 1) ? getColor(words1, 2) : { 'color': 'black' }}>{(emp > 2) ? word1[2] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 1) ? getColor(words1, 3) : { 'color': 'black' }}>{(emp > 3) ? word1[3] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 1) ? getColor(words1, 4) : { 'color': 'black' }}>{(emp > 4) ? word1[4] : ''}</span>
          </div>
          <br />
          <div className='center'>
            <span className='ebox mx-1' style={(onWord > 2) ? getColor(words2, 0) : { 'color': 'black' }}>{(emp > 0) ? word2[0] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 2) ? getColor(words2, 1) : { 'color': 'black' }}>{(emp > 1) ? word2[1] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 2) ? getColor(words2, 2) : { 'color': 'black' }}>{(emp > 2) ? word2[2] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 2) ? getColor(words2, 3) : { 'color': 'black' }}>{(emp > 3) ? word2[3] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 2) ? getColor(words2, 4) : { 'color': 'black' }}>{(emp > 4) ? word2[4] : ''}</span>
          </div>
          <br />
          <div className='center'>
            <span className='ebox mx-1' style={(onWord > 3) ? getColor(words3, 0) : { 'color': 'black' }}>{(emp > 0) ? word3[0] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 3) ? getColor(words3, 1) : { 'color': 'black' }}>{(emp > 1) ? word3[1] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 3) ? getColor(words3, 2) : { 'color': 'black' }}>{(emp > 2) ? word3[2] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 3) ? getColor(words3, 3) : { 'color': 'black' }}>{(emp > 3) ? word3[3] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 3) ? getColor(words3, 4) : { 'color': 'black' }}>{(emp > 4) ? word3[4] : ''}</span>
          </div>
          <br />
          <div className='center'>
            <span className='ebox mx-1' style={(onWord > 4) ? getColor(words4, 0) : { 'color': 'black' }}>{(emp > 0) ? word4[0] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 4) ? getColor(words4, 1) : { 'color': 'black' }}>{(emp > 1) ? word4[1] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 4) ? getColor(words4, 2) : { 'color': 'black' }}>{(emp > 2) ? word4[2] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 4) ? getColor(words4, 3) : { 'color': 'black' }}>{(emp > 3) ? word4[3] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 4) ? getColor(words4, 4) : { 'color': 'black' }}>{(emp > 4) ? word4[4] : ''}</span>
          </div>
          <br />
          <div className='center'>
            <span className='ebox mx-1' style={(onWord > 5) ? getColor(words5, 0) : { 'color': 'black' }}>{(emp > 0) ? word5[0] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 5) ? getColor(words5, 1) : { 'color': 'black' }}>{(emp > 1) ? word5[1] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 5) ? getColor(words5, 2) : { 'color': 'black' }}>{(emp > 2) ? word5[2] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 5) ? getColor(words5, 3) : { 'color': 'black' }}>{(emp > 3) ? word5[3] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 5) ? getColor(words5, 4) : { 'color': 'black' }}>{(emp > 4) ? word5[4] : ''}</span>
          </div>
          <br />
          <div className='center'>
            <span className='ebox mx-1' style={(onWord > 6) ? getColor(words6, 0) : { 'color': 'black' }}>{(emp > 0) ? word6[0] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 6) ? getColor(words6, 1) : { 'color': 'black' }}>{(emp > 1) ? word6[1] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 6) ? getColor(words6, 2) : { 'color': 'black' }}>{(emp > 2) ? word6[2] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 6) ? getColor(words6, 3) : { 'color': 'black' }}>{(emp > 3) ? word6[3] : ''}</span>
            <span className='ebox mx-1' style={(onWord > 6) ? getColor(words6, 4) : { 'color': 'black' }}>{(emp > 4) ? word6[4] : ''}</span>
          </div>
          <br />
          <br />
          <h1 className='box wordleb mx-1' onClick={() => { fill1('Q') }}>Q</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('W') }}>W</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('E') }}>E</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('R') }}>R</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('T') }}>T</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('Y') }}>Y</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('U') }}>U</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('I') }}>I</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('O') }}>O</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('P') }}>P</h1>
          <br className='keyspace' />
          <h1 className='box wordleb mx-1' onClick={() => { fill1('A') }}>A</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('S') }}>S</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('D') }}>D</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('F') }}>F</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('G') }}>G</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('H') }}>H</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('J') }}>J</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('K') }}>K</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('L') }}>L</h1>
          <br className='keyspace' />
          <h1 className='box wordleb mx-1' onClick={() => { Enter() }}>Enter</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('Z') }}>Z</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('X') }}>X</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('C') }}>C</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('V') }}>V</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('B') }}>B</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('N') }}>N</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('M') }}>M</h1>
          <h1 className='box wordleb mx-1' onClick={() => { backs() }}><i className="fas fa-backspace"></i></h1>
        </div>
      </div>
      <button type="button" className="btn btn-primary ndisplay" data-bs-toggle="modal" ref={cguess} data-bs-target="#Modal2">
      </button>
      <div className="modal fade textB" id="Modal2" tabIndex="-1" aria-labelledby="Modal2Label" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="Modal2Label">{ModalT}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {ModalC}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" onClick={()=>{refreshPage()}}>Play Again</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wordle