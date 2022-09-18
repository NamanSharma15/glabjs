import React,{useState,useEffect} from 'react'
const JumbleWords = () => {
  const host = "http://localhost:5000"
  const [senc, setSenc] = useState("")
  const [cheakg,setCh] = useState("")
  const [guess1, setGuess1] = useState('')
  const [guess2, setGuess2] = useState('')
  const [guess3, setGuess3] = useState('')
  const [guess4, setGuess4] = useState('')
  const [guess5, setGuess5] = useState('')
  const [plist, setPlist] = useState("")
  const [marksc, setMarksc] = useState(null)
  const [marks, setMarks] = useState("")
  const [final, setFinal] = useState("")
  // Get all Notes
function refreshPage() {
  window.location.reload(false);
}
const onChange1 = (e)=>{
    setGuess1(e.target.value)
}
const onChange2 = (e)=>{
  setGuess2(e.target.value)
}
const onChange3 = (e)=>{
  setGuess3(e.target.value)
}
const onChange4 = (e)=>{
  setGuess4(e.target.value)
}
const onChange5 = (e)=>{
  setGuess5(e.target.value)
}
const getNotes = async () => {
  // API Call 
  const response = await fetch(`${host}/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  const shuffleMeSoftly = function(str, breaker = ' ') {
    var a = str.split(" "),
        n = a.length;
  
    for (var i = n - 1; i > 0; i--) {
      if (a[i] !== breaker) {
        var j = Math.floor(Math.random() * (i + 1));
        if (a[j] !== breaker) {
          var tmp = a[i];
          a[i] = a[j];
          a[j] = tmp;
        }
      }
    }
    return a.join("/");}
  const json = await response.json()
  const L1=[] 
  json.forEach(element => {
    L1.push(element.Sentence)
  });
  let G = []
  let S = []
  for(let i=0;i<5;i++){
    let index = Math.floor(Math.random()*L1.length)
    G.push(L1[index])
    let fsenc =shuffleMeSoftly(L1[index])
    S.push(fsenc)
  }
  setCh(G)
  setSenc(S)
}
  useEffect(() => {
    getNotes()
  }, [])
function onSubmit(e){
  e.preventDefault()
  let W1 = []
  for(let i=0;i<5;i++){
    W1.push(guess1)
    W1.push(guess2)
    W1.push(guess3)
    W1.push(guess4)
    W1.push(guess5)
  }
  let mark = []
  let L = []
  let fla = []
  for(let k=0;k<5;k++){
    if(W1[k] === cheakg[k]){
      L.push('Correct Answer')
      mark.push("1")
      fla.push("")
    }
    else{
      L.push('Incorrect Answer')
      fla.push(`Correct Sentence is: ${cheakg[k]}`)
    }
  }
setPlist(L)
setMarks(mark)
setMarksc("True")
setFinal(fla)
}
  return (
    <>
    <div className='topm'>
    <div className="card center" style={{"width": "36rem",'color':'black'}}>
  <div className="card-body">
    <h2 className="card-title tittle" style={{'color':'red'}}>Jumble Words</h2>
    <div className="card-text">
        {(marksc==="True")?<div className='lefttext'><br/>Your Score is {marks.length}/5</div>:""}
        <br/>
        <form onSubmit={onSubmit}>
        {senc[0]}<br/>
        <input className="form-control form-control-lg" type="text" onChange={onChange1} placeholder="" aria-label=".form-control-lg example"></input>
        {plist[0]}<br/>{(final[0]!=="")?final[0]:""}
        <br/>
        {senc[1]}<br/>
        <input className="form-control form-control-lg" type="text" onChange={onChange2} placeholder="" aria-label=".form-control-lg example"></input>
        {plist[1]}<br/>{(final[1]!=="")?final[1]:""}
        <br/>
        {senc[2]}<br/>
        <input className="form-control form-control-lg" type="text" onChange={onChange3} placeholder="" aria-label=".form-control-lg example"></input>
        {plist[2]}<br/>{(final[2]!=="")?final[2]:""}
        <br/>
        {senc[3]}<br/>
        <input className="form-control form-control-lg" type="text" onChange={onChange4} placeholder="" aria-label=".form-control-lg example"></input>
        {plist[3]}<br/>{(final[3]!=="")?final[3]:""}
        <br/>
        {senc[4]}<br/>
        <input className="form-control form-control-lg" type="text" onChange={onChange5} placeholder="" aria-label=".form-control-lg example"></input>
        {plist[4]}<br/>{(final[4]!=="")?final[4]:""}
        <br/>
        <button type={(marksc==="True")?"button":"submit"} className="btn btn-success" onClick={(marksc==="True")?refreshPage:()=>{}}>{(marksc==="True")?"Play Again":"Submit"}</button>
        </form>
        </div>
  </div>
  </div>
    </div>
    </>
  )

}
export default JumbleWords