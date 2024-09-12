import { Card, CardBody, CardFooter, CardTitle, Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function ProjectCard({ title, subtitle, description, image, link, tech, concepts }) {
    return (
        <Col md="6">
            <Card className="card-profile card-plain">
                <div className="card-avatar">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img
                            alt="..."
                            src={image}
                        />
                    </a>
                </div>
                <CardBody>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <div className="author">
                            <CardTitle tag="h4">{title}</CardTitle>
                            <h6 className="card-category text-muted">
                                {subtitle}
                            </h6>
                        </div>
                    </a>
                    <p className="card-description text-center">
                        {description}
                    </p>
                    <p className="card-description text-center">
                        <strong>Tech:</strong> {tech}
                    </p>
                    <p className="card-description text-center">
                        <strong>Concepts:</strong> {concepts}
                    </p>
                </CardBody>
                <CardFooter className="text-center">
                    {/* Use Link from react-router-dom */}
                    <Link to="/projects">
                        <Button className="btn-link" color="twitter">
                            More Details
                        </Button>
                    </Link>
                    <Button
                        className="btn-link"
                        color="twitter"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Go to Deployed Project
                    </Button>
                </CardFooter>
            </Card>
        </Col>
    );
}