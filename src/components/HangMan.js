import React from 'react'

const HangMan = () => {
  const fill1=()=>{
    console.log('Btn clicked')
  }
  return (
    <div className='topm'>
      <div className="card center" style={{ "width": "60rem", 'color': 'black' }}>
        <div className="card-body">
          <h2 className="card-title tittle" style={{ 'color': 'purple' }}>HangMan</h2>
          <hr style={{ 'height': '5px', 'backgroundColor': 'black', 'color': 'black' }} />
          <div className='d-inline'>
            <div className='mrcontent mx-5'>

            </div>
          <div className='mlcontent'>
          <div className="mb-4 mt-4">________ _______  _______  _______  _______ </div>
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
          </div>
          <span className='mlcontent'>
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
          </span>
          <span className='mlcontent'>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('Z') }}>Z</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('X') }}>X</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('C') }}>C</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('V') }}>V</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('B') }}>B</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('N') }}>N</h1>
          <h1 className='box wordleb mx-1' onClick={() => { fill1('M') }}>M</h1>
          </span>
          </div>
          </div>
        </div>
      </div>
  )
}

export default HangMan