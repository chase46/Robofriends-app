import React, {Component} from 'react';


class ErrorBoundry extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;
        if (hasError) {
            return (
                <h1>Ooops! there seems to be an error.</h1>
            )
        }
        return children
    }
}

export default ErrorBoundry
