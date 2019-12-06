import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import PropTypes from "prop-types"
import {Badge, Card, Accordion, Button} from "react-bootstrap";

class LegacyMachineLogCard extends Component {
    render() {
        const {item, t} = this.props;
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
                                <Card.Text>
                                    {`${t('descry')}: ${item.descry}`}
                                </Card.Text>
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