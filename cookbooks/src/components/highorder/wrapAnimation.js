import React from 'react'
import {
  CSSTransition
} from "react-transition-group"

function wrapAnimation(WrappedComponent) {
  return class extends React.Component {
    render() {
      let state = this.props.location.state
      return (
        <CSSTransition
          in={this.props.match !== null}
          classNames={{
            enter: 'animated',
            enterActive: state ? state.enterActive : '',
            exit: 'animated',
            exitActive: state ? state.exitActive : '',
          }}
          timeout={300}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <WrappedComponent {...this.props} />
        </CSSTransition>
      )
    }
  }
}

export default wrapAnimation