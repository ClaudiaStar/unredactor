import React, { useState } from "react"
import Header from "./header"
import Reveal from "./reveal"
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
  const [homeClicked, setHomeClicked] = useState(true)

  const unredactButtonClickHandler = () => {
    setUnredactClicked(true)
    setHomeClicked(false)
  }

  const againButtonClickHandler = () => {
    setUnredactClicked(false)
    setHomeClicked(true)
  }

  let unredactor = (
    <motion.div
      className={heroStyles.Unredactor}
      initial={{ y: 400, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
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

  return (
    <div className={heroStyles.HeroContainer}>
      <Header />
      <CssHeroImage />
      <div className={heroStyles.HeroContent}>
        <div className={heroStyles.SocialMedia}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.manceps.com%2Fapps%2Funredactor&title="
          >
            <IconContext.Provider
              value={{
                color: "#4267B2",
                className: heroStyles.SocialIcon,
                size: "40px",
              }}
            >
              <FaFacebook />
            </IconContext.Provider>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/intent/tweet?&url=https://www.manceps.com/apps/unredactor&text="
          >
            <IconContext.Provider
              value={{
                color: "#1DA1F2",
                className: heroStyles.SocialIcon,
                size: "43px",
              }}
            >
              <AiFillTwitterCircle />
            </IconContext.Provider>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/shareArticle/?mini=true&url=https://www.manceps.com/apps/unredactor&title=&source=Ucraft"
          >
            <IconContext.Provider
              value={{
                color: "#0077B5",
                className: heroStyles.SocialIcon,
                size: "53px",
              }}
            >
              <TiSocialLinkedinCircular />
            </IconContext.Provider>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.pinterest.com/pin/create/button/?url=https://www.manceps.com/apps/unredactor&description="
          >
            <IconContext.Provider
              value={{
                color: "#E60023",
                className: heroStyles.SocialIcon,
                size: "40px",
              }}
            >
              <FaPinterest />
            </IconContext.Provider>
          </a>
        </div>
        {homeClicked ? unredactor : null}
        {unredactClicked ? (
          <Reveal againButtonClicked={againButtonClickHandler} />
        ) : null}
      </div>
    </div>
  )
}

export default Hero
