import React, {Component} from "react";
import {withRouter} from "react-router";
import Loader from "../../Loader";
import DataAccessService from "../../../services/dataAccessService";
import {withTranslation} from "react-i18next";
import {timeDelay} from "../../../constants/ConstData";
import AccountView from "../../AccountView";

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
        return (
            <>
                <div className="py-4">
                    <div className="container overflow-hidden p-3 bg-light" style={{minHeight: "90vh"}}>
                        <AccountView
                            data={this.state.data}
                        />
                    </div>
                </div>
            </>
        )
    }
}

const CompanyInfo = withTranslation()(LegacyCompanyInfo);
export default withRouter(CompanyInfo);