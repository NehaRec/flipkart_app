import React from "react";
import { HeaderStyle } from "./Header.style";
import SearchIcon from "@mui/icons-material/Search";
import { FlipkartLogoWhite } from "../../assets/png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Header = () => {
  return (
    <div style={HeaderStyle.container}>
      <div style={HeaderStyle.child1}>
        <img
          style={HeaderStyle.logo}
          // src="../../../assets/svg/flipimg1.svg"
          src={FlipkartLogoWhite}
          alt="flipkart logo"
        />

        <div style={HeaderStyle.childSec}>
          <a style={HeaderStyle.anc1} href="/plus">
            Explore
            <span style={HeaderStyle.anc2}>Plus</span>
            <img
              style={HeaderStyle.logoSec}
              width="10"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt=""
            />
          </a>
        </div>
      </div>

      <div style={HeaderStyle.child2}>
        <input
          style={HeaderStyle.child2First}
          type="text"
          placeholder="Search for Products, Brand and More"
        />
        <div style={HeaderStyle.child2Sec}>
          <SearchIcon />
        </div>
      </div>
      <div style={HeaderStyle.right}>
        <div style={HeaderStyle.rightFirst}>
          <a style={HeaderStyle.login}>Login</a>
        </div>
        <div style={HeaderStyle.rightSec}>Become a Seller</div>
        <div style={HeaderStyle.rightThird}>
          <select style={HeaderStyle.rightSel}>
            <option value="">More</option>
            <option value="">Noti</option>
            <option value="">24*7</option>
            <option value="">Adve</option>
            <option value="">Down</option>
          </select>
        </div>
        <div style={HeaderStyle.rightFourth}>
          <div style={HeaderStyle.cart}>
            <ShoppingCartIcon />
            Cart
          </div>
        </div>
      </div>
    </div>
  );
};
