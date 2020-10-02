import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import './styles.scss';

import Logo from './../../assets/logo.png';
import Button from '../forms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSearch,
  faBlog,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { slide as Menu } from 'react-burger-menu';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
});

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
              <FontAwesomeIcon icon={faHome} />
              <Link to='/'>Home</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faSearch} />
              <Link to='/search'>Search</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faBlog} />
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
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
