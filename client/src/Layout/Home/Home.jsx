import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import { PropagateLoader } from 'react-spinners';
// Components
import Student from '../../Components/Students/Students'

class Home extends Component {
  state = {
    data: null,
    allStudents: null,
    error: ""
  };

  async componentDidMount() {
    try {
      const students = await axios("/api/Students");
      this.setState({ data: students.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  render() {

    let students;

    if (this.state.data)
      students =
        this.state.data.students &&
        this.state.data.students.map(student => (
          <Student key={student._id} {...student} removeStudent={this.removeStudent} />
        ));
    else return <div className="Spinner-Wrapper"> <PropagateLoader color={'#333'} /> </div>;

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.students.length)
        return <h1 className="No-Students">No students!</h1>;

        console.log(students);

    return (
      <div className="Table-Wrapper">
        <h1>Students:</h1>

        <table className="Table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Enrollment Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{students}</tbody>
        </table>
      </div>
    );
  }
}

export default Home;