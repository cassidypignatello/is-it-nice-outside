import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
}

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    };
  }
  componentDidMount() {
    const { text, speed } = this.props;
    const stopper = text + '...';
    this.setInterval = window.setInterval(() => {
      this.state.text === stopper ?
      this.setState(() => ({ text: text })) :
      this.setState((prevState) => ({ text: prevState.text + '.' }));
    }, speed);
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    );
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 200
}
