import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import PropTypes from "prop-types"
import {Badge, Card, Accordion, Button} from "react-bootstrap";

class LegacyMachineLogCard extends Component {
    constructor(props) {
        super(props);
        this.infoToString = this.infoToString.bind(this);
    }

    infoToString(item, t) {
        switch (item.op_type) {
            case 'sell':
                return (`${item.descry}. ${t('price')}: ${item.data.price}. ${t('product')}: ${item.data.product}`);
            case 'error':
                return (`${item.descry}. ${t('lastMod')}: ${Date(item.updatedAt).toString()}`);
            default:
                return item.descry;
        }
    }

    render() {
        const {item, t, func} = this.props;
        const resBtn = (item.is_resolved) ? (<> </>) : (<Button size="sm" onClick={func}>{t('resolved')}</Button>);
        return (
            <>
                <Card className="mb-2 w-100" border={(item.priority === "normal") ? "success" : "danger"}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2">
                            <Badge variant={(item.priority === "normal") ? "success" : "danger"}>
                                {item.priority}
                            </Badge>
                            &nbsp;|&nbsp;
                            <Badge variant={(item.is_resolved) ? "success" : "danger"}>
                                {item.is_resolved.toString()}
                            </Badge>
                        </Card.Subtitle>
                        <Accordion>
                            <Card.Text>
                                {`${t('opType')}: ${item.op_type} `}
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    {t('moreInfo')}
                                </Accordion.Toggle>
                            </Card.Text>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Card.Text>
                                        {`${t('descry')}: ${this.infoToString(item, t)}`}
                                    </Card.Text>
                                    {resBtn}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Accordion>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{new Date(item.date).toString()}</small>
                    </Card.Footer>
                </Card>
            </>
        )
    }
}

LegacyMachineLogCard.propTypes = {
    t: PropTypes.func.isRequired
};
const MachineLogCard = withTranslation()(LegacyMachineLogCard);
export default MachineLogCard;