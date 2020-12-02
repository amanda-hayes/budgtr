const React = require('react');
const Layout = require("./components/Layout.jsx")


class Index extends React.Component {
    render() {
        return (
            <Layout>
                <h1>Budgeting</h1>
                    <nav>
                        <a href="/budget/new">Add a New Item</a>
                    </nav>
                <table> 
                        {this.props.budget.map((budget, index)=>{
                            return (
                            <tr>
                                <th>{budget.date}</th>
                                <td>{budget.name}</td>
                                <td>{budget.from}</td>
                                <td>{budget.amount}</td>
                                <td><a href={`/budget/${index}`}>See More</a></td>
                            </tr>
                             )
                        })
                   
                } </table>
            </Layout>       
        )}
};

module.exports = Index;