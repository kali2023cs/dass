import { useInView } from 'react-intersection-observer';
import { Container, Row, Col, Card, Tab, Tabs } from 'react-bootstrap';
import '../assets/Projects.css';

const projects = [
  {
    id: 1,
    title: "Hotel Management System",
    description: "A comprehensive hotel booking and management platform with admin dashboard, room booking, and payment integration.",
    technologies: ["Laravel", "MySQL", "Jquery", "Firebase", "JWT", "API"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    links: {
      demo: "#",
      code: "#"
    },
    category: "web"
  },
 {
  id: 2,
    title: "Courier Management App",
    description: "A web-based system for managing courier bookings, package tracking, delivery status updates, and user notifications with real-time logistics data.",
    technologies: ["React", "Laravel", "MySQL", "Redux", "Firebase Cloud Messaging"],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec",
    links: {
      demo: "#",
      code: "#"
    },
    category: "web"
  },
  {
  "id": 3,
  "title": "Travel Booking CRM",
  "description": "A centralized platform for managing travel bookings, customer interactions, itineraries, payments, and agent coordination in real-time.",
  "technologies": ["React", "Laravel", "Material UI", "Context API"],
  "image": "https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "links": {
    "demo": "#",
    "code": "#"
  },
  "category": "web"
},
];

function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="projects" className="projects-section py-5" ref={ref}>
      <Container>
        <div className={`section-heading text-center mb-5 fade-in ${inView ? 'visible' : ''}`}>
          <h2 className="display-4 fw-bold">Featured Projects</h2>
          <p className="lead text-muted">Some of my best work</p>
          <div className="divider mx-auto my-3"></div>
        </div>

        <div className={`fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <Tabs 
            defaultActiveKey="all" 
            id="project-tabs" 
            className="mb-4 justify-content-center custom-tabs"
          >
            <Tab eventKey="all" title="All Projects" className="pt-4">
              <ProjectGrid projects={projects} inView={inView} />
            </Tab>
            <Tab eventKey="web" title="Web Applications" className="pt-4">
              <ProjectGrid projects={projects.filter(p => p.category === 'web')} inView={inView} />
            </Tab>
            <Tab eventKey="mobile" title="Mobile Apps" className="pt-4">
              <ProjectGrid projects={projects.filter(p => p.category === 'mobile')} inView={inView} />
            </Tab>
          </Tabs>
        </div>

        <div className={`text-center mt-5 fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
          <a href="#" className="btn btn-primary btn-lg px-4 py-2">
            View All Projects <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </Container>
    </section>
  );
}

const ProjectGrid = ({ projects, inView }) => (
  <Row className="g-4">
    {projects.map((project, index) => (
      <Col lg={4} md={6} key={project.id}>
        <div className={`fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${index * 0.2}s` }}>
          <ProjectCard project={project} />
        </div>
      </Col>
    ))}
  </Row>
);

const ProjectCard = ({ project }) => (
  <Card className="h-100 project-card">
    <div className="card-img-container">
      <Card.Img variant="top" src={project.image} alt={project.title} />
      <div className="card-overlay"></div>
    </div>
    <Card.Body>
      <Card.Title className="fw-bold">{project.title}</Card.Title>
      <Card.Text className="text-muted">{project.description}</Card.Text>
      <div className="mb-3">
        {project.technologies.map((tech, i) => (
          <span key={i} className="badge tech-badge me-1 mb-1">{tech}</span>
        ))}
      </div>
    </Card.Body>
    <Card.Footer className="bg-transparent border-top-0 pt-0">
      <div className="d-flex justify-content-between">
        <a href={project.links.demo} className="btn btn-outline-primary btn-sm flex-grow-1 me-2">
          <i className="bi bi-eye-fill me-1"></i> Live Demo
        </a>
        <a href={project.links.code} className="btn btn-primary btn-sm flex-grow-1">
          <i className="bi bi-code-slash me-1"></i> View Code
        </a>
      </div>
    </Card.Footer>
  </Card>
);

export default Projects;