import styled from "styled-components";

export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    input{
        width: 100%;
        padding: 0 1.5rem ;
        height: 4rem;
        border-radius: 0.25rem;

        border: solid 1px #d7d7d7;
        background-color: #e7e9ee;
        
        font-weight: 400;
        font-size:1rem;
        &::placeholder{
            color: var(--text-body);
        }
        & + input{
            margin-top: 1rem;
        }
    }
    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        font-weight: 600;
        background-color: var(--green);
        color: #fff;
        border: 0;
        border-radius: 0.25rem;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.3s ease-in-out;

        &:hover{
            filter: brightness(0.8);
        }
    }
`