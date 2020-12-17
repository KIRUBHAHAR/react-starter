import React, { useState } from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

const App = (props) => {

  const [employeeState, setEmployeeState] = useState(
    {
      employee: [
        {
          empName: 'Kirubhahar',
          empAge: '23',
          empJD: 'Application Developer'
        },
        {
          empName: 'Satheesh',
          empAge: '25',
          empJD: 'Mean Stack Developer'
        },
        {
          empName: 'Srinivas',
          empAge: '24',
          empJD: 'Java Developer'
        }
      ]
    }
  );

  const [employeeOrgState, setEmployeeOrgState] = useState(
    {
      companyName: "Tiger Analytics"
    }
  );

  const updateEmployeeHandler = () => {
    if(employeeOrgState.companyName === "Tiger Analytics"){
      setEmployeeOrgState({
        companyName: "Mu Sigma"
      });
    } else {
      setEmployeeOrgState({
        companyName: "Tiger Analytics"
      });
    }
  }

  const organisationChangeHandler = (event)=>{
    console.log('Event : ',event , 'Event Target : ', event.target );
    setEmployeeOrgState({
      companyName: event.target.value
    });
  }

  return (
    <div className="App">
      <h1>Hi , this is my new React Project</h1>
      <UserInput companyName={employeeOrgState.companyName} orgChange={organisationChangeHandler} />
      <button onClick={updateEmployeeHandler} >Change Organisation</button>
      <UserOutput name={employeeState.employee[0].empName} 
        age={employeeState.employee[0].empAge} job={employeeState.employee[0].empJD} 
        org={employeeOrgState.companyName} />
      <UserOutput name={employeeState.employee[1].empName} 
        age={employeeState.employee[1].empAge} job={employeeState.employee[1].empJD} 
        org={employeeOrgState.companyName}  />
      <UserOutput name={employeeState.employee[2].empName} 
        age={employeeState.employee[2].empAge} job={employeeState.employee[2].empJD} 
        org={employeeOrgState.companyName} />
    </div>
  );
}

export default App;
