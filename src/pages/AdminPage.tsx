import * as React from "react";
import styled from "styled-components";

interface Props {
    className?: string;
}

const AdminPage = (props: Props) => {

    return (
        <div className={props.className}>
            administration page
        </div>
    );
};

export default styled(AdminPage)`
    height: 100%;
`;
