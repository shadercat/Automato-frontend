import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {Card, Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";

class LegacyAccountView extends Component {
    render() {
        const {t, data} = this.props;
        return (
            <>
                <Row className="mb-3">
                    <Col sm="4">
                        <Card className="mb-3">
                            <Card.Header as="h5">{data.name}</Card.Header>
                            <Card.Body>
                                <Card.Title>{t(`${data.position_type}`)}</Card.Title>
                                <Card.Text>{`${t('createTime')}: ${new Date(data.create_time).toString()}`}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{data.email}</ListGroupItem>
                            </ListGroup>
                        </Card>

                    </Col>
                    <Col sm="8">
                        <Card>
                            <Card.Header as="h5">{t('info')}</Card.Header>
                            <Card.Body>
                                <Card.Text>{`${t('descry')}: ${data.comp_description}`}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{`${t('numberOfMac')}: ${data.machines}`}</ListGroupItem>
                                <ListGroupItem>{`${t('number')}: ${(data.addData !== undefined) ? data.addData.number : "---"}`}</ListGroupItem>
                                <ListGroupItem>{`${t('location')}: ${(data.addData !== undefined) ? data.addData.location : "---"}`}</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}

const AccountView = withTranslation()(LegacyAccountView);
export default AccountView;