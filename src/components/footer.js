import React from "react"
import footerStyles from "./footer.module.css"
import MancepsMap from "./map"
import { FaFacebook } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import { TiSocialLinkedinCircular } from "react-icons/ti"
import { FaPinterest } from "react-icons/fa"
import { IconContext } from "react-icons"

const Footer = () => {
  return (
    <div className={footerStyles.Container}>
      <div className={footerStyles.ContactSection}>
        <h6>
          <strong>SEND US A MESSAGE</strong>
        </h6>
        <hr />
        <input placeholder="First Name" />
        <br />
        <input placeholder="Email" />
        <br />
        <textarea placeholder="Message"></textarea>
        <br />
        <button type="submit">GET IN TOUCH</button>
      </div>
      <div className={footerStyles.MapSection}>
        <h6>
          <strong>OUR HEADQUARTERS</strong>
        </h6>
        <hr />
        <div className={footerStyles.MapParagraph}>
          <h6>
            <strong>
              Headquartered in the heart of Portland, Oregon, our satellite
              offices span North America, Europe, the Middle East, and Africa.
            </strong>
          </h6>
          <h6>
            <strong>Our phone number is (503) 922-1164</strong>
          </h6>
        </div>
        <MancepsMap />
        <div className={footerStyles.SocialMedia}>
          <IconContext.Provider
            value={{
              color: "#ffffff",
              className: "facebook",
              size: "15px",
            }}
          >
            <FaFacebook />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "#ffffff",
              className: "twitter",
              size: "17px",
            }}
          >
            <AiFillTwitterCircle />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "#ffffff",
              className: "linkedin",
              size: "20px",
            }}
          >
            <TiSocialLinkedinCircular />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "#ffffff",
              className: "pinterest",
              size: "15px",
            }}
          >
            <FaPinterest />
          </IconContext.Provider>
        </div>
        <p>Copyright © 2019 Manceps</p>
      </div>
    </div>
  )
}

export default Footer
