import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape:#fff;
        --green: #33CC95;

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }
    body{
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input , textarea{
        font-family: 'Poppins', sans-serif;
        font-weight:400;
    }
    h1, h2,h3,h4,h5,strong{
        font-weight: 600;
    }
    button{
        cursor: pointer;
    }
    [disabled]{
        cursor: not-allowed;
        opacity: 0.6;
    }
    .react-modal-overlay{
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background-color:var(--background);
        padding: 6rem;
        position: relative;
        border-radius: 0.25rem;
    }
`;
