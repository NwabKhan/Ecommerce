
import Redirecting from "../components/redirencting/Redirecting";

const ErrorPage = () => {
  const title = "404" ;
  const sub_title = "UH OH! You're lost." ;
  const desc = "The page you are looking for does not exist. How you got here is a  mystery. But you can click the button below to go back to the  Homepage."
  return (
    <Redirecting title = {title} sub_title = {sub_title} desc = {desc} />
  );
};

export default ErrorPage;
