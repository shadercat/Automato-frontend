import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import PropTypes from "prop-types"
import {Badge, Card} from "react-bootstrap";
import {HashLink as Link} from "react-router-hash-link";
import {withRouter} from "react-router";

class LegacyMachineCard extends Component {
    render() {
        const {item, t, match} = this.props;
        return (
            <>
                <Card border={(item.state === "offline") ? "dark" :
                    (item.prod_state === "normal") ? "success" : "danger"}>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Body style={{padding: "20px 5px"}}>
                        <Card.Title>
                            <Badge variant={(item.state === "online") ? "success" : "dark"}>
                                {item.state}
                            </Badge>
                            &nbsp;|&nbsp;
                            <Badge variant={(item.prod_state === "warning") ? "danger" : "success"}>
                                {item.prod_state}
                            </Badge>
                        </Card.Title>
                        <Card.Text>
                            {`mac_id: ${item.mac_id} `}
                        </Card.Text>
                        <Card.Link as={Link} to={`${match.url}/${item.mac_id}#top`}>{t('moreInfo')}</Card.Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{item.owner_data.email}</small>
                    </Card.Footer>
                </Card>
            </>
        )
    }
}

LegacyMachineCard.propTypes = {
    t: PropTypes.func.isRequired
};
const MachineCard = withTranslation()(LegacyMachineCard);
export default withRouter(MachineCard);