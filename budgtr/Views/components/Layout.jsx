const { request } = require("express");

const React = require("react");

class Layout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <title>budgtr</title>
                    <link rel="stylesheet" href="/css/styles.css"/>   
                </head>
                <body>
                {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout