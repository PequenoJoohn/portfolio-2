import styled from "styled-components";

export const Container = styled.header`
   padding: 2rem 0;
   display: flex;
   justify-content: center;

   h1 {
    text-align: center;
    max-width: 300px;
    font-weight: bold;
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    span {
        color: var(--red);
    }
   }

   @media screen and (min-width: 990px) {
       display: none;
   }
`;