import React from "react"
import PreviousUnredactionsStyles from "./previousUnredactionStyles.module.css"
import unredactionsImage from "../images/previousUnredactions.png"

const PreviousUnredactionsSection = () => {
  const unredactions = [
    {
      input:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do unk unk incididunt ut labore et dolore magna aliqua.",
      unredacted:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      input:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do unk unk incididunt ut labore et dolore magna aliqua.",
      unredacted:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      input:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do unk unk incididunt ut labore et dolore magna aliqua.",
      unredacted:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      input:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do unk unk incididunt ut labore et dolore magna aliqua.",
      unredacted:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      input:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do unk unk incididunt ut labore et dolore magna aliqua.",
      unredacted:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      input:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do unk unk incididunt ut labore et dolore magna aliqua.",
      unredacted:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      input:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do unk unk incididunt ut labore et dolore magna aliqua.",
      unredacted:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      input:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do unk unk incididunt ut labore et dolore magna aliqua.",
      unredacted:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]

  const unredactionsList = unredactions.map((unredaction, index) => {
    return (
      <div key={index + 123} className={PreviousUnredactionsStyles.ListItem}>
        <p>Input: {unredaction.input}</p>
        <p>Unredacted: {unredaction.unredacted}</p>
      </div>
    )
  })

  return (
    <div className={PreviousUnredactionsStyles.Container}>
      <div className={PreviousUnredactionsStyles.ScrollBoxContainer}>
        <h1>
          <strong>Previous Unredactions</strong>
        </h1>
        <div className={PreviousUnredactionsStyles.ScrollBox}>
          <div className={PreviousUnredactionsStyles.List}>
            {unredactionsList}
          </div>
        </div>
        <div></div>
      </div>
      <div className={PreviousUnredactionsStyles.ImageDiv}>
        <img src={unredactionsImage} alt="letters and manceps colors"></img>
      </div>
    </div>
  )
}

export default PreviousUnredactionsSection
