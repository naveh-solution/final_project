import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div className="login-p">
            <h1>Login to your Daierys</h1>
            <p>or <Link to="/signup">you can Signup here</Link> to start creating your own</p>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="button">
                    LOG-IN
                </Button>
            </Form>
        </div>
    );
}

export default LoginPage;