
import Redirecting from "../components/redirencting/Redirecting";

const FormSubmitted = () => {
  const title = "Form Submitted" ;
  const sub_title = "Your Product is on the Way." ;
  const desc = "Thank You for choosing us. you Product will delived in 5-6 days. You will Pay Cah on Delivery. If you Have any Suggestions you can Contact us. Thanks again"
  return (
    <Redirecting title = {title} sub_title = {sub_title} desc = {desc} />
  )
}

export default FormSubmitted