import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import PropTypes from "prop-types"
import {Badge, Card} from "react-bootstrap";

class LegacyMachineLogCard extends Component {
    render() {
        const {item, t} = this.props;
        return (
            <>
                <Card className="mb-2 w-100" border={(item.priority === "normal") ? "success" : "danger"}>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <Badge variant={(item.priority === "normal") ? "success" : "danger"}>
                                {item.priority}
                            </Badge>
                            &nbsp;|&nbsp;
                            <Badge variant={(item.is_resolved) ? "success" : "danger"}>
                                {item.is_resolved.toString()}
                            </Badge>
                        </Card.Title>
                        <Card.Text>
                            {`${t('descry')}: ${item.descry} `}
                        </Card.Text>
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