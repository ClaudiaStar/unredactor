import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./headerStyles.module.css"

import Logo from "../images/manceps-triangle.png"

const Header = () => {
  const handleMenuClick = () => {
    return (
      <div className={headerStyles.Menu}>
        <h1>This is the menu.</h1>
      </div>
    )
  }

  return (
    <header>
      <a href="https://www.manceps.ai/">
        <img src={Logo} alt="Manceps Logo" className={headerStyles.Logo} />
      </a>
      <div
        className={headerStyles.Burger}
        id="burger"
        onClick={handleMenuClick}
      >
        <div className={headerStyles.Lines}>
          <div className={headerStyles.Line}></div>
          <div className={headerStyles.Line}></div>
          <div className={headerStyles.Line}></div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
