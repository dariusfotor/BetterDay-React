import * as React from "react";

export class AppLayout extends React.PureComponent {
    public render(): React.ReactNode {
        return <div>
            {this.props.children}
        </div>;
    }
}
