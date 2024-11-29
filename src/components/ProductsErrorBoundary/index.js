
import React from 'react'


class ProductsErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }

    }

    static getDerivedStateFromError(error) {
        console.log(error)
        return {hasError: true}
    }

    render() {
       if(!this.state.hasError) {
        return <>{this.props.children}</>
       } else {
        return <h1>AN ERROR HAS BEEN OCCURED!!! </h1>
       }
    }
}


export default ProductsErrorBoundary;