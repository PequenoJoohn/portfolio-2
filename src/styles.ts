import styled from "styled-components";

export const Container = styled.div`
    height: calc(100vh - 96px);
    position: relative;

    .developer {
        font-size: 200px;
        font-weight: bold;
        color: #BA2842;
        opacity: 0.3;
        text-align: center;
        margin: 0 auto;
        width: 100%;
        display: none;
    }

    .whyme {
        display: initial;
    }

    @media screen and (max-width: 1200px) {
          .developer {
            font-size: 180px;
        }
    }

    @media screen and (max-width: 1070px) {
          .developer {
            font-size: 160px;
        }
    }
    
    @media screen and (min-width: 990px) {
        .developer {
            display: block;
        }

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