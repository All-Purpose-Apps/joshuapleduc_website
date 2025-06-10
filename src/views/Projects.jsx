import { Container } from 'reactstrap'
import { projects } from '@data/projects';
import ProjectDetails from '../components/ProjectDetails';

export default function Projects() {

    return (
        <div className="wrapper section-dark">
            <Container style={{ paddingTop: '20px', paddingBottom: '100px' }}>
                <h2 style={{ margin: '0px', paddingTop: '50px', color: 'white' }}>Projects</h2>
                <div style={{ width: '100%', height: '1px', backgroundColor: 'white', margin: '0 auto', marginBottom: '50px' }}>
                </div>
                {projects.map((project, index) => {
                    return <ProjectDetails key={index} {...project} />
                })}
            </Container >
        </div >
    )
}