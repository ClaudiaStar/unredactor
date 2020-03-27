import React from "react"
import { motion } from "framer-motion"
import heroStyles from "./heroStyles.module.css"

const EmailCapture = props => {
  return (
    <motion.div
      className={heroStyles.Unredactor}
      initial={{ x: 400 }}
      animate={{ x: 0 }}
    >
      <h5>Enter info below to reveal results:</h5>
      <input type="text" placeholder="First name" />
      <br />
      <input type="text" placeholder="Last name" />
      <br />
      <input type="email" placeholder="Email" />
      <br />
      <button onClick={props.clicked}>SEE RESULTS</button>
    </motion.div>
  )
}

export default EmailCapture
