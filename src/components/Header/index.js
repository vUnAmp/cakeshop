import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import './styles.scss';

import Logo from './../../assets/logo.png';
import Button from '../forms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBorderNone } from '@fortawesome/free-solid-svg-icons';
import { slide as Menu } from 'react-burger-menu';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
});
const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '20px',
    display: 'none',
  },

  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: 0,
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    top: 0,
  },
};
const Header = (props) => {
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };
  const showSettings = () => {};
  const closeModal = () => {
    document.getElementById('menubar-toggle').checked = false;
  };

  return (
    <div className='header'>
      <div className='wrap'>
        <div className='logo'>
          {/* <div className='menubar-modal-box' id='menubarLeft'>
            <input type='checkbox' name='' id='menubar-toggle' />
            <label htmlFor='menubar-toggle' className='menubar-icon'>
              <FontAwesomeIcon icon={faBars} />
            </label>
            <div className='menubar-header'>
              <label htmlFor='menubar-toggle' className='menubar-close'>
                {' '}
                &#10005;
              </label>
            </div>
          </div> */}
          <Link to='/'>
            <img src={Logo} alt='Bakery OnlineShop' />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/search'>Search</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/registration'>Create Account</Link>
            </li>
          </ul>
        </nav>

        <div className='callToActions'>
          <div className='hotline'>
            <p className='hotline_number'>0174-325-648-542</p>
            <p className='hotline_desc'>Just call us</p>
          </div>

          <div className='wehave'>
            <Link>
              {' '}
              <Button>
                Today We have
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </Button>{' '}
            </Link>
          </div>

          {/* <li>
              <Link>Your Cart ({totalNumCartItems})</Link>
            </li> */}

          {/* {currentUser && [
              <li>
                <Link to='/dashboard'>My Account</Link>
              </li>,
              <li>
                <span onClick={() => signOut()}>LogOut</span>
              </li>,
            ]}

            {!currentUser && [
              <li>
                <Link to='/registration'>Register</Link>
              </li>,
              <li>
                <Link to='/login'>Login</Link>
              </li>,
            ]} */}
        </div>
      </div>
      <Menu>
        <nav className='burger_menu'>
          <div className='wrap_logo'>
            <h3>Bếp nhà ỈN</h3>
            <Link to='/'>
              <img src={Logo} alt='Bakery OnlineShop' />
            </Link>
          </div>
          <div className='wrap_user'>
            <Button className='login'>
              <Link to='/login'>Login</Link>
            </Button>
            <Button className='registration'>
              <Link to='/registration'>Create Account</Link>
            </Button>
          </div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/search'>Search</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </Menu>
    </div>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
