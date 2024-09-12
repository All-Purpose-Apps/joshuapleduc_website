import { Button, Col, Row } from "reactstrap";

export default function Highlights() {
    return (
        <Row>
            <Col md="3">
                <div className="info">
                    <div className="icon icon-danger">
                        <i className="nc-icon nc-palette" />
                    </div>
                    <div className="description">
                        <h4 className="info-title">Beautiful Gallery</h4>
                        <p className="description">
                            Spend your time generating new ideas. You don't have to
                            think of implementing.
                        </p>
                        <Button
                            className="btn-link"
                            color="danger"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            See more
                        </Button>
                    </div>
                </div>
            </Col>
            <Col md="3">
                <div className="info">
                    <div className="icon icon-danger">
                        <i className="nc-icon nc-bulb-63" />
                    </div>
                    <div className="description">
                        <h4 className="info-title">New Ideas</h4>
                        <p>
                            Larger, yet dramatically thinner. More powerful, but
                            remarkably power efficient.
                        </p>
                        <Button
                            className="btn-link"
                            color="danger"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            See more
                        </Button>
                    </div>
                </div>
            </Col>
            <Col md="3">
                <div className="info">
                    <div className="icon icon-danger">
                        <i className="nc-icon nc-chart-bar-32" />
                    </div>
                    <div className="description">
                        <h4 className="info-title">Statistics</h4>
                        <p>
                            Choose from a veriety of many colors resembling sugar
                            paper pastels.
                        </p>
                        <Button
                            className="btn-link"
                            color="danger"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            See more
                        </Button>
                    </div>
                </div>
            </Col>
            <Col md="3">
                <div className="info">
                    <div className="icon icon-danger">
                        <i className="nc-icon nc-sun-fog-29" />
                    </div>
                    <div className="description">
                        <h4 className="info-title">Delightful design</h4>
                        <p>
                            Find unique and handmade delightful designs related items
                            directly from our sellers.
                        </p>
                        <Button
                            className="btn-link"
                            color="danger"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            See more
                        </Button>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
