import styled from "styled-components";

export const Container = styled.div`
    width: 456px;
    
    img {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 989px) {
        display: none;
    }
`;