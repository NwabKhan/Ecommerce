import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";

const BuyProduct = () => {
  const { id } = useParams();
  // console.log("Id on Buy product is: ", id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigateForm = useNavigate(); // Using this to navigate, when Form is subitted
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tml8p8z",
        "template_2hvg1nj",
        e.target,
        "uVsLxHxBHY-6G5nzA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    navigateForm("./formsubmitted"); //navigate here on form submisstion
  };

  return (
    <Wrapper>
      <h2 className="common-heading">Kindly Fill Your Details</h2>

      <div className="container">
        <div className="contact-form">
          {/* <h2 className="feedback">Feedback</h2>
          <h3 className="suggestion">
            We appretiate your valuable suggestions
          </h3> */}

          <form method="POST" onSubmit={sendEmail} className="contact-inputs">
            <input
              style={{ display: "none" }}
              type="text"
              placeholder="Product Id"
              name="id"
              defaultValue={id || ""}
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Customer Name"
              name="name"
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Customer Email"
              name="email"
              required
              autoComplete="off"
            />
            <input
              type="number"
              placeholder="Phone Number"
              name="phone_number"
              required
              autoComplete="off"
            />
            <input
              type="number"
              placeholder="Optional Phone Number"
              name="optional_number"
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Complete Address(Include Province/State)"
              name="address"
              required
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Nearest Landmark"
              name="near_address"
              required
              autoComplete="off"
            />

            <input
              type="text"
              placeholder="City"
              name="city"
              required
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Country"
              name="country"
              required
              autoComplete="off"
            />

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
    ${'' /* margin-top: 1rem; */}
    ${'' /* .feedback {
      margin-bottom: 2rem;
      font-weight: 600;
      font-size: 3rem;
    }
    .suggestion {
      margin-bottom: 2rem;
      color: grey;
      font-size: 2rem;
    } */}
    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        padding: 2rem 4rem;
        display: flex;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};

        flex-direction: column;
        gap: 3rem;

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

export default BuyProduct;
