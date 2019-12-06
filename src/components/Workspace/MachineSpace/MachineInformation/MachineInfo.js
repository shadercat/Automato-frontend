import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {withRouter} from "react-router"
import {Badge, Card, Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import MachineLogCard from "./MachineLogCard";
import DataAccessService from "../../../../services/dataAccessService";
import Loader from "../../../Loader";
import {Bar} from "react-chartjs-2";
import {tlMounth, getDataSet} from "../../../../constants/ConstData";
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
        const {t} = this.props;
        DataAccessService.getMachineStat(this.props.match.params.id)
            .then((res) => {
                let months = tlMounth(t);
                let avg = _.fill(Array(12), 0);
                let sum = avg.concat([]);
                res.forEach((item, i, arr) => {
                    let j = parseInt(item.month) - 1;
                    avg[j] = parseFloat(item.average);
                    sum[j] = parseFloat(item.sum);
                });
                let ds1 = getDataSet(t('sum'), sum, 1);
                let ds2 = getDataSet(t('avg'), avg, 2);
                this.setState({
                    chartData: {
                        labels: months,
                        datasets: [ds1, ds2]
                    }
                })
            })
            .catch((err) => {
                alert(err.toString());
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
        const {t} = this.props;
        return (
            <div className="py-4">
                <div className="container overflow-hidden p-3 bg-light" style={{minHeight: "90vh"}}>
                    <Row>
                        <Col sm="4">
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
                            </Card>

                        </Col>
                        <Col sm="8">
                            <Card>
                                <Card.Header as="h5">{t('stat')}</Card.Header>
                                <Bar
                                    data={this.state.chartData}
                                />
                            </Card>
                        </Col>
                    </Row>

                    <Card className="mb-3">
                        <Card.Header as="h5">{t('logs')}</Card.Header>
                        <div style={{overflowY: "scroll", height: "80vh"}}>
                            {this.state.logs.map((item) =>
                                <MachineLogCard
                                    key={item._id}
                                    item={item}/>
                            )}
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

const MachineInfo = withTranslation()(LegacyMachineInfo);
export default withRouter(MachineInfo);