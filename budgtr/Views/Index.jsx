const React = require('react');
const Layout = require("./components/Layout.jsx")


class Index extends React.Component {
    render() {
        return (
            <Layout>
                <h1>budgtr</h1>
                    <nav>
                        <a href="/budget/new">Add a New Item</a>
                        <div>
                            <p>Bank Account: ${this.props.bankAccount}
                            <br /> Yikes, find a side hustle, sweetheart.
                            </p>
                        </div>
                    </nav>
                <table> 
                        {this.props.budget.map((budget, index)=>{
                            return (
                            <tr>
                                <th>{budget.date}</th>
                                <td><a href={`/budget/${index}`}>{budget.name}</a></td>
                                <td>{budget.from}</td>
                                <td>{budget.amount}</td>
                                
                            </tr>
                             )
                        })
                   
                } </table>
            </Layout>       
        )}
};

module.exports = Index;