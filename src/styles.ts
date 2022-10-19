import styled from "styled-components";

export const Container = styled.div`
    .whyme {
        display: initial;
    }
    
    @media screen and (min-width: 990px) {
        .whyme {
            display: flex;
            justify-content: center;

            .slick-slider {
                width: 100%;
                max-width: 500px;
            }           
        }
    }
`;