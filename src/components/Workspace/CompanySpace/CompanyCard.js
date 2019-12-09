import React, {Component} from "react";
import {Card} from "react-bootstrap";
import {HashLink as Link} from "react-router-hash-link";
import {withRouter} from "react-router-dom";
import {withTranslation} from "react-i18next";

class LegacyCompanyCard extends Component {
    render() {
        const {item, t, match} = this.props;
        return (
            <>
                <Card className="mb-2">
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <Card.Link as={Link} to={`${match.url}/${item.email}#top`}>
                                {`${t('watch')} ==> ${item.email}`}
                            </Card.Link>
                        </Card.Title>
                        <Card.Text>
                            {item.comp_description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

const CompanyCard = withTranslation()(LegacyCompanyCard);
export default withRouter(CompanyCard);