
import React, { Component, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AppsIcon from '@material-ui/icons/Apps';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { stack as Menu } from 'react-burger-menu'
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import { ThemeProvider } from 'styled-components';
import { futureTheme, retroTheme } from './style/theme';
import { GlobalStyles } from './style/global';
import logo from './logo.svg';
import Toggle from './components/Toggle';
import './App.css';
import './index.css';
import { Link } from '@material-ui/core';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
        theme: localStorage.getItem('theme'),
        menuOpen: false
      }
  }

  componentDidMount(){
    let thm = localStorage.getItem('theme');
    if(!thm){
      this.setState({ theme: 'light' })
    }
    console.log(thm)
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  toggleTheme = () => {
    const { theme } = this.state;
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      this.setState({ theme: 'dark' })
    // otherwise, it should be light
    } else {
      localStorage.setItem('theme', 'light');
      this.setState({ theme: 'light' })
    }
  }

  render() {
    const { theme, menuOpen } = this.state;

    return (
      <ThemeProvider theme={theme === 'light' ? futureTheme : retroTheme}>
        <>
          <GlobalStyles />
          <div>
            <Navbar className="navbar-tes" expand="lg">
              <Navbar.Brand href="#home" className="padding-nav">BRS</Navbar.Brand>
              <Navbar.Collapse  className="justify-content-end mr-4" id="basic-navbar-nav">
                <Nav>
                  <Nav.Link href="#home">Inbox</Nav.Link>
                  <Nav.Link href="#link">Draft</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              <div className="navbar-icon-right">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="basic-navbar-nav" 
                  aria-haspopup="true"
                  color="inherit"
                  onClick={() => this.toggleMenu()}
                >
                  <AppsIcon fontSize="large"/>
                </IconButton>
              </div>
            </Navbar>
                <Menu
                  right
                  isOpen={ menuOpen }
                  customBurgerIcon={ false }
                  onStateChange={(state) => this.handleStateChange(state)}>
                  {/* <table border="0">
                    <tbody>
                      <tr>
                        <td className="text-center p-3"><InboxIcon /></td>
                        <td className="text-center p-3">Inbox</td>
                      </tr>
                    </tbody>
                  </table>
                  <Divider /> */}
                  <div className="row">
                    <a href="#" className="link-sidemenu">
                      <div className="col-12 row">
                        <div className="col-4"><InboxIcon /></div>
                        <div className="col-8">Inbox</div>
                      </div>
                    </a>
                    <a href="#" className="link-sidemenu">
                      <div className="col-12 row mt-4">
                        <div className="col-4"><DraftsIcon /></div>
                        <div className="col-8">Draft</div>
                      </div>
                    </a>
                  </div>
                </Menu>
            <div className="toogle-theme-space">
              <div className="toogle-title">{theme === 'light' ? 'Light' : 'Retro'}</div> <Toggle theme={theme} toggleTheme={() => this.toggleTheme()} />
            </div>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                {/* <button onClick={() => this.toggleTheme()}>Toggle theme</button>
                <Toggle theme={theme} toggleTheme={() => this.toggleTheme()} /> */}
              </header>
            </div>
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
