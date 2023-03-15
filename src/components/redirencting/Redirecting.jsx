import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";

import { Button } from "../../styles/Button";

const Redirecting = ({title, sub_title, desc}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>{title}</h2>
          <h3>{sub_title}</h3>
          <p>
            {desc}
          </p>

          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;

export default Redirecting;
