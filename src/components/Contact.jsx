import { useInView } from 'react-intersection-observer';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../assets/Contact.css';

function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="contact" className="contact-section py-5" ref={ref}>
      <Container>
        <div className={`section-heading text-center mb-5 fade-in ${inView ? 'visible' : ''}`}>
          <h2 className="display-4 fw-bold">Get In Touch</h2>
          <p className="lead text-muted">I'd love to hear from you</p>
          <div className="divider mx-auto my-3"></div>
        </div>

        <Row className="g-4 justify-content-center">
          <Col lg={5} className={`fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="contact-info p-4 p-lg-5 rounded shadow-sm">
              <h4 className="mb-4 fw-bold">Contact Information</h4>
              
              <div className="contact-item d-flex mb-3">
                <div className="contact-icon bg-primary rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-envelope text-white"></i>
                </div>
                <div className="ms-3">
                  <h6 className="mb-0">Email</h6>
                  <a href="mailto:kalidassr280@gmail.com" className="text-decoration-none">kalidassr280@gmail.com</a>
                </div>
              </div>
              
              
              <div className="contact-item d-flex mb-4">
                <div className="contact-icon bg-primary rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-geo-alt text-white"></i>
                </div>
                <div className="ms-3">
                  <h6 className="mb-0">Location</h6>
                  <p className="mb-0">Chennai - Tamilnadu</p>
                </div>
              </div>
              
              <div className="social-links mt-4 pt-3">
                <h6 className="mb-3">Connect with me</h6>
                <div className="d-flex">
                  <a href="#" className="social-icon me-3">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="#" className="social-icon me-3">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="social-icon me-3">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="social-icon me-3">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7} className={`fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
            <div className="contact-form p-4 p-lg-5 rounded shadow-sm">
              <h4 className="mb-4 fw-bold">Send Me a Message</h4>
              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="formName" className="mb-3">
                      <Form.Label>Your Name *</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Enter your name" 
                        required 
                        className="form-control-lg"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail" className="mb-3">
                      <Form.Label>Email Address *</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="Enter your email" 
                        required 
                        className="form-control-lg"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group controlId="formSubject" className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Subject of your message" 
                    className="form-control-lg"
                  />
                </Form.Group>
                
                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    placeholder="Your message here..." 
                    required 
                    className="form-control-lg"
                  />
                </Form.Group>
                
                <div className="text-center text-md-start">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="btn-lg px-4 py-2 mt-2"
                  >
                    Send Message <i className="bi bi-send-fill ms-2"></i>
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;