import styled from "styled-components";
import Slider from "react-slick";


export const Container = styled.section`
    padding: 2rem 0;
`;

export const SliderComponent = styled(Slider)`
    height: 200px;
    overflow: hidden;
    width: 100%;
 
    .slick-list {
        padding:0 10% 0 0 !important;
    }
    
    div {
        border-radius: 10px;
        width: 100%;
        height: 100%;
        flex-grow: 1;
        display: flex;
        position: relative;
        padding-right: 0.5rem;

        img {
            height: 100%;
            width: 100%;
            background-size: cover;
            object-fit: cover;
            border-radius: 10px;
        }

        p {
            position: absolute;
            float: inline-end;
            bottom: 10px;
            left: 10px;
            color: var(--white);
        }
    }

    @media screen and (max-width: 768px) {
        .slick-list {
            padding:0 10% 0 0 !important;
        }
    }
`;