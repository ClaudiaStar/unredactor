import React, { useState } from "react"
import fetch from "isomorphic-unfetch"
import Cookies from "js-cookie"
import { motion } from "framer-motion"
import heroStyles from "./heroStyles.module.css"

const Reveal = props => {
  // handle contact form input & integrate with Hubspot
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false)
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")

  const portalId = "6531460"
  const formId = "c225a961-b2c9-4710-97d3-136a9e6e793a"

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
      })
      .catch(err => {
        setSuccess(false)
        setError(err)
        setLoading(false)
      })
  }

  let emailCaptureForm = (
    <motion.div
      className={heroStyles.Unredactor}
      initial={{ x: 400 }}
      animate={{ x: 0 }}
    >
      <form
        data-form-id={formId}
        data-portal-id={portalId}
        onSubmit={submitForm}
      >
        <h5>Enter info below to reveal results:</h5>
        <input
          type="text"
          placeholder="First name"
          name="first-name"
          value={firstname}
          onChange={e => setFirstname(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Last name"
          name="last-name"
          value={lastname}
          onChange={e => setLastname(e.target.value)}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <br />
        <button>SEE RESULTS</button>
      </form>
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
      <br />
      <button onClick={props.againButtonClicked}>DO IT AGAIN</button>
    </motion.div>
  )

  return <React.Fragment>{success ? reveal : emailCaptureForm}</React.Fragment>
}

export default Reveal
