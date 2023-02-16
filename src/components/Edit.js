import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';


function Edit() {

      const [id,setId]=useState('');
      const [empname,setEmpname]=useState('');
      const [age,setAge]=useState('');
      const [designation,setDesignation]=useState('');
      const [salary,setSalary]=useState('');
useEffect(()=>{
  setId(localStorage.getItem('ID'))
  setEmpname(localStorage.getItem('NAME'))
  setAge(localStorage.getItem('AGE'))
  setDesignation(localStorage.getItem('DESIGNATION'))
  setSalary(localStorage.getItem('SALARY'))
},[])
  console.log(id);
  console.log(empname);

var index = Employee.map(item=>item.id).indexOf(id);
console.log(index);

let history=useNavigate()
const handleUpdate=(e)=>{
  e.preventDefault(); // Avoid refreshing
  console.log(e);//event
  let emp=Employee[index]
  console.log(emp);//full details of employee
  emp.id=id; // emp.id is id seen in cosole then it assigned to id
  emp.empname=empname;
  emp.designation=designation;
  emp.age=age;
  emp.salary=salary;
  console.log(emp); // here we can see the updated details of employee

  history('/')

}

  return (
    <>
        <h1 className='text-primary text-center m-4'>Update Employee Management System</h1>
        <p className='p-3'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency.</p>

          <Row>
            <Col md={4}>
            <img width={'400'} src='https://th.bing.com/th/id/OIP.bcjKRTUuoEFqfGKEF0RucAHaHa?pid=ImgDet&w=256&h=256&rs=1' alt=''/>
            </Col>
           
            <Col md={7}>
            <Form className='border border-3 p-5'>
      <Form.Group className="mb-3">
        <Form.Label>ID</Form.Label>
        <Form.Control type="email" placeholder="Enter your ID" 
        value={id}
        onChange={(e)=>setId(e.target.value)}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter your Name" 
        value={empname}
        onChange={(e)=>setEmpname(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="email" placeholder="Enter your Age" 
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="email" placeholder="Enter your Designation" 
        value={designation}
        onChange={(e)=>setDesignation(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="email" placeholder="Enter your Salary" 
        value={salary}
        onChange={(e)=>setSalary(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={(e)=>handleUpdate(e)}>
        Update
      </Button>
    </Form>
            </Col>
          </Row> 
    </>
  )
}

export default Edit