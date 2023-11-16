import * as React from "react";
import { Outlet } from "react-router-dom";
import Toolbar from "../components/Toolbar";
import styled from "styled-components";

interface Props {
    className?: string;
}

const Layout = (props: Props) => {

    return (
        <div className={props.className}>
            <Toolbar />
            <Outlet />
        </div>
    );
};

export default styled(Layout)`
    height: 100%;
`;
