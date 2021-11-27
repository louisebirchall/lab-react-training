import React, { Component } from 'react'

const styles = {
    width: 600,
    height: 350,
    borderRadius: 25,
    backgroundColor: this.bgColor,
    color: this.color
}

// style p & rounded corners

class CreditCard extends Component {
    render() {
        return (
          <div style={styles}>
            <p>{this.type}</p>
            <p>{this.number}</p>
            <p>
              Expires {this.expirationMonth}/{this.expirationYear}
            </p>
            <p>{this.bank}</p>
            <p>{this.owner}</p>
          </div>
        );
    }
}

export default CreditCard
