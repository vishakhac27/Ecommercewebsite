



import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Home } from './Components/Home'
import Order from './Components/Order'

function App  ()  {
  return (
    <>
    
   <div>

   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
   </div>

    <Router>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="order" element={ <Order/> } />
              
             
            </Routes>
        </Router>
    </>
  )
}
export default App;

