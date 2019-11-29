import React, {Component} from 'react';
import {Nav} from "react-bootstrap";
import {withTranslation} from "react-i18next";
import {Link, Route, Switch} from "react-router-dom";
import MachineSpace from "./MachineSpace/MachineSpace";
import CompanySpace from "./CompanySpace";
import StatisticSpace from "./StatisticSpace";
import PropTypes from "prop-types";
import {withRouter} from "react-router";
import Hello from "./Hello";


class LegacyWorkspace extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        t: PropTypes.func.isRequired
    };

    render() {
        const {t, match} = this.props;
        return (
            <div className="pt-1">
                <Nav variant="tabs" className="dark-th-color">
                    <Nav.Item>
                        <Nav.Link as={Link} to={`${match.path}/machines`} eventKey="link-1" className="dark-th-color">
                            {t('machines')}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to={`${match.path}/company`} eventKey="link-2" className="dark-th-color">
                            {t('companies')}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to={`${match.path}/statistic`} eventKey="link-3" className="dark-th-color">
                            {t('statistic')}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4">{t('actions')}</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Switch>
                    <Route path={`${match.path}/machines`}>
                        <MachineSpace/>
                    </Route>
                    <Route path={`${match.path}/company`}>
                        <CompanySpace/>
                    </Route>
                    <Route path={`${match.path}/statistic`}>
                        <StatisticSpace/>
                    </Route>
                    <Route>
                        <Hello/>
                    </Route>
                </Switch>

            </div>
        )
    }
}

const Workspace = withTranslation()(LegacyWorkspace);
export default withRouter(Workspace);