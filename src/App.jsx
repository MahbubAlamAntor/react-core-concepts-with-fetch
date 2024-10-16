import './App.css'
import Counter from './Counter'
import Players from './Players'
import Users from './Users'
import Friends from './Friends'

function App() {
  function btnHandle (){
    alert('hi i am btn 1')
  }

  const btnHandle2 = () =>{
    alert('Hi I am btn 2')
  }

  const btnHandle4 = (num) =>{
    alert (num + 5)
  }
  return (
    <>
      <h4>Vite + React</h4>

      <Friends></Friends>

      <Users></Users>

      <Players></Players>

      <Counter></Counter>

      <button onClick={btnHandle}>Btn clicked 1</button>
      <button onClick={btnHandle2}>Btn Clicked 2</button>
      <button onClick={() => alert('Hi I am btn 3')}>Btn Click 3</button>
      <button onClick={() => btnHandle4(7)}>Btn Clicked 4</button>
    </>
  )
}

export default App
