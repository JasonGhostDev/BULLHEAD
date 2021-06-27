import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { useWallet } from 'use-wallet';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import logo from '../images/logo.png'
import ConectWallet from "./conectWallet";
import Wallet from "../assets/walletSmall.svg";
const Navbar = () =>  {
  const [sidebar, setSidebar] = useState(true);
  const [userAccount, setUserAccount] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { account, connect, reset, status } = useWallet();
  useEffect(() => {
    const localAccount = localStorage.getItem("account");
    const walletProvider = localStorage.getItem("walletProvider");
    if (!account && localAccount) {
      setUserAccount(localAccount);
      if (localAccount && (walletProvider === "metamask" || walletProvider === "injected")) {
        connect("injected");
        localStorage.setItem("walletProvider", "metamask");
      }
      if (localAccount && walletProvider === "walletconnect") {
        connect('walletconnect');
        localStorage.setItem("walletProvider", "walletconnect");
      }
    }
  }, []);
  const onChangeWallet = (data) => {
    if (data === 'metamask') {
      connect("injected");
      localStorage.setItem("walletProvider", "metamask");
      setModalShow(false);
    } else if (data === 'walletconnect') {
      connect("walletconnect");
      localStorage.setItem("walletProvider", "walletconnect");
      setModalShow(false);
    }
  }
  const formatAddress = (address) => {
    return address.slice(0, 6) + '...' + address.slice(-6)
  }
  const onDisconnectWallet = () => {
    reset();
    setUserAccount(null);
    localStorage.removeItem("account");
    localStorage.removeItem("walletProvider");
  }
  useEffect(() => {
    if (account) {
      setUserAccount(account);
      localStorage.setItem("account", account);
    }
  }, [account]);

 
  let width = window.innerWidth;
  return (
 
    <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <img className="logo-final" src={logo} onClick={showSidebar} />
          </Link>
          <div className="wallet-connect-box">
          {!userAccount ? (
              <Button
                variant="light"
                className="btn_white mx-md-3 h-100"
                onClick={() => setModalShow(true)}
              >
                Connect Wallet
              </Button>
            ) : (
              <Dropdown>
                <Dropdown.Toggle
                  variant=""
                  className="btn_white"
                  id="dropdown-basic"
                >
                  <div className="wallet-box">
                    <img alt="address" src={Wallet} className="mr-1" />
                    {formatAddress(userAccount)}
                  </div>
                  
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#" onClick={onDisconnectWallet}>
                    Disconnect
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
            </div>
            <ConectWallet
              show={modalShow}
              onHide={() => setModalShow(false)}
              onChangeWallet={onChangeWallet}
             
            />

        </div>
        
        <nav className={sidebar && width>400?'nav-menu active':'nav-menu' }>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              <img className="logo-final" src={logo}/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            
          </ul>
          
          
        </nav>
        </IconContext.Provider>
  );
}

export default Navbar;
