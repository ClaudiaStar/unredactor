import React, { useState } from "react"
import Header from "./header"
import CssHeroImage from "./cssHeroImage"
import heroStyles from "./heroStyles.module.css"
import { FaFacebook } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import { TiSocialLinkedinCircular } from "react-icons/ti"
import { FaPinterest } from "react-icons/fa"
import { IconContext } from "react-icons"
import { motion } from "framer-motion"

const Hero = () => {
  const [unredactClicked, setUnredactClicked] = useState(false)
  const [revealClicked, setRevealClicked] = useState(false)
  const [homeClicked, setHomeClicked] = useState(true)

  const unredactButtonClickHandler = () => {
    setUnredactClicked(true)
    setHomeClicked(false)
  }

  const emailButtonClickHandler = () => {
    setUnredactClicked(false)
    setRevealClicked(true)
  }

  const againButtonClickHandler = () => {
    setRevealClicked(false)
    setHomeClicked(true)
  }

  let unredactor = (
    <motion.div
      className={heroStyles.Unredactor}
      initial={{ y: 400 }}
      animate={{ y: 0 }}
    >
      <div>
        <h1>
          <strong>WHAT WOULD YOU LIKE TO UNREDACT?</strong>
        </h1>
        <h5>
          Type in your redacted paragraph and use the word "unk" for hidden
          words.
        </h5>
        <input type="text" />
        <br />
        <button onClick={unredactButtonClickHandler}>UNREDACT</button>
        <p style={{ paddingTop: "8px" }}>Here's an example:</p>
        <p style={{ paddingTop: "15px" }}>
          Beyonce is an <strong>unk unk</strong> and actress.
        </p>
        <p>
          Output: Beyonce is an
          <strong> American Singer</strong> and actress.
        </p>
      </div>
    </motion.div>
  )

  let email = (
    <motion.div
      className={heroStyles.Unredactor}
      initial={{ x: 400 }}
      animate={{ x: 0 }}
    >
      <h5>Enter your email address below to reveal results:</h5>
      <input type="text" />
      <br />
      <button onClick={emailButtonClickHandler}>SEE RESULTS</button>
    </motion.div>
  )

  let reveal = (
    <motion.div
      className={heroStyles.Unredactor}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <p className={heroStyles.InputText}>
        Your input: Beyonce is an <strong>unk unk</strong> and actress.
      </p>
      <h5 className={heroStyles.UnredactedText}>
        Output: Beyonce is an <strong>American Singer</strong> and actress.
      </h5>
      <br />
      <h3 className={heroStyles.ShareLabel}>Share results?</h3>
      <div className={heroStyles.ShareCheckbox}>
        <input type="checkbox" id="share-results" value="share" name="" />
        <label htmlFor="share-results"></label>
      </div>
      <br />
      <br />
      <button onClick={againButtonClickHandler}>DO IT AGAIN</button>
    </motion.div>
  )

  return (
    <div className={heroStyles.HeroContainer}>
      <Header />
      <CssHeroImage />
      <div className={heroStyles.HeroContent}>
        <div className={heroStyles.SocialMedia}>
          <IconContext.Provider
            value={{
              color: "#4267B2",
              className: "facebook",
              size: "40px",
            }}
          >
            <FaFacebook />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "#1DA1F2",
              className: "twitter",
              size: "43px",
            }}
          >
            <AiFillTwitterCircle />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "#0077B5",
              className: "linkedin",
              size: "53px",
            }}
          >
            <TiSocialLinkedinCircular />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "#E60023",
              className: "pinterest",
              size: "40px",
            }}
          >
            <FaPinterest />
          </IconContext.Provider>
        </div>
        {homeClicked ? unredactor : null}
        {unredactClicked ? email : null}
        {revealClicked ? reveal : null}
      </div>
    </div>
  )
}

export default Hero
