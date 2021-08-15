import React from 'react';
import { Button, Form } from 'react-bootstrap';

function SignUpComp({ setUserAcive }) {

    const [email, setEmail] = React.useState("");
    const [userPwd, setUserPwd] = React.useState("");
    const [fname, setFname] = React.useState("");
    const [lname, setLname] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [age, setAge] = React.useState("");
    const [cond, setCond] = React.useState("");


    return (
        <div>
            <Form>
                <Form.Group className="sm-3" controlId="formBasicEmail">
                    <Form.Label>First Name :</Form.Label>
                    <Form.Control type="input" placeholder="Firt Name" className="textIn" value={fname} onChange={(e) => setFname(e.target.value)} />
                </Form.Group>
                <Form.Group className="sm-3" controlId="formBasicEmail">
                    <Form.Label>Last Name :</Form.Label>
                    <Form.Control type="input" placeholder="Firt Name" className="textIn" value={lname} onChange={(e) => setLname(e.target.value)} />
                </Form.Group>
                <Form.Group className="sm-3" controlId="formBasicEmail">
                    <Form.Label>Conditaion :</Form.Label>
                    <Form.Control type="input" placeholder="Firt Name" className="textIn" value={cond} onChange={(e) => setCond(e.target.value)} />
                </Form.Group>
                <Form.Group className="sm-3" controlId="formBasicEmail">
                    <Form.Label>Your Age :</Form.Label>
                    <Form.Control type="number" placeholder="Age" className="textIn" value={age} onChange={(e) => setAge(e.target.value)} min= {6} max= {120} />
                </Form.Group>
                
                <Form.Group className="sm-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className="textIn" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted emailText">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="sm-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" className="textIn" value={userPwd} onChange={(e) => setUserPwd(e.target.value)} />
                </Form.Group>
            </Form>
        </div>
    );
}

export default SignUpComp;