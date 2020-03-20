import React from "react"
import menuStyles from "./menu.module.css"
import { motion } from "framer-motion"

const Menu = props => {
  const menuItems = [
    { name: "Home", href: "https://www.manceps.ai", delay: 0.05 },
    { name: "About", href: "https://www.manceps.ai/about", delay: 0.1 },
    { name: "Partners", href: "", delay: 0.15 },
    {
      name: "Case Studies",
      href: "https://www.manceps.com/articles/case-study",
      delay: 0.2,
    },
    { name: "Careers", href: "https://www.manceps.com/careers", delay: 0.25 },
    { name: "Blog", href: "https://www.manceps.com/blog", delay: 0.3 },
    {
      name: "Contact Us",
      href: "https://www.manceps.com/consultation",
      delay: 0.35,
    },
    {
      name: "Free Download: 50 AI Secrets from the Fortune 50",
      href: "https://www.manceps.com/resources/50-ai-secrets-ebook",
      delay: 0.4,
    },
  ]

  const menuList = menuItems.map((menuItem, index) => {
    return (
      <motion.li
        key={index}
        initial={{ x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: menuItem.delay, duration: 0.2 }}
      >
        <motion.a href={menuItem.href} whileHover={{ color: "#31a2dc" }}>
          {menuItem.name}
        </motion.a>
      </motion.li>
    )
  })

  return (
    <div className={menuStyles.Container}>
      <div className={menuStyles.Exit} onClick={props.clicked}>
        x
      </div>
      <motion.ul>{menuList}</motion.ul>
    </div>
  )
}

export default Menu
