import { Card, CardBody, CardFooter, CardTitle, Button, Col } from 'reactstrap';

export default function ProjectCard({ title, subtitle, description, image, link }) {
    return (
        <Col md="4">
            <Card className="card-profile card-plain">
                <div className="card-avatar">
                    <a href={link} target="_blank">
                        <img
                            alt="..."
                            src={image}
                        />
                    </a>
                </div>
                <CardBody>
                    <a href={link} target="_blank">
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
                </CardBody>
                <CardFooter className="text-center">
                    <Button
                        className="btn-link"
                        color="twitter"
                        href={link}
                        target="_blank"
                    >
                        Go to Project
                    </Button>
                </CardFooter>
            </Card>
        </Col>
    )
}
