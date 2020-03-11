import React from "react"
import Header from "./header"
import heroStyles from "./heroStyles.module.css"
import { FaFacebook } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import { TiSocialLinkedinCircular } from "react-icons/ti"
import { FaPinterest } from "react-icons/fa"
import { IconContext } from "react-icons"

const Hero = () => (
  <div className={heroStyles.HeroContainer}>
    <Header />
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
      <div className={heroStyles.Unredactor}>
        <h1>
          <strong>WHAT WOULD YOU LIKE TO UNREDACT?</strong>
        </h1>
        <h5>
          Type in your redacted paragraph and use the word "unk" for hidden
          words.
        </h5>
        <input type="text" />
        <br />
        <button>UNREDACT</button>
        <p style={{ paddingTop: "8px" }}>Here's an example:</p>
        <p style={{ paddingTop: "15px" }}>
          Beyonce is an <span style={{ fontWeight: "900" }}>unk unk</span> and
          actress.
        </p>
        <p>
          Output: beyonce is an
          <span style={{ fontWeight: "900" }}>american singer</span> and
          actress.
        </p>
      </div>
    </div>
  </div>
)

export default Hero
