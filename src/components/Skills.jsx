import { useInView } from 'react-intersection-observer';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import '../assets/Skills.css';

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Node.js', level: 70 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Laravel', level: 95 },
  { name: 'MySQL', level: 90 },
  { name: 'Git', level: 85 },
  { name: 'Docker', level: 70 }
];

const additionalSkills = [
  'Agile Development', 'RESTful APIs', 'Codeigniter', 'Java', 
  'Jquery', 'Unit Testing', 'TypeScript', 'Redux', 
  'MongoDB', 'Scriptcase', 'Jest', 'React Testing Library'
];

function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="skills" ref={ref} className="skills-section py-5">
      <Container>
        <div className={`section-heading text-center mb-5 fade-in ${inView ? 'visible' : ''}`}>
          <h2 className="display-4 fw-bold text-primary">My Skills</h2>
          <p className="lead text-muted">Technologies I excel at</p>
          <div className="divider mx-auto my-3"></div>
        </div>
        
        <Row className="g-4 mb-5">
          {skills.map((skill, index) => (
            <Col md={6} key={index}>
              <div className={`skill-item p-4 rounded shadow-sm fade-in ${inView ? 'visible' : ''}`} 
                   style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="d-flex justify-content-between mb-2">
                  <h5 className="mb-0 fw-bold">{skill.name}</h5>
                  <span className="text-primary fw-bold">{skill.level}%</span>
                </div>
                <ProgressBar 
                  now={skill.level} 
                  label={`${skill.level}%`} 
                  visuallyHidden 
                  className="progress-custom"
                  variant="primary"
                />
              </div>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col>
            <div className={`additional-skills fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.8s' }}>
              <h4 className="mb-4 text-center fw-bold">Additional Competencies</h4>
              <div className="d-flex flex-wrap justify-content-center">
                {additionalSkills.map((skill, index) => (
                  <span key={index} className="skill-badge m-2 px-3 py-2 rounded-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;