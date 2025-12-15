
import {BrowserRouter,Route,Routes} from "react-router-dom"
import TodoContainer from './TodoContainer'
import GetTodoByIdContainer from './GetTodoByIdContainer'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/create' element={<TodoContainer/>} />
          <Route path='/getTodoById' element={<GetTodoByIdContainer/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
