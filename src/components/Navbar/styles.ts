import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    padding: 2rem;
    max-width: 1028px;
    margin: 0 auto;
    justify-content: space-between;

    h2 {
        color: var(--white);
        font-family: Arial, Helvetica, sans-serif;
    }

    .social-web {
        display: none
    }

    .social-mobile {
        display: flex;
        position: relative;

        &:hover {
            ul {
                display: flex;
            }
        }

        > svg {
            color: var(--white);
            font-size: 18px;
            cursor: pointer;
        }

        ul {
            visibility: ${(props) => props.theme === true ? "visible" : "hidden"};
            display: flex;
            background-color: var(--white);
            padding: 0.765rem 1rem;
            border-radius: 15px;
            justify-content: center;
            align-items: center;

            box-shadow: 2px 2px 10px rgba(0,0,0, 0.2);

            position: absolute;
            right: 7px;
            top: 35px;

            &::before {
                content: '';
                position: absolute;
                top: -20px;
                right: -5px;
                width: 25px;
                height: 30px;
                background-color: transparent;
            }

            &::after {
                content: '';
                width: 0; 
                height: 0; 
                border-left: 30px solid transparent;
                border-right: 0px solid transparent;
                border-bottom: 30px solid var(--white);

                position: absolute;
                top: -15px;
                right: 0px;
            }

            li {
                margin-right: 1rem;
                z-index: 1;

                & + li:last-child {
                    margin-right: 0;
                }
                
                a {
                    svg {
                        color: black;

                        &:hover {
                            color: var(--black);
                            filter: brightness(50%)
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 990px) {
        .social-web {
            display: flex;
            
            li {
                margin-right: 1.5rem;

                & + li:last-child {
                    margin-right: 0;
                }
            }

            svg {
                color: var(--white);
                font-size: 18px;
                cursor: pointer;
            }
        }

        .social-mobile {
            display: none;
        }
    }
`;