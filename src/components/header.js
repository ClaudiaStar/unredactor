import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./headerStyles.module.css"

import Logo from "../images/manceps-triangle.png"

const Header = () => (
  <header>
    <a href="https://www.manceps.ai/">
      <img src={Logo} alt="Manceps Logo" className={headerStyles.Logo} />
    </a>
    <div className={headerStyles.Burger} id="burger">
      <div className={headerStyles.Lines}>
        <div className={headerStyles.Line}></div>
        <div className={headerStyles.Line}></div>
        <div className={headerStyles.Line}></div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
