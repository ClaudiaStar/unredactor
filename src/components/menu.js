import React, { useState } from "react"
import menuStyles from "./menu.module.css"
import { motion } from "framer-motion"
import { IoMdArrowDropdown } from "react-icons/io"
import { IconContext } from "react-icons"

const Menu = props => {
  const [industriesClicked, setIndustriesClicked] = useState(false)
  const [partnersClicked, setPartnersClicked] = useState(false)

  const industriesClickedHandler = () => {
    setIndustriesClicked(!industriesClicked)
  }

  const partnersClickedHandler = () => {
    setPartnersClicked(!partnersClicked)
  }

  const firstMenuItems = [
    { name: "Home", href: "https://www.manceps.ai", delay: 0.05 },
    { name: "About", href: "https://www.manceps.ai/about", delay: 0.1 },
  ]

  const thirdMenuItems = [
    {
      name: "Case Studies",
      href: "https://www.manceps.com/articles/case-study",
      delay: 0.35,
    },
    { name: "Careers", href: "https://www.manceps.com/careers", delay: 0.4 },
    { name: "Blog", href: "https://www.manceps.com/blog", delay: 0.45 },
    {
      name: "Contact Us",
      href: "https://www.manceps.com/consultation",
      delay: 0.5,
    },
    {
      name: "Free Download: 50 AI Secrets from the Fortune 50",
      href: "https://www.manceps.com/resources/50-ai-secrets-ebook",
      delay: 0.55,
    },
  ]

  const firstMenuList = firstMenuItems.map((firstMenuItem, index) => {
    return (
      <motion.li
        key={index}
        initial={{ x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: firstMenuItem.delay, duration: 0.2 }}
      >
        <motion.a href={firstMenuItem.href} whileHover={{ color: "#31a2dc" }}>
          {firstMenuItem.name}
        </motion.a>
      </motion.li>
    )
  })

  const thirdMenuList = thirdMenuItems.map((thirdMenuItem, index) => {
    return (
      <motion.li
        key={index}
        initial={{ x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: thirdMenuItem.delay, duration: 0.2 }}
      >
        <motion.a href={thirdMenuItem.href} whileHover={{ color: "#31a2dc" }}>
          {thirdMenuItem.name}
        </motion.a>
      </motion.li>
    )
  })

  const industriesMenuItems = [
    {
      name: "Finance and Banking",
      href: "https://www.manceps.com/finance-and-banking",
      delay: 0.05,
    },
    {
      name: "Healthcare",
      href: "https://www.manceps.com/healthcare",
      delay: 0.1,
    },
    {
      name: "Manufacturing",
      href: "https://www.manceps.com/manufacturing",
      delay: 0.15,
    },
    {
      name: "Product Design And Development",
      href: "https://www.manceps.com/product-design-and-development",
      delay: 0.2,
    },
    { name: "Retail", href: "https://www.manceps.com/retail", delay: 0.25 },
  ]

  const industriesMenuList = industriesMenuItems.map(
    (industriesMenuItem, index) => {
      return (
        <motion.a
          href={industriesMenuItem.href}
          key={index}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: industriesMenuItem.delay, duration: 0.2 }}
        >
          {industriesMenuItem.name}
        </motion.a>
      )
    }
  )

  const partnersMenuItems = [
    {
      name: "Google",
      href: "https://www.manceps.com/partners/google",
      delay: 0.05,
    },
    {
      name: "Canonical",
      href: "https://www.manceps.com/partners/canonical",
      delay: 0.1,
    },
  ]

  const partnersMenuList = partnersMenuItems.map((partnersMenuItem, index) => {
    return (
      <motion.a
        href={partnersMenuItem.href}
        key={index}
        style={{ position: "relative", zIndex: "5000" }}
        initial={{ x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: partnersMenuItem.delay, duration: 0.2 }}
      >
        {partnersMenuItem.name}
      </motion.a>
    )
  })

  return (
    <motion.div
      className={menuStyles.Container}
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={menuStyles.Exit}
        onClick={props.clicked}
        onKeyDown={props.clicked}
        role="button"
        tabIndex={0}
      >
        x
      </div>
      <ul>
        {firstMenuList}
        <motion.li
          initial={{ x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.2 }}
          className={menuStyles.IndustriesLabel}
          onClick={industriesClickedHandler}
        >
          <p>
            Industries
            <IconContext.Provider
              value={{ style: { verticalAlign: "middle" } }}
            >
              <IoMdArrowDropdown />
            </IconContext.Provider>
          </p>
          {industriesClicked ? (
            <div className={menuStyles.IndustriesMenuContainer}>
              {industriesMenuList}
            </div>
          ) : null}
        </motion.li>

        <motion.li
          initial={{ x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.2,
          }}
          className={menuStyles.PartnersLabel}
          onClick={partnersClickedHandler}
        >
          <p>
            Partners
            <IconContext.Provider
              value={{ style: { verticalAlign: "middle" } }}
            >
              <IoMdArrowDropdown />
            </IconContext.Provider>
          </p>
          {partnersClicked ? (
            <div className={menuStyles.PartnersMenuContainer}>
              {partnersMenuList}
            </div>
          ) : null}
        </motion.li>
        {thirdMenuList}
      </ul>
    </motion.div>
  )
}

export default Menu
