import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigateForm = useNavigate() // Using this to navigate, when Form is subitted
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tml8p8z', 'template_2fiskvn', e.target, 'uVsLxHxBHY-6G5nzA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      navigateForm('./suggestionsubmitted') //navigate here on form submisstion
  };
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Now</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26587.074588806536!2d73.03401030380681!3d33.59533136428672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94834d87f5a3%3A0x506e17bedd22f2e7!2sSaddar%2C%20Rawalpindi%2C%20Punjab%2046000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1677518783032!5m2!1sen!2s"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map"
      ></iframe>

      <div className="container">
        <div className="contact-form">
        <h2 className="feedback">Feedback</h2>
        <h3 className="suggestion">We appretiate your valuable suggestions</h3>
          <form
            // action="https://formspree.io/f/mwkjbprr"
            method="POST"
            onSubmit={sendEmail}
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="Username"
              name="name"
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              autoComplete="off"
            />
            <textarea
              type="text"
              name="message"
              placeholder="Write your message"
              required
              autoComplete="off"
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;
    .feedback{
      margin-bottom: 2rem;
      font-weight: 600;
      font-size: 3rem

    }
    .suggestion{
      margin-bottom: 2rem;
      color: grey;
      font-size: 2rem
    }
    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding: 3rem;
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};


        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact;
