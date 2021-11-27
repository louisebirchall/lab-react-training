import React, { Component } from 'react'

class BoxColour extends Component {
    render() {
        return (
            <div style={{height: 150, width: 500 }}>
                <p>rgb({this.r},{this.g},{this.b})</p>
            </div>
        )
    }
}

export default BoxColour
