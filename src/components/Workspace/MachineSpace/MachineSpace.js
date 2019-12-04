import React, {Component, Suspense} from "react";
import {Button, Card, Jumbotron} from "react-bootstrap";
import {withTranslation} from "react-i18next";
import Loader from "../../Loader";
import MachineList from "./MachinesList";
import {setMachinesData} from "../../../actions";
import {connect} from "react-redux";
import DataAccessService from "../../../services/dataAccessService";

class LegacyMachineSpace extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.downloadMachines = this.downloadMachines.bind(this);
    }

    componentDidMount() {
        this.downloadMachines();
    }

    downloadMachines() {
        this.setState({isDownload: true});
        DataAccessService.getMachinesData()
            .then((data) => {
                this.props.setMachines(data);
            })
            .catch((err) => {
                alert(err);
            });
    }

    render() {
        const {t} = this.props;
        return (
            <div className="py-4" style={{minHeight: "88vh"}}>
                <div className="container overflow-hidden p-3 text-center bg-light">
                    <Card className="text-center m-4">
                        <Card.Body>
                            <Card.Title>{t('yourMachine')}</Card.Title>
                            <Card.Text>
                                {t('yourMachineMainText')}
                            </Card.Text>
                            <Button variant="primary" onClick={this.downloadMachines}>
                                {t('refresh')}
                            </Button>
                        </Card.Body>
                    </Card>
                    <Suspense fallback={Loader}>
                        <MachineList/>
                    </Suspense>
                    <Jumbotron>
                        <h1>Workspace!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                    </Jumbotron>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        machines: store.machinesState.machines,
        userid: store.userdataState._id
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        setMachines: (data) => dispatch(setMachinesData(data))
    }
};
const MachineSpace = withTranslation()(LegacyMachineSpace);
export default connect(mapStateToProps, mapDispatchToProps)(MachineSpace);