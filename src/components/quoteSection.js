import React from "react"
import quoteSectionStyles from "./quoteSection.module.css"

const QuoteSection = () => (
  <div className={quoteSectionStyles.Container}>
    <div>
      <h3>
        Unredactor is a Manceps experiment. Manceps makes it easy for enterprise
        organizations to put their data to work, using artificial intelligence.
      </h3>
      <h3>
        Check out our free resources: Discussion Questions for AI Readiness.
      </h3>
      <br />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.manceps.com/resources/discussion-questions-for-ai-readiness?utm_source=Projects&utm_medium=C2A&utm_campaign=Inbound&utm_content=Unredactor"
      >
        READ THE REPORT
      </a>
    </div>
  </div>
)

export default QuoteSection
