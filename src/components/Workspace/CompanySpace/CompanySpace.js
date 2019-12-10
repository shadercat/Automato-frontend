import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import DataAccessService from "../../../services/dataAccessService";
import CompanyCard from "./CompanyCard";
import {Button, Card} from "react-bootstrap";
import PaginationMod from "../PaginationMod";

class LegacyCompanySpace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            count: 5,
            data: []
        };
        this.fetchPage = this.fetchPage.bind(this);
    }

    componentDidMount() {
        DataAccessService.getCompanies(this.state.page)
            .then((res) => {
                this.setState({
                    data: res.comp,
                    count: res.count
                });
            })
    }

    fetchPage(page) {
        DataAccessService.getCompanies(page)
            .then((res) => {
                this.setState({
                    data: res.comp,
                    count: res.count,
                    page: page
                });
            })
    }

    render() {
        const {t} = this.props;
        return (
            <div className="py-4" style={{minHeight: "90vh"}}>
                <div className="container overflow-hidden p-3 bg-light">
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>{t('compList')}</Card.Title>
                            <Card.Text>
                                {t('compListDescry')}
                            </Card.Text>
                            <Button variant="outline-info" disabled>{`${t('page')}: ${this.state.page}`}</Button>
                        </Card.Body>
                    </Card>
                    {this.state.data.map((item) =>
                        <CompanyCard
                            key={item._id}
                            item={item}
                        />
                    )}
                    <PaginationMod
                        current={this.state.page}
                        count={this.state.count}
                        limitPage={20}
                        changeHandler={this.fetchPage}
                    />
                </div>
            </div>
        );
    }
}

const CompanySpace = withTranslation()(LegacyCompanySpace);
export default CompanySpace;