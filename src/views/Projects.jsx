import { Container, Row, Col, Card, CardBody, CardTitle, CardFooter, Button } from 'reactstrap';
import ProjectCard from '@components/ProjectCard';
import compmanlogo from '@img/companlogo.png';

export default function Projects() {

    const projects = [
        {
            image: compmanlogo,
            link: 'https://compman.netlify.app/',
            title: 'Compman',
            subtitle: 'Dance Competition Manager',
            description: 'Utilizing the MERN stack, this application is designed to help dance competition organizers manage their events, competitors, and judges. It also provides a platform for competitors to register for events and view their scores.'
        }
    ]

    return (
        <Container>
            <h2 className="title">Projects</h2>
            <Row style={{ justifyContent: 'center' }}>
                {projects.map((project, index) => (
                    <ProjectCard key={index}
                        title={project.title}
                        subtitle={project.subtitle}
                        description={project.description}
                        image={project.image}
                        link={project.link} />
                ))
                }
            </Row>
        </Container>
    )
}
