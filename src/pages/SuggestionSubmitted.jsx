import Redirecting from "../components/redirencting/Redirecting"

const SuggestionSubmitted = () => {
    const title = "Thank You!!"
    const sub_title = "your valuable Suggestions are Received"
    const desc = "We will consider your suggestions. Once again thank you for your suggestions"
  return (
    <Redirecting title = {title} sub_title = {sub_title} desc = {desc} />
  )
}

export default SuggestionSubmitted