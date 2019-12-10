import React, {Component} from "react";
import {Card} from "react-bootstrap";
import {withTranslation} from "react-i18next";
import {Doughnut} from "react-chartjs-2";
import DataAccessService from "../../../services/dataAccessService";
import {timeDelay, getDoughnutDatasets} from "../../../constants/ConstData";
import Loader from "../../Loader";

class LegacyStatisticSpace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData1: {
                labels: [],
                datasets: []
            },
            chartData2: {
                labels: [],
                datasets: []
            },
            chartData3: {
                labels: [],
                datasets: []
            },
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
        DataAccessService.getStatistic()
            .then((res) => {
                let labels1 = [];
                let ds1 = [];
                let ds2 = [];
                let ds3 = [];
                res.forEach((item) => {
                    labels1.push(item._id);
                    ds1.push(item.average);
                    ds2.push(item.sum);
                    ds3.push(item.count);
                });
                let sets = getDoughnutDatasets([ds1, ds2, ds3]);
                this.setState({
                    chartData1: {
                        labels: labels1,
                        datasets: [sets[0]]
                    },
                    chartData2: {
                        labels: labels1,
                        datasets: [sets[1]]
                    },
                    chartData3: {
                        labels: labels1,
                        datasets: [sets[2]]
                    },
                });
                this.setState({isFetching: false});
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
        const {t} = this.props;
        return (
            <div className="py-4">
                <div className="container overflow-hidden p-3 text-center bg-light">
                    <Card className="mb-3">
                        <Card.Header>
                            {t('sum')}
                        </Card.Header>
                        <Card.Body>
                            <Doughnut data={this.state.chartData2}/>
                        </Card.Body>
                    </Card>
                    <Card className="mb-3">
                        <Card.Header>
                            {t('avg')}
                        </Card.Header>
                        <Card.Body>
                            <Doughnut data={this.state.chartData1}/>
                        </Card.Body>
                    </Card>
                    <Card className="mb-3">
                        <Card.Header>
                            {t('count')}
                        </Card.Header>
                        <Card.Body>
                            <Doughnut data={this.state.chartData3}/>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

const StatisticSpace = withTranslation()(LegacyStatisticSpace);
export default StatisticSpace;