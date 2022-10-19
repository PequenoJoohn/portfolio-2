import styled from "styled-components";

export const Container = styled.section`
    padding: 2rem;
    max-width: 100%;

    h2 {
        font-size: 24px;
        font-weight: 600;
        color: white;
        padding: 1rem 0;
    }

    p {
        font-weight: 300;
        color: white;
        padding: 1rem 0;
        font-size: 16px;
    }

    @media screen and (min-width: 990px) {
        max-width: 428px;
    }
`;