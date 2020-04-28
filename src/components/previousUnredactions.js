import React from "react"
import PreviousUnredactionsStyles from "./previousUnredactionStyles.module.css"
import unredactionsImage from "../images/previousUnredactions.png"

const PreviousUnredactionsSection = () => {
  const unredactions = [
    {
      input:
        "Luke Skywalker is the best jedi unk in the unk Star Wars universe.",
      unredacted:
        "Luke Skywalker is the best jedi superhero in the ultimate Star Wars universe.",
    },
    {
      input: "Life is like a box of unk — you never know what unk gonna get.",
      unredacted:
        "Life is like a box of candy — you never know what you gonna get.",
    },
    {
      input:
        "On the first day of unk my true love gave to me, a unk in a unk tree.",
      unredacted:
        "On the first day of life my true love gave to me, a leaf in a pine tree.",
    },
    {
      input: "The best part about unk unk is all the unk they have.",
      unredacted: "The best part about the people is all the fun they have.",
    },
    {
      input: "Mary had a little unk.",
      unredacted: "Mary had a little laugh.",
    },
    {
      input: "Today is going to be the day that unk unk to unk.",
      unredacted: "Today is going to be the day that everyone comes to die.",
    },
    {
      input: "Area 51 is a place where unk on unk are common.",
      unredacted:
        "Area 51 is a place where restrictions on bicycles are common.",
    },
    {
      input: "The name of the person who I will marry is unk.",
      unredacted: "The name of the person who I will marry is unknown.",
    },
    {
      input: "There are currently unk lizard people unk the land.",
      unredacted: "There are currently no lizard people on the land.",
    },
    {
      input: "Chemtrails cause humans to unk and think that the unk is unk.",
      unredacted:
        "Chemtrails cause humans to panic and think that the disease is toxic.",
    },
  ]

  const unredactionsList = unredactions.map((unredaction, index) => {
    return (
      <div key={index + 123} className={PreviousUnredactionsStyles.ListItem}>
        <p>Input: {unredaction.input}</p>
        <p className={PreviousUnredactionsStyles.Unredacted}>
          Unredacted: {unredaction.unredacted}
        </p>
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
