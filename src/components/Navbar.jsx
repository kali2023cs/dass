import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../assets/Navbar.css';
import logo from '../assets/letter.png';



function MyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setActiveLink(link);
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`navbar-glass ${scrolled ? 'scrolled' : ''} ${expanded ? 'expanded' : ''}`}
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center" onClick={() => handleNavClick('home')}>
          <span className="logo-icon me-2">
            <img src={logo} alt="Dev Logo" style={{ height: '24px' }} />
          </span>
          <span className="logo-text">KALIDASS</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom">
          <div className={`hamburger ${expanded ? 'open' : ''}`}>
            <span className="hamburger-line line-1"></span>
            <span className="hamburger-line line-2"></span>
            <span className="hamburger-line line-3"></span>
          </div>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link 
              href="#about" 
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} 
              onClick={() => handleNavClick('about')}
            >
              <span className="nav-link-text">About</span>
            </Nav.Link>
            <Nav.Link 
              href="#skills" 
              className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`} 
              onClick={() => handleNavClick('skills')}
            >
              <span className="nav-link-text">Skills</span>
            </Nav.Link>
            <Nav.Link 
              href="#projects" 
              className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} 
              onClick={() => handleNavClick('projects')}
            >
              <span className="nav-link-text">Projects</span>
            </Nav.Link>
            <Nav.Link 
              href="#contact" 
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} 
              onClick={() => handleNavClick('contact')}
            >
              <span className="nav-link-text">Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
      {/* Decorative elements */}
      <div className="navbar-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
      </div>
    </Navbar>
  );
}

export default MyNavbar;