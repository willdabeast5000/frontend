import { AdminPanelSettings, Home } from "@mui/icons-material";
import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
    className?: string;
}

const Toolbar = (props: Props) => {

    const [navOpen, setNavOpen] = React.useState(false);

    const hamburgerClick = React.useCallback(() => {
        setNavOpen(!navOpen);
    }, [navOpen]);

    const handleNavClose = React.useCallback((ev: MouseEvent) => {
        if (ev.target) {
            const divTarget = ev.target as HTMLDivElement;
            if (divTarget.id !== "hamburger-menu" && divTarget.parentElement?.id !== "hamburger-menu") {
                setNavOpen(false);
            }
        }
    }, []);

    React.useEffect(() => {
        window.addEventListener("mouseup", handleNavClose);
        return () => {
            window.removeEventListener("mouseup", handleNavClose);
        };
    }, [navOpen, handleNavClose]);

    const isCurrentItem = React.useCallback((path: string) => {
        return window.location.pathname.includes(path) && "selected";
    }, [])

    return (
        <div className={props.className}>
            <div id="hamburger-menu" className="hamburger-menu" onClick={hamburgerClick}>
                <div className={`${navOpen ? "top" : ""} bar`} />
                <div className={`${navOpen ? "middle" : ""} bar`} />
                <div className={`${navOpen ? "bottom" : ""} bar`} />
            </div>
            <div id="nav-menu" className={`nav-menu ${navOpen ? "open-menu" : ""}`}>
                <div className="nav-container">
                    <Link className={`nav-item ${isCurrentItem("/home")}`} to="/home">
                        <Home />
                        <div className="nav-name">Home</div>
                    </Link>
                    <Link className={`nav-item ${isCurrentItem("/admin")}`} to="/admin">
                        <AdminPanelSettings />
                        <div className="nav-name">Administration</div>
                    </Link>
                </div>
            </div>
            <div id="button-portal" className="button-portal" />
            <div className="profile-menu"></div>
        </div>
    );
};

export default styled(Toolbar)`
    height: 48px;
    display: flex;
    flex-direction: row;
    background-color: #007c15;

    .selected {
        color: #007c15 !important;
        border-color: #007c15 !important;
    }

    .nav-menu {
        height: calc(100% - 48px);
        width: 0px;
        display: block;
        flex-direction: column;
        position: absolute;
        top: 48px;
        background-color: #CCC;
        transition: 500ms;
        overflow-x: hidden;
    }

    .open-menu {
        width: 200px;
    }

    .nav-container {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .nav-item {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: calc(100% - 16px);
        padding: 7px;
        color: #000;
        text-decoration: none;
        transition: 500ms;
        cursor: pointer;
        transition-property: background-color border-color;
        border: 1px solid #CCC;
    }

    .nav-item:hover {
        background-color: #DDD;
        padding: 7px;
        border: 1px solid #FFFFFF;
    }

    .nav-name {
        color: #000;
    }

    .hamburger-menu {
        height: 24px;
        width: 32px;
        margin: 4px 4px;
        padding: 8px 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 2px;
        transition: transform 500ms;
        transform: rotate(0deg) translate(0px);
    }

    .hamburger-menu:hover {
        background-color: rgba(256, 256, 256, 0.3);
        border: 1px solid white;
        margin: 3px 3px;
        padding: 8px 4px;
        cursor: pointer;
        transition: background-color 500ms;
    }

    .top {
        transform: rotateY(0deg) rotate(45deg) translate(6px, 6px);
    }

    .middle {
        opacity: 0;
        transition: 500ms;
    }

    .bottom {
        transform: rotateY(0deg) rotate(-45deg)  translate(8px, -8px);
    }

    .bar {
        background-color: #FFF;
        height: 3px;
        width: 32px;
        border-radius: 1px;
        transition: 500ms;
    }
`;
