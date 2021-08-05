import React from 'react';
import './errorboundary.style.css';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h3>Error occurred.</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
