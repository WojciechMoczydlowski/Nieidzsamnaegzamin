import ChevronDown from "images/chevron-down.svg?react";
import ChevronUp from "images/chevron-up.svg?react";
import React, { useState } from "react";
import styled from "styled-components";
import { resetButton } from "styles/resets";
import { theme } from "styles/theme";
import { px2rem } from "styles/utils";
import { hexToRGBA } from "utils/hexToRgb";
import EmphasizedLink from "./EmphasizedLink";

const Root = styled.div`
    position: relative;
    width: ${px2rem(220)};
`;

export const DropdownButton = styled.button`
    ${resetButton}
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: ${px2rem(48)};
    padding: 0 ${px2rem(16)};
    color: ${theme.palette.grayScale.white};
    background-color: ${theme.palette.brand.primary500};
    font-weight: 700;
    cursor: pointer;
`;

const Text = styled.h5`
    margin: 0;
    color: ${theme.palette.grayScale.white};
    font-size: 20px;
    text-transform: uppercase;
`;

const DropdownItemsWrapper = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    margin-top: 5px;
    flex-direction: column;
    border: 2px solid ${theme.palette.brand.primary500};
    box-shadow: ${theme.palette.shadow.primary};
    background-color: ${theme.palette.grayScale.white};
`;

const StyledEmphasizedLink = styled(EmphasizedLink)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: ${px2rem(16)};

    &:hover {
        background-color: ${hexToRGBA("#ED217D", 0.1)};
    }
`;

type DropdownProps = {
    helpString: string;
};

const Dropdown = (props: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Root>
            <DropdownButton onClick={() => setIsOpen(!isOpen)}>
                <Text>{props.helpString}</Text>
                {isOpen ? <ChevronDown /> : <ChevronUp />}
            </DropdownButton>
            {isOpen && (
                <DropdownItemsWrapper>
                    <div>1</div>
                    <div>2</div>
                </DropdownItemsWrapper>
            )}
        </Root>
    );
};

export default Dropdown;
