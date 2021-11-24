import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const HeaderSection = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token_stored')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <h1>Welcome User</h1>
          <button type="button" className="nav-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar"
              onClick={onClickLogout}
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <h1>Welcome User</h1>
          <button
            type="button"
            className="logout-desktop"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(HeaderSection)
