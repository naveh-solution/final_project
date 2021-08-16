import React from 'react';
import { Button, Form, ThemeProvider } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import './loginComp.css';

function LoginComp({ users, login, userActive }) {
    const [email, setEmail] = React.useState("");
    const [userPwd, setUserPwd] = React.useState("");



    function loginB() {
        const newUserActive = users.find(user => user.email === email && user.pwd === userPwd)
        if (newUserActive) {
            console.log(newUserActive)
            login(newUserActive)
        }
    }

    function redair(){
        return <Redirect to="/sign-up"/>
    }

    if(userActive){
        return <Redirect to="/diarys"/>
    }

    return (
        <div className="login-cp">
            <h4>Login to your Dairy</h4>
            <p className="signupText">or <Link to="/sign-up">you can Signup here</Link> to start creating your own</p>
            <Form>
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
                <div className="loginSignup">
                <ThemeProvider prefixes={{ btn: 'my-btn' }}>
                    <Button variant="success" className="buttonBg" type="button" onClick={loginB}>
                        LOG-IN
                    </Button> 
                    <Button variant="success" className="buttonBg" type="button" onClick={redair}>
                        SIGN-UP
                    </Button>
                    </ThemeProvider>
                </div>
            </Form>
        </div>
    );
}

export default LoginComp;