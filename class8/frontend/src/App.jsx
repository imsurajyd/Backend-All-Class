import{BrowserRouter, Route, Routes,} from 'react-router-dom'
import Feed from './pages/Feed'
import Form from './pages/Form'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form />} />
      <Route path='/feed' element={<Feed />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
