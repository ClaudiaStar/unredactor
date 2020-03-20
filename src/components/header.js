import PropTypes from "prop-types"
import React, { useState } from "react"
import headerStyles from "./headerStyles.module.css"

import Menu from "./menu"
import Logo from "../images/manceps-triangle.png"

const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false)

  const handleMenuClick = () => {
    if (menuClicked) {
      setMenuClicked(false)
    } else {
      setMenuClicked(true)
    }
  }

  return (
    <React.Fragment>
      {menuClicked ? <Menu /> : null}
      <header>
        <a href="https://www.manceps.ai/">
          <img src={Logo} alt="Manceps Logo" className={headerStyles.Logo} />
        </a>
        <div
          role="button"
          tabIndex="0"
          className={headerStyles.Burger}
          id="burger"
          onClick={handleMenuClick}
          onKeyPress={handleMenuClick}
        >
          <div className={headerStyles.Lines}>
            <div className={headerStyles.Line}></div>
            <div className={headerStyles.Line}></div>
            <div className={headerStyles.Line}></div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
