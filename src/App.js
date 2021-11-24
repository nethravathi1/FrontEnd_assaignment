import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginSection from './components/LoginSection'
import HomeSection from './components/HomeSection'
import NotfoundSection from './components/NotfoundSection'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginSection} />
      <ProtectedRoute exact path="/" component={HomeSection} />
      <Route component={NotfoundSection} />
    </Switch>
  </BrowserRouter>
)

export default App
