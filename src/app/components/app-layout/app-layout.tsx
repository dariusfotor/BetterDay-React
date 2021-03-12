import * as React from 'react'
import Header from '../header'

export class AppLayout extends React.PureComponent {
  public render(): React.ReactNode {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
