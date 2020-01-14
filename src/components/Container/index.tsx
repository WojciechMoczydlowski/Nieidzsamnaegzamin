import { up } from "styled-breakpoints";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;

    max-width: 540px;

    ${up("tablet")} {
        max-width: 720px;
    }

    ${up("desktop")} {
        max-width: 1140px;
    }

    ${up("lgDesktop")} {
        max-width: 1436px;
    }
`;

export default Container;
