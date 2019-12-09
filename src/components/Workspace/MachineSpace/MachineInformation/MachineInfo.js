import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {withRouter} from "react-router"
import {Badge, Button, Card, Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import MachineLogCard from "./MachineLogCard";
import DataAccessService from "../../../../services/dataAccessService";
import DataPostService from "../../../../services/dataPostService";
import Loader from "../../../Loader";
import {Bar} from "react-chartjs-2";
import {getDataSet, tlMounth, timeDelay} from "../../../../constants/ConstData";
import {ModalTop} from "../../../ModalWindow";
import _ from 'lodash';

class LegacyMachineInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            logs: [],
            chartData: {
                labels: [],
                datasets: []
            },
            chartData2: {
                labels: [],
                datasets: []
            },
            isFetching: true,
            timeDelay: true,
            timerHandler: null,
            showModal: false,
            showModal2: false
        };
        this.handleClose = this.handleClose.bind(this);
        this.resolveWarnings = this.resolveWarnings.bind(this);
        this.resolveWarn = this.resolveWarn.bind(this);
        this.fetchLogData = this.fetchLogData.bind(this);
        this.fetchMacData = this.fetchMacData.bind(this);
        this.fetchStatData = this.fetchStatData.bind(this);
    }

    componentDidMount() {
        let handler = setTimeout(() => {
            this.setState({timeDelay: false})
        }, timeDelay);
        this.setState({
            timerHandler: handler
        });
        this.fetchMacData();
        this.fetchLogData();
        this.fetchStatData();
    }

    componentWillUnmount() {
        if (this.state.timerHandler !== null) {
            clearTimeout(this.state.timerHandler)
        }
    }

    resolveWarnings() {
        DataPostService.resolveWarnings(this.state.data.mac_id)
            .then((res) => {
                this.setState({showModal: true});
                this.fetchMacData();
                this.fetchLogData();
            })
            .catch((err) => {
                alert(err);
            })
    }

    resolveWarn(warn_id) {
        DataPostService.resolveWarn(warn_id)
            .then((res) => {
                this.setState({showModal2: true});
                this.fetchMacData();
                this.fetchLogData();
            })
            .catch((err) => {
                alert(err);
            })
    }

    fetchMacData() {
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
    }

    fetchLogData() {
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

    fetchStatData() {
        const {t} = this.props;
        DataAccessService.getMachineStat(this.props.match.params.id)
            .then((res) => {
                let months = tlMounth(t);
                let avg = _.fill(Array(12), 0);
                let sum = avg.concat([]);
                let time = _.fill(Array(24), 0);
                res.month.forEach((item, i, arr) => {
                    let j = parseInt(item.month) - 1;
                    avg[j] = parseFloat(item.average);
                    sum[j] = parseFloat(item.sum);
                });
                res.hour.forEach((item, i, arr) => {
                    let j = parseInt(item.hour + 1) % 24;
                    time[j] = parseFloat(item.sum);
                });
                let ds1 = getDataSet(t('sum'), sum, 1);
                let ds2 = getDataSet(t('avg'), avg, 2);
                let ds3 = getDataSet(t('sum'), time, 2);
                this.setState({
                    chartData: {
                        labels: months,
                        datasets: [ds1, ds2]
                    },
                    chartData2: {
                        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
                        datasets: [ds3]
                    }
                })
            })
            .catch((err) => {
                alert(err.toString());
            })
    }

    handleClose() {
        this.setState({
            showModal: false,
            showModal2: false
        });
    }

    render() {
        if (this.state.timeDelay || this.state.isFetching) {
            return <Loader/>
        }
        const {t} = this.props;
        return (
            <>
                <ModalTop
                    show={this.state.showModal}
                    handleClose={this.handleClose}
                    headerText={t('successOp')}
                    bodyText={t('warResolved')}
                    closeText={t('close')}
                />
                <ModalTop
                    show={this.state.showModal2}
                    handleClose={this.handleClose}
                    headerText={t('successOp')}
                    bodyText={t('warResolved')}
                    closeText={t('close')}
                />
                <div className="py-4">
                    <div className="container overflow-hidden p-3 bg-light" style={{minHeight: "90vh"}}>
                        <Row className="mb-3">
                            <Col sm="4">
                                <Card className="mb-3">
                                    <Card.Header as="h5">{t('machine')}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{this.state.data.name}</Card.Title>
                                        <Badge variant={(this.state.data.state === "online") ? "success" : "dark"}>
                                            {this.state.data.state}
                                        </Badge>
                                        &nbsp;|&nbsp;
                                        <Badge
                                            variant={(this.state.data.prod_state === "warning") ? "danger" : "success"}>
                                            {this.state.data.prod_state}
                                        </Badge>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>{`mac_id: ${this.state.data.mac_id}`}</ListGroupItem>
                                    </ListGroup>
                                </Card>
                                <Card className="mb-3">
                                    <Card.Header as="h5">{t('actions')}</Card.Header>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem className="text-center">
                                            <Button onClick={this.resolveWarnings}
                                                    variant="primary">{t('resWar')}
                                            </Button>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Card>
                            </Col>
                            <Col sm="8">
                                <Card>
                                    <Card.Header as="h5">{t('stat')}</Card.Header>
                                    <Card.Body>
                                        <Card.Subtitle>{t('month')}</Card.Subtitle>
                                        <Bar
                                            data={this.state.chartData}
                                        />
                                        <Card.Subtitle>{t('time')}</Card.Subtitle>
                                        <Bar
                                            data={this.state.chartData2}
                                        />
                                    </Card.Body>

                                </Card>
                            </Col>
                        </Row>

                        <Card className="mb-3">
                            <Card.Header as="h5">{t('logs')}</Card.Header>
                            <div style={{overflowY: "scroll", height: "80vh"}}>
                                {this.state.logs.map((item) =>
                                    <MachineLogCard
                                        key={item._id}
                                        item={item}
                                        func={() => this.resolveWarn(item._id)}
                                    />
                                )}
                            </div>
                        </Card>
                    </div>
                </div>
            </>
        )
    }
}

const MachineInfo = withTranslation()(LegacyMachineInfo);
export default withRouter(MachineInfo);