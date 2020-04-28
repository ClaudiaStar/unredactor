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
        localStorage.setItem("emailCaptured", "true")
      })
      .catch(err => {
        setSuccess(false)
        setError(err)
        setLoading(false)
      })
  }

  const justShowResultsClickHandler = () => {
    setSuccess(true)
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
        <h5>Get notified when additional tools are published.</h5>
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
        <button>SUBMIT AND SEE RESULTS</button>
        <br />
        <br />
        <div
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={justShowResultsClickHandler}
          onKeyDown={justShowResultsClickHandler}
          role="button"
          tabIndex={0}
        >
          No thanks, just show me the results.
        </div>
      </form>
    </motion.div>
  )

  //convert input text to array
  const inputText = props.inputText
  const inputTextArr = inputText.split(" ")

  // get unk indexes
  let unkIndexesArr = []

  const specialChar = [",", ".", "!", "?", "-", ":", ";"]

  for (let i = 0; i < inputTextArr.length; i++) {
    if (
      specialChar.includes(
        inputTextArr[i].slice(-1) && inputTextArr[i].includes("unk")
      ) ||
      inputTextArr[i].includes("unk")
    ) {
      unkIndexesArr.push(i)
    }
  }

  const boldInputText = inputTextArr.map(function(word, i) {
    const space = " "
    if (unkIndexesArr.includes(i)) {
      return <strong key={i}>{word + space}</strong>
    } else {
      return <span key={i}>{word + space}</span>
    }
  })

  // example unredacted words array
  const unredactedWordsArr = props.predictions
  console.log(props.predictions)

  // replace unks with unredacted words
  const unredactedTextArr = [...inputTextArr]
  const unredactedWordsCopy = [...unredactedWordsArr]

  for (let i = 0; i < unredactedTextArr.length; i++) {
    if (unredactedTextArr[i].search("unk") !== -1) {
      unredactedTextArr[i] = unredactedTextArr[i].replace(
        "unk",
        unredactedWordsCopy[0]
      )
      unredactedWordsCopy.shift()
    }
  }

  console.log(unredactedTextArr)

  let boldUnredactedText = unredactedTextArr.map(function(word, i) {
    let space = " "
    if (unkIndexesArr.includes(i)) {
      return <strong key={i}>{word + space}</strong>
    } else {
      return <span key={i}>{word + space} </span>
    }
  })

  const conditionalComponentRendering = () => {
    const emailCaptured = localStorage.getItem("emailCaptured")
    if (success || emailCaptured) {
      return reveal
    } else {
      return emailCaptureForm
    }
  }

  let reveal = (
    <motion.div
      className={heroStyles.Unredactor}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <h5>Your input:</h5>
      <p className={heroStyles.InputText}>{boldInputText}</p>
      <h5>Unredacted:</h5>
      <p className={heroStyles.UnredactedText}>{boldUnredactedText}</p>
      <br />
      <br />
      <button onClick={props.againButtonClicked}>DO IT AGAIN</button>
    </motion.div>
  )

  return <React.Fragment>{conditionalComponentRendering()}</React.Fragment>
}

export default Reveal
