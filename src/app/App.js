import React, {Component} from 'react';
import './App.css';
import {
    Card,
    CardBody, CardImg,
    CardLink,
    CardText,
    Col,
    Container,
    ListGroup,
    ListGroupItem,
    Row
} from "reactstrap";
import Sticky from 'react-sticky-el';

class App extends Component {
    render() {
        return (
            <div className={'my-container'}>
                <br/>
                <Container fluid={true}>
                    <Row>
                        <Col xl={{ size: 9, offset: 3 }}>
                            <Sticky scrollElement=".my-container">
                            <Card>
                                <CardBody>
                                    <CardLink href="#">Another Link</CardLink>
                                </CardBody>
                            </Card>
                            </Sticky>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={3}>
                            <ListGroup>
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map(
                                        (item, idx) => <ListGroupItem key={idx} action
                                                                      className="justify-content-between">{item}</ListGroupItem>
                                    )
                                }
                            </ListGroup>
                        </Col>
                            <Col>
                                <Sticky scrollElement=".my-container">
                                <Row>
                                    <Col>

                                    </Col>
                                </Row>
                                    <br/>
                                    <br/>
                                <Row>
                                    <Col>
                                        <Card>
                                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                            <CardBody>
                                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <CardBody>
                                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                                </Sticky>
                            </Col>
                    </Row>
                </Container>
                <br/>
            </div>
        );
    }
}

export default App;
