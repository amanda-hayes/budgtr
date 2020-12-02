const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            {/* <a href="/budget/">Go back to List</a> */}
            <h1>Add an Expense or Income <br /> hahahaha jk you know you ain't bringing in anything else</h1>
     
            <form action="/budget" method="POST">
              Name: <input type="text" name="name" /><br/>
              Date: <input type="text" name="date" /><br/>
              Amount: <input type="text" name="amount" /><br/>
              From: <input type="text" name="from" /><br/>
              <input type="submit" name="" value="Create Expense"/>
            </form>
        </div>);
    }
  }

module.exports = New;