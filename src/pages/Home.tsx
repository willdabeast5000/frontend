import * as React from "react";
import styled from "styled-components";

interface Props {
    className?: string;
}

const Home = (props: Props) => {

    return (
        <div className={props.className}>
            hello world
        </div>
    );
};

export default styled(Home)`
    height: 100%;
`;
