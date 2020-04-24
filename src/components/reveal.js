import React, { useState, useEffect } from "react"
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

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(results => {
        return results.json()
      })
      .then(json => {
        console.log(json)
      })
  }, [])

  // this function will be used to get indexes of all "unks"
  function getAllIndexes(arr, val) {
    var indexes = [],
      i
    for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i)
    return indexes
  }

  //convert input text to array
  const inputText = props.inputText
  const inputTextArr = inputText.split(" ")

  // get unk indexes
  const unkIndexesArr = getAllIndexes(inputText.split(" "), "unk")

  const boldInputText = inputTextArr.map(function(word, i) {
    const wordIndex = inputTextArr.indexOf(inputTextArr[i])
    if (unkIndexesArr.includes(wordIndex)) {
      return <strong key={i}>{word} </strong>
    } else {
      return <span key={i}>{word} </span>
    }
  })

  // example unredacted words array
  const unredactedWordsArr = ["tomato", "soup", "potato", "chowder"]

  // zip up unkIndexes and UnredactedWordsArr
  const unkIndexesAndUnredactedWordsArr = unkIndexesArr.map(function(e, i) {
    return [e, unredactedWordsArr[i]]
  })

  // replace unks with unredacted words
  const unredactedTextArr = [...inputTextArr]
  for (let i = 0; i < unkIndexesAndUnredactedWordsArr.length; i++) {
    unredactedTextArr[unkIndexesAndUnredactedWordsArr[i][0]] =
      unkIndexesAndUnredactedWordsArr[i][1]
  }

  const boldUnredactedText = unredactedTextArr.map(function(word, i) {
    const wordIndex = unredactedTextArr.indexOf(unredactedTextArr[i])
    if (unkIndexesArr.includes(wordIndex)) {
      return <strong key={i}>{word} </strong>
    } else {
      return <span key={i}>{word} </span>
    }
  })

  const conditionalComponentRendering = () => {
    const emailCaptured = localStorage.getItem("emailCaptured")
    console.log(emailCaptured)
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
