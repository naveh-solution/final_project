import React from 'react';
import { Button, Form, Col, Row, ButtonGroup, Container, ThemeProvider } from 'react-bootstrap';
import './signUpComp.css'

function SignUpComp({ addUser, userActive }) {

    const [email, setEmail] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const [fname, setFname] = React.useState("");
    const [lname, setLname] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [age, setAge] = React.useState("");
    const [cond, setCond] = React.useState("");


    const createUser = () => {
        console.log(gender)
        const newUser = {
        fname,
        lname,
        email,
        gender,
        age, 
        pwd,
        cond
        }

        addUser(newUser)

    }

       

    return (
        <div className="mainSignup-cp">
            <Form className="formDiv">
                <Container>
                    <Row>
                        <Col>
                            <Form.Group className="sm-3" controlId="formBasicFname">
                                <Form.Label>First Name :</Form.Label>
                                <Form.Control type="input" placeholder="Firt Name" className="textIn" value={fname}
                                    onChange={(e) => setFname(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="sm-3" controlId="formBasicLname">
                                <Form.Label>Last Name :</Form.Label>
                                <Form.Control type="input" placeholder="Last Name" className="textIn" value={lname}
                                    onChange={(e) => setLname(e.target.value)} />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="sm-3" controlId="formBasicAge">
                                <Form.Label>Your Age :</Form.Label>
                                <Form.Control type="number" placeholder="Age" className="textIn" value={age}
                                    onChange={(e) => setAge(e.target.value)} min={6} max={120} />
                            </Form.Group>
                            <Form.Group className="sm-3" controlId="formBasicGender">
                                <ButtonGroup size="sm">
                                    <ThemeProvider prefixes={{btn : "my-btn"}}>
                                    <Button onClick={(e) => (setGender(e.target.value))} value="Feamle">Female</Button>
                                    <Button onClick={(e) => (setGender(e.target.value))} value="Male">Male</Button>
                                    <Button onClick={(e) => (setGender(e.target.value))} value="Other">Other</Button>
                                    </ThemeProvider>
                                </ButtonGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="sm-3" controlId="formBasicCond">
                                <Form.Label>Conditaion :
                                    <span className="textInCon"> (e.g C.F.S, E.D.S, Fibromialgya ect.)</span>
                                </Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Conditaion" className="textIn" value={cond}
                                    onChange={(e) => setCond(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="sm-3 me" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" className="textIn" value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="sm-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" className="textIn" value={pwd}
                                    onChange={(e) => setPwd(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Form>
            <div className="d-flex justify-content-end btnDiv">
            <ThemeProvider prefixes={{ btn: 'my-btn' }}>
                <Button  className="signupBtn" onClick={() => createUser()}>Sign-Up</Button>
                <Button  className="signupCBtn">Cancel</Button>
                </ThemeProvider>{' '}
            </div>
        </div>
    );
}

export default SignUpComp;