const React = require("react");
const Layout = require("./components/Layout.jsx")

class Show extends React.Component {
    render(){
        const budget = this.props.budget;
        return (
            <Layout>
                <h1>Show Page</h1>
                <p>The {budget.name} is {budget.amount}</p>
                
            </Layout>
        )
    }
}
module.exports = Show;