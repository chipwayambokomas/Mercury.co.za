import { Component } from 'react'
import './Navbar.css'
import { MenuData } from './MenuData'
import { Link } from 'react-router-dom'

class Navbar extends Component {

  state = {clicked: false}

  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }

  render() {

    return (



      <nav className='NavbarItems'>
        <ul>
          <li>
            <Link to='/'>
            <img src='https://www.mercury.co.zm/wp-content/uploads/2018/10/logo-300.png' alt='mercury logo' width={150} height={46} className="logo" />
            </Link>
          </li>
        </ul>
                
        <div className='menu-icons' onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                
                  {item.title}
                </Link>
              </li>
            )
          })}

          <li>
            <Link to='/book-a-collection'>
          <button>Book A Collection</button>
          </Link>
          </li>
        </ul>
      </nav>



    )
  }

}

export default Navbar
