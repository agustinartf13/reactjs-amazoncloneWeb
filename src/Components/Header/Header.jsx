import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import  { useStateValue } from '../../utils/StateProvider'
import { Link } from "react-router-dom";

function Header() {
    const [{ basket }, dispatch] = useStateValue();

  //   const handleAuthenticaton = () => {
  //     if (user) {
  //       auth.signOut();
  //     }
  //   };

  return (
    <div className="header">
      {/* link logo */}
      <Link to='/'>
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      {/* endlink logo */}

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {/* link login */}
        <Link to="/login">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Agustina</span>
          <span className="header__optionLineTow">Sign In</span>
        </div>
        </Link>
        {/* endlink login */}

        {/* link orders */}
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTow">& Orders</span>
        </div>
        {/* endlink orders */}

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        {/* link checkout */}
        <Link to='/checkout'>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">{basket?.length}
          </span>
        </div>
        </Link>
        {/* endlink checkout */}

      </div>
    </div>
  );
}

export default Header;
