import React from "react"
import footerStyles from "./footer.module.css"
import MancepsMap from "./map"

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
      </div>
    </div>
  )
}

export default Footer
