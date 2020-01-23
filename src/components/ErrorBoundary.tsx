import React from 'react';

interface ErrorProps {
  children?: React.ReactNode;
}

type StateErrorBoundary = { readonly hasError: boolean };

class ErrorBoundary extends React.Component<ErrorProps, StateErrorBoundary> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: object) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
    console.log(`this is an error here: ${errorInfo}`, error);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
