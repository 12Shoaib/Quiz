import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/quiz' element={<Quiz />} />
      </Routes>
       
    </div>
  )
}

export default App

