import { Container, Row } from 'reactstrap';
import ProjectCard from '@components/ProjectCard';
import { projects } from '@data/projects';

export default function ProjectsRow() {

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
                        link={project.link}
                        tech={project.tech}
                        concepts={project.concepts}
                    />

                ))
                }
            </Row>
        </Container>
    )
}
