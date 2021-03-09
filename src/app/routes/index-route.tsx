import React from 'react';
import { RouteComponentProps } from "react-router";

export const IndexRoute: React.FC<RouteComponentProps> = props => {
    return (
        <div>
            OK: {props.location.pathname}
        </div>
    );
}
