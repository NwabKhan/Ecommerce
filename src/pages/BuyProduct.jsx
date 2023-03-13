import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BuyProduct = () => {
  const { id } = useParams();
  console.log("Id on Buy product is: ", id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <h2 className="common-heading">kindly Fill the details</h2>

      <div className="container">
        <div className="contact-form">
          <h2 className="feedback">Feedback</h2>
          <h3 className="suggestion">
            We appretiate your valuable suggestions
          </h3>
          <form
            action="https://formspree.io/f/mwkjbprr"
            method="POST"
            className="contact-inputs"
          >
          
            <input
              style={{ display: "none" }}
              type="text"
              placeholder="Product Id"
              name="Product Id"
              readOnly={id}
              autoComplete="off"
            />

            <input
              type="text"
              placeholder="Full Name"
              name="Full Name"
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Address"
              name="Email"
              required
              autoComplete="off"
            />
            <textarea
              type="text"
              name="Message"
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
    .feedback {
      margin-bottom: 2rem;
      font-weight: 600;
      font-size: 3rem;
    }
    .suggestion {
      margin-bottom: 2rem;
      color: grey;
      font-size: 2rem;
    }
    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
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
