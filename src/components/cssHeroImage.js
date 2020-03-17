import React from "react"
import heroImageStyles from "./cssHeroImage.module.css"

const CssHeroImage = () => {
  return (
    <div className={heroImageStyles.Container}>
      <div className={heroImageStyles.Line}></div>
      <div className={heroImageStyles.Triangle}></div>
    </div>
  )
}

export default CssHeroImage
