import { Container, Row, Col, Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import '../assets/About.css';
import profile from '../assets/newone.jpg';

function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="about-section" ref={ref}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className={`order-lg-1 order-2 ${inView ? 'animate__animated animate__fadeInLeft' : ''}`}>
            <div className="content-wrapper">
              <h2 className="display-4 fw-bold mb-4">
                <span className="gradient-text typing-animation">Full Stack Developer</span>
              </h2>
              <p className="lead text-muted mb-4">
                I create <span className="highlight-text">beautiful</span>, <span className="highlight-text">functional</span>, and <span className="highlight-text">user-friendly</span> digital experiences.
              </p>
              <p className="mb-4 animated-underline">
                With over 2 years of experience in web development, I specialize in building responsive web applications using modern technologies like React, Node.js, and Laravel. My passion lies in creating efficient, scalable solutions that deliver real value to users.
              </p>
              <p className="mb-5 animated-underline">
                When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new frameworks. I believe in continuous learning and staying updated with the latest industry trends.
              </p>
              <div className="d-flex gap-3 button-group">
                <Button href="#contact" variant="primary" size="lg" className="pulse-button">
                  Hire Me
                </Button>
                <Button href="#" variant="outline-primary" size="lg" className="glow-on-hover">
                  Download CV
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={6} className={`order-lg-2 order-1 mb-4 mb-lg-0 ${inView ? 'animate__animated animate__fadeInRight' : ''}`}>
            <div className="image-container">
              <div className="profile-image-wrapper">
                <img 
                  src={profile} 
                  alt="Developer working" 
                  className="profile-image"
                />
                <div className="experience-badge">
                  <span className="fw-bold">2+ Years</span> Experience
                </div>
                <div className="tech-stack-badge">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Laravel</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;