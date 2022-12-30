import { Component } from 'react'
import './Navbar1.css'
import { MenuData1, MenuData12 } from './MenuData1'
import { Link } from 'react-router-dom'

class Navbar1 extends Component {
  render() {
    return (



      <nav className='NavbarItems1'>
        
        
        <ul className='nav-menu'>
          {MenuData1.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
        
        
        <ul className='nav-menu'>
          {MenuData12.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                </Link>
              </li>
            )
          })}
        </ul>
        
      </nav>



    )
  }

}

export default Navbar1
