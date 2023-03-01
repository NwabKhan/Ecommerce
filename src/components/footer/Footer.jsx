import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../../styles/Button";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const Wrapper = styled.section`
    .contact-short {
      max-width: 60vw;
      margin: auto;
      padding: 5rem 10rem;
      background-color: ${({ theme }) => theme.colors.bg};
      border-radius: 1rem;
      box-shadow: ${({ theme }) => theme.colors.shadowSupport};
      transform: translateY(50%);
      .grid div:last-child {
        ${"" /* for the button with the text of "Get Started" */}
        justify-self: end;
        align-self: center;
      }
    }
    footer {
      padding: 12rem 0 5rem 0;
      background-color: ${({ theme }) => theme.colors.footer_bg};
      h3 {
        color: ${({ theme }) => theme.colors.hr};
        margin-bottom: 2.4rem;
      }
      span {
        color: ${({ theme }) => theme.colors.btn};

        font-size: 1.75rem;
      }
      p {
        color: ${({ theme }) => theme.colors.white};
      }
      .footer-social-icons {
        display: flex;
        gap: 2rem;
        div {
          padding: 1rem;
          border-radius: 50%;
          border: 2px solid ${({ theme }) => theme.colors.white};
          .icons {
            color: ${({ theme }) => theme.colors.white};
            font-size: 2.4rem;
            position: relative;
            cursor: pointer;
          }
        }
      }
    }
    .footer-bottom-section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .contact-short {
        max-width: 80vw;
        margin: 4.8rem auto;
        transform: translateY(0%);
        text-align: center;
        .grid div:last-child {
          justify-self: center;
        }
      }
      footer {
        padding: 9rem 0 9rem 0;
      }
      .footer-bottom-section {
        padding-top: 4.8rem;
      }
    }
  `;

  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              {/* btn classes are extra , no need for these */}
              <Button className="btn hireme-btn">
                <NavLink to="/"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Easy Order Simple Shop</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h3>
                Subscribe <span>Routine Information</span> to get important
                updates
              </h3>
              <form action="#">
                <input type="email" name="email" placeholder="Your Email" />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social-icons">
                <div>
                  <a
                    href="https://api.whatsapp.com/message/PUDIO2WUSPQ3I1?autoload=1&app_absent=0"
                    target="_blank"
                  >
                    <BsWhatsapp className="icons" />
                  </a>
                </div>
                <div>
                  <a href="#" target="_blank">
                    <FaFacebookF className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/@routineinformation3901"
                    target="_blank"
                  >
                    <FaYoutube className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              {/* <a href="tel: +92 311 6689885">+92 311 6689885</a> */}
              <h3>+92 311 6689885</h3>
            </div>
          </div>

          <div className="footer-bottom-section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} Discountify. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

export default Footer;
