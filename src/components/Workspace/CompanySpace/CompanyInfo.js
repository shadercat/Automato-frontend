import React, {Component} from "react";
import {withRouter} from "react-router";
import {Card, Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import Loader from "../../Loader";
import DataAccessService from "../../../services/dataAccessService";
import {withTranslation} from "react-i18next";
import {timeDelay} from "../../../constants/ConstData";

class LegacyCompanyInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isFetching: true,
            timeDelay: true,
            timerHandler: null
        }
    }

    componentDidMount() {
        let handler = setTimeout(() => {
            this.setState({timeDelay: false})
        }, timeDelay);
        this.setState({
            timerHandler: handler
        });
        DataAccessService.getCompanyInfo(this.props.match.params.id)
            .then((res) => {
                this.setState({
                    data: res[0],
                    isFetching: false
                })
            })
            .catch((err) => {
                alert(err);
            })
    }

    componentWillUnmount() {
        if (this.state.timerHandler !== null) {
            clearTimeout(this.state.timerHandler)
        }
    }

    render() {
        if (this.state.timeDelay || this.state.isFetching) {
            return <Loader/>
        }
        const data = this.state.data;
        const {t} = this.props;
        return (
            <>
                <div className="py-4">
                    <div className="container overflow-hidden p-3 bg-light" style={{minHeight: "90vh"}}>
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
                                        <ListGroupItem>{`${t('number')}: ${(data.addData) ? data.addData.number : "---"}`}</ListGroupItem>
                                        <ListGroupItem>{`${t('location')}: ${(data.addData) ? data.addData.location : "---"}`}</ListGroupItem>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        )
    }
}

const CompanyInfo = withTranslation()(LegacyCompanyInfo);
export default withRouter(CompanyInfo);