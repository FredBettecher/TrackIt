import styled from "styled-components";

export const HomepageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 4.25rem;
        margin-bottom: 2rem;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    input{
        font-size: 1.25rem;
        width: 18.75rem;
        height: 2.8125rem;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        margin-bottom: 0.375rem;
        ::placeholder{
            color: #DBDBDB;
            padding-left: 0.6875rem;
        }
    }

    button{
        font-size: 1.25rem;
        width: 18.75rem;
        height: 2.8125rem;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        color: #ffffff;
        background-color: #52B6FF;
        cursor: pointer;
    }

    a {
        text-decoration: underline;
        color: #52B6FF;
        margin-top: 1.5625rem;
        font-size: 0.875rem;
    }

    /* @media (max-width: 750px) {
    } */
`;