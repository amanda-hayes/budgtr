const React = require("react");
const Layout = require("./components/Layout.jsx")

class Show extends React.Component {
    render(){
        const budget = this.props.budget;
        return (
            <Layout>
                <a href="/budget/">Go back to List</a>
                <h1>{budget.name}</h1>
                <table>
                <tr>
                    <th>Date</th>
                    <td>{budget.date}</td>
                </tr>
                <tr>
                    <th>From</th>
                    <td>{budget.from}</td>
                </tr>
                <tr>
                    <th>Amount</th>
                    <td>{budget.amount}</td>
                </tr>
                </table>
            </Layout>
        )
    }
}
module.exports = Show;