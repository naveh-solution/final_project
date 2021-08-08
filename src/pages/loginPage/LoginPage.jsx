import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import './loginPage.css'


function LoginPage({users}) {

    const [email, setEmail] = React.useState("");
    const [userPwd, setUserPwd] = React.useState("");

    function login(){
        const useractive = users.find(user => user.email === email || user.fname === email && user.Pwd === userPwd)

        if (useractive){
            alert("user is active");
            <Redirect to="/dairys"/>
        }
    }




    return (
        <div className="login-p">
            <h1>Login to your Daierys</h1>
            <p>or <Link to="/signup">you can Signup here</Link> to start creating your own</p>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className="textIn" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  className="textIn" value={userPwd} onChange={(e) => setUserPwd(e.target.value)}/>
                </Form.Group>
                <Button variant="success" className="bg" type="button" onClick={login}>
                    LOG-IN
                </Button>
            </Form>
        </div>
    );
}

export default LoginPage;