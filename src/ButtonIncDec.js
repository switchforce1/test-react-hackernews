import React from 'react';

class ButtonIncDec extends React.Component {
    constructor (props) {
        super(props);
        this.state = { val : props.initVal };
    }

    handleIncClick = () => {
        this.setState( (state, props) => ({val: state.val + 1 }))
    }

    handleDecClick = () => {
        this.setState( (state, props) => ({val: state.val + 1 }))
    }

    render() {
        return (
          <div>
              <button onClick={this.handleDecClick}> - </button>
                val: { this.state.val }
              <button onClick={this.handleIncClick}> + </button>
          </div>
        );
    }
}
export default ButtonIncDec;