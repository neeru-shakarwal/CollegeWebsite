import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { Navbarpage } from './navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';



export function ContactUs() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState("");

  const [remarks, setRemark] = useState("");
  const [remarkError, setRemarkError] = useState("");

  const [validated, setValidated] = useState(false);
  // const [clear, setClear] = useState(false);

  const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    //     }
    if (
      name === "" ||
      phone === "" ||
      email === "" ||
      subject === "" ||
      remarks === ""
    ) {
      alert("Please fill all the fields");
    }
    else {
      setValidated(true);

    }
  }

  const Handleclear = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setRemark("");
    setValidated(false);

  }











  const HandleChange = (e) => {
    if (e.target.name === "yname") {
      setName(e.target.value);
      console.log(e.target.value);
      if (e.target.value === "") {
        setNameError("Name cannot be empty");
      }
      else if (e.target.value.length < 3) {
        setNameError("Name should be at least 3 characters");
      }
      else {
        setNameError('');
      }
    }

    if (e.target.name === "email") {
      setEmail(e.target.value);
      const regx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if (e.target.value === "") {
        setEmailError("Please enter your email");
      } else if (!regx.test(e.target.value)) {
        setEmailError("Invalid email");
      } else {
        setEmailError("");
      }

    }

    if (e.target.name === "phone") {
      setPhone(e.target.value);
      const regx = /^[0-9]{10}$/;
      if (e.target.value === "") {
        setPhoneError("Please enter your phone number");
      }
      else if (!regx.test(e.target.value)) {
        setPhoneError("Invalid phone number");
      }
      else {
        setPhoneError("");
      }

    }

    if (e.target.name === "subject") {
      setSubject(e.target.value);
      if (e.target.value === "") {
        setSubjectError("Please enter your subject");
      }
      else {
        setSubjectError("");
      }


    }

    if (e.target.name === "remark") {
      setRemark(e.target.value);
      if (e.target.value === "") {
        setRemarkError("Please enter your remark");
      }
      else {
        setRemarkError("");
      }

    }



  }





  return (
    <>
      <Header />
      <Navbarpage />
      <Container className='field1'>
        <Row>
          <Col md={6}>


            <h3 >Send Us a Message</h3>

            <Form noValidate validated={validated} >
              <Row className="mb-3">
                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control
                    required
                    name="yname"
                    type="text"
                    placeholder="First name"
                    value={name}
                    onChange={HandleChange}
                    className='input-field'

                  />
                </Form.Group>
                <br />
                <span style={{ color: 'red' }}>{nameError}</span>
                <Form.Group md="4" controlId="validationCustom02">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    required
                    name='phone'
                    type="tel"
                    placeholder="Contact Number"
                    value={phone}
                    onChange={HandleChange}
                    className='input-field'
                  />
                </Form.Group>
                <span style={{ color: 'red' }}>{phoneError}</span>
                <Form.Group md="4" controlId="validationCustomUsername">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name='email'
                    type="text"
                    placeholder="Email Address"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={email}
                    onChange={HandleChange}
                    className='input-field'
                  />

                </Form.Group>
              </Row>
              <span style={{ color: 'red' }}>{emailError}</span>
              <Row className="mb-3">
                <Form.Group md="6" controlId="validationCustom03">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="subject" required
                    name='subject'
                    value={subject}
                    onChange={HandleChange}
                    className='input-field'
                  />
                </Form.Group>
                <span style={{ color: 'red' }}>{subjectError}</span>
                <Form.Group md="4" controlId="validationCustom02">
                  <Form.Label>Remarks</Form.Label>
                  <Form.Control
                    required
                    name='remark'
                    type="text"
                    placeholder="remarks"
                    value={remarks}
                    onChange={HandleChange}
                    className='input-field'
                  />
                </Form.Group>
                <span style={{ color: 'red' }}>{remarkError}</span>

              </Row>
            
              <Button type="submit" onClick={handleSubmit} className='btn'>Submit form</Button>
              <Button type="submit" onClick={Handleclear} className='clear '>Clear</Button>

            </Form>

          </Col>
          {!validated ? "" : <>
            <Col md={6} >
              <h3>Form Summary</h3>
              <span className='mt-8'>Name: {name},</span>
              <hr />
              <span> Contact Number : {phone},</span>
              <hr />
              <span>Email: {email},</span>
              <hr />
              <span>Subject: {subject},</span>
              <hr />
              <span> Remarks: {remarks}</span>
              < hr />
            </Col>



          </>}
        </Row>
      </Container>
      <Container  >
        <Row style={{border:'0px solid',marginBottom:'3rem',height:'60vh',marginTop:'1rem'}}>
          <Col md={6} className='mt-4 mb-4'>
            <h3>Introduction</h3>
            Maharaja Agrasen Institute of Management and Technology, Agrasen Chowk, Old Saharanpur Road, Near Sector-15,
            Jagadhri, Yamuna Nagar-135003
            <br />
            <br />
            Director: director@maimt.com
            <br />
            +918222948280 (Director)
            <br />
            +918222948278 (HOD Comp. App.)
            <br />
            +918222948279 (HOD Management)


            <br />
            <br />

            <span style={{ fontWeight: 'bolder' }}>HELPLINE </span>
            <br />
            01732-235255
            <br />
            01732-231362
          </Col>
        </Row>
      </Container>
      <Footer />
    </>

  );
}
