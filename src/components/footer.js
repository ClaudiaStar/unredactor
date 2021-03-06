import React, { useState } from "react"
import fetch from "isomorphic-unfetch"
import Cookies from "js-cookie"

import footerStyles from "./footer.module.css"
import MancepsMap from "./map"
import { FaFacebook } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import { TiSocialLinkedinCircular } from "react-icons/ti"
import { IoLogoGithub } from "react-icons/io"
import { IconContext } from "react-icons"

const Footer = () => {
  // handle contact form input & integrate with Hubspot
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false)
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const portalId = "6531460"
  const formId = "bc25aaa4-a724-4927-80a0-79be7131f28e"
  const submitForm = e => {
    if (e) e.preventDefault()

    const isBrowser = typeof window !== "undefined"
    const hutk = isBrowser ? Cookies.get("hubspotutk") : null
    const pageUri = isBrowser ? window.location.href : null
    const pageName = isBrowser ? document.title : null
    const postUrlBase =
      "https://api.hsforms.com/submissions/v3/integration/submit"
    const postUrl = `${postUrlBase}/${portalId}/${formId}`

    setLoading(true)

    const body = {
      submittedAt: Date.now(),
      fields: [
        {
          name: "firstname",
          value: firstname,
        },
        {
          name: "lastname",
          value: lastname,
        },
        {
          name: "email",
          value: email,
        },
        {
          name: "message",
          value: message,
        },
      ],
      context: {
        hutk,
        pageUri,
        pageName,
      },
    }
    fetch(postUrl, {
      method: "post",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
      }),
    })
      .then(res => res.json())
      .then(() => {
        setSuccess(true)
        setError(false)
        setLoading(false)
        setFirstname("")
        setLastname("")
        setEmail("")
        setMessage("")
      })
      .catch(err => {
        setSuccess(false)
        setError(err)
        setLoading(false)
      })
  }

  return (
    <div className={footerStyles.Container}>
      <form
        className={footerStyles.ContactSection}
        data-form-id={formId}
        data-portal-id={portalId}
        onSubmit={submitForm}
      >
        <h6>
          <strong>SEND US A MESSAGE</strong>
        </h6>
        <hr />
        <input
          placeholder="First Name"
          name="first-name"
          value={firstname}
          onChange={e => setFirstname(e.target.value)}
          type="text"
        />
        <br />
        <input
          placeholder="Last Name"
          name="last-name"
          value={lastname}
          onChange={e => setLastname(e.target.value)}
          type="text"
        />
        <br />
        <input
          placeholder="Email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
        />
        <br />
        <textarea
          placeholder="Message"
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          type="text"
        ></textarea>
        <br />
        <button type="submit">GET IN TOUCH</button>
        {success ? (
          <div style={{ color: "#ffffff" }}>
            <h3>Thanks for your message! We will get back to you shortly.</h3>
          </div>
        ) : null}
      </form>
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/manceps?utm_source=Projects&utm_medium=C2A&utm_campaign=Inbound&utm_content=Unredactor"
          >
            <IconContext.Provider
              value={{
                color: "#ffffff",
                className: footerStyles.SocialIcon,
                size: "15px",
              }}
            >
              <FaFacebook />
            </IconContext.Provider>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/MancepsAI?utm_source=Projects&utm_medium=C2A&utm_campaign=Inbound&utm_content=Unredactor"
          >
            <IconContext.Provider
              value={{
                color: "#ffffff",
                className: footerStyles.SocialIcon,
                size: "17px",
              }}
            >
              <AiFillTwitterCircle />
            </IconContext.Provider>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/2402277/admin/?utm_source=Projects&utm_medium=C2A&utm_campaign=Inbound&utm_content=Unredactor"
          >
            <IconContext.Provider
              value={{
                color: "#ffffff",
                className: footerStyles.SocialIcon,
                size: "20px",
              }}
            >
              <TiSocialLinkedinCircular />
            </IconContext.Provider>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/manceps?utm_source=Projects&utm_medium=C2A&utm_campaign=Inbound&utm_content=Unredactor"
          >
            <IconContext.Provider
              value={{
                color: "#ffffff",
                className: footerStyles.SocialIcon,
                size: "15px",
              }}
            >
              <IoLogoGithub />
            </IconContext.Provider>
          </a>
        </div>
        <p>Copyright © 2019 Manceps</p>
      </div>
    </div>
  )
}

export default Footer
