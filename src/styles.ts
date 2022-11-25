import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  .role {
    font-size: 200px;
    font-weight: bold;
    color: #ba2842;
    opacity: 0.3;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    display: none;
    cursor: crosshair;
    text-transform: uppercase;
  }

  .whyme {
    display: initial;
  }

  @media screen and (max-width: 1200px) {
    .role {
      font-size: 180px;
    }
  }

  @media screen and (max-width: 1070px) {
    .role {
      font-size: 160px;
    }
  }

  @media screen and (min-width: 990px) {
    .role {
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
