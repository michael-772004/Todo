
import {BrowserRouter,Route,Routes} from "react-router-dom"
import TodoContainer from './container/CreateTodoContainer'
import GetTodoByIdContainer from './container/GetTodoByIdContainer'
import GetAllTodoContainer from "./container/GetAllTodoContainer"

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/create' element={<TodoContainer/>} />
          <Route path='/getTodoById' element={<GetTodoByIdContainer/>} />
          <Route path="/getAllTodo" element={<GetAllTodoContainer/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
