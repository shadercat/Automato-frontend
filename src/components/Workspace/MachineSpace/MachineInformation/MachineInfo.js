import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {withRouter} from "react-router"
import {Badge, Card, Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import MachineLogCard from "./MachineLogCard";
import DataAccessService from "../../../../services/dataAccessService";
import Loader from "../../../Loader";

class LegacyMachineInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            logs: [],
            isFetching: true,
            timeDelay: true,
            timerHandler: null
        };

    }

    componentDidMount() {
        this.setState({
            timerHandler: setTimeout(() => {
                this.setState({timeDelay: false})
            }, 500)
        });
        DataAccessService.getMachineData(this.props.match.params.id)
            .then((res) => {
                if (res !== null) {
                    this.setState({
                        data: res,
                        isFetching: false
                    });
                }
            })
            .catch((err) => {
                this.setState({
                    isFetching: false
                });
                alert(err.toString());
            });
        DataAccessService.getMachineLog(this.props.match.params.id)
            .then((res) => {
                this.setState({
                    logs: res
                })
            })
            .catch((err) => {
                alert(err.toString());
            });
    }

    componentWillUnmount() {
        if (this.state.timerHandler !== null) {
            clearTimeout(this.state.timerHandler)
        }
    }

    render() {
        const {t} = this.props;
        if (this.state.timeDelay || this.state.isFetching) {
            return <Loader/>
        }
        return (
            <div className="py-4">
                <div className="container overflow-hidden p-3 text-center bg-light" style={{minHeight: "90vh"}}>
                    <Row>
                        <Col>
                            <Card className="mb-3">
                                <Card.Header as="h5">{t('machine')}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{this.state.data.name}</Card.Title>
                                    <Badge variant={(this.state.data.state === "online") ? "success" : "dark"}>
                                        {this.state.data.state}
                                    </Badge>
                                    &nbsp;|&nbsp;
                                    <Badge variant={(this.state.data.prod_state === "warning") ? "danger" : "success"}>
                                        {this.state.data.prod_state}
                                    </Badge>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>{`mac_id: ${this.state.data.mac_id}`}</ListGroupItem>
                                </ListGroup>
                            </Card></Col>
                        <Col>
                            <Card className="mb-3">
                                <Card.Header as="h5">{t('logs')}</Card.Header>
                            </Card>
                            <div style={{overflowY: "scroll", height: "90vh"}}>
                                {this.state.logs.map((item) =>
                                    <MachineLogCard
                                        key={item._id}
                                        item={item}/>
                                )}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

const MachineInfo = withTranslation()(LegacyMachineInfo);
export default withRouter(MachineInfo);