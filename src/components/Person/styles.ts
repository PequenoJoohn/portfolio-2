import styled from "styled-components";

export const Container = styled.div`
    width: 456px;
    height: auto;
    position: relative;

    img {
        width: 100%;
        height: 100%;
    }

    p {
        font-size: 110px;
        position: absolute;
        font-weight: bold;
        rotate: 270deg;
        color: var(--white);
        bottom: 2rem;
        left: 0;
        width: 100%;
        max-height: 456px;
        height: 100%;
        text-shadow: 0px -5px #BA2842;
    }

    @media screen and (max-width: 989px) {
        display: none;
    }
`;