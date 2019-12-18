import React, {Component} from "react";
import {Card, Jumbotron} from "react-bootstrap";
import {withTranslation} from "react-i18next";
import CreateMachineBlock from "./CreateMachineBlock";
import DeleteMachineBlock from "./DeleteMachineBlock";
import BindMachineBlock from "./BindMachineBlock";
import UnbindMachineBlock from "./UnbindMachineBlock";
import DeleteMachineLogsBlock from "./DeleteMachineLogsBlock";

class LegacyActionSpace extends Component {
    render() {
        const {t} = this.props;
        return (
            <div className="py-4">
                <div className="container overflow-hidden p-3 bg-light">
                    <Card bg="secondary" text="white" className="mb-3">
                        <Card.Header>{t('actions')}</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}{t('actionsDescry')}{' '}
                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    <CreateMachineBlock/>
                    <BindMachineBlock/>
                    <UnbindMachineBlock/>
                    <DeleteMachineLogsBlock/>
                    <DeleteMachineBlock/>
                    <Jumbotron>
                        <h1>{t('actions')}</h1>
                        <p>
                            {t('actionDescry')}
                        </p>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}

const ActionSpace = withTranslation()(LegacyActionSpace);
export default ActionSpace;