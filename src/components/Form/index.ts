import styled from "styled-components";

export const GradientButton = styled.button`
    width: 100%;
    height: 56px;
    margin: 20px 0;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: transparent linear-gradient(90deg, #007bfa 0%, #8088ff 100%) 0% 0% no-repeat padding-box;
    border: none;
    cursor: pointer;
`;

export const Text = styled.div`
    letter-spacing: 0;
    color: #ffffff;
    font: 500 14px/17px Roboto;
`;

export const InputWrapper = styled.div`
    position: relative;
    margin-top: 20px;
`;

export const StyledInput = styled.input`
    border: 1px solid #000000;
    padding: 16px 18px;
    width: 100%;
    opacity: 0.6;
    color: #000000;
    outline: none;
    border-radius: 4px;
    font-size: 16px;
    &:focus {
        border: 2px solid #2699fb;
    }
`;
export const EyeIcon = styled.img`
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translate(0, -50%);
    cursor: pointer;
`;

export const ErrorLabel = styled.div`
    text-align: left;
    font: 400 12px/14px Roboto;
    letter-spacing: 0.4px;
    color: #db4437;
    margin-top: 4px;
    margin-left: 16px;
`;
