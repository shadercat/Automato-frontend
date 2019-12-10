import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import AccountView from "./AccountView";
import Loader from "./Loader";
import {timeDelay} from "../constants/ConstData";
import DataAccessService from "../services/dataAccessService";
import {Accordion, Button, Card, Dropdown, DropdownButton, Form} from "react-bootstrap";
import DataPostService from "../services/dataPostService";

class LegacyAccountInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isFetching: true,
            timeDelay: true,
            timerHandler: null,
            validate: false,
            type: "owner"
        };
        this.sendChanges = this.sendChanges.bind(this);
        this.chooseType = this.chooseType.bind(this);
    }

    componentDidMount() {
        let handler = setTimeout(() => {
            this.setState({timeDelay: false})
        }, timeDelay);
        this.setState({
            timerHandler: handler
        });
        DataAccessService.getAdvUserData()
            .then((res) => {
                console.log(res);
                this.setState({
                    data: res[0],
                    type: res[0].position_type,
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

    sendChanges(event) {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const args = {
                email: form.elements.email.value.trim(),
                number: form.elements.number.value,
                name: form.elements.name.value.trim(),
                comp_description: form.elements.descry.value.trim(),
                location: form.elements.location.value.trim(),
                position_type: this.state.type
            };
            DataPostService.updateUserData(args)
                .then((res) => {

                })
                .catch((err) => {
                    alert(err);
                })
        }
        this.setState(prevState => ({
            validate: true
        }));
    }

    chooseType(val, e) {
        this.setState(prevState => ({
                type: val
            })
        )
    }

    render() {
        if (this.state.timeDelay || this.state.isFetching) {
            return <Loader/>
        }
        const {t} = this.props;
        return (
            <>
                <div className="py-4">
                    <div className="container overflow-hidden p-3 bg-light" style={{minHeight: "90vh"}}>
                        <AccountView
                            data={this.state.data}
                        />
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} block eventKey="0">
                                        {t('changeInfo')}
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Form noValidate validated={this.state.validate} onSubmit={this.sendChanges}>
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Label>{t('emailAddress')}</Form.Label>
                                                <Form.Control
                                                    name="email"
                                                    type="email"
                                                    defaultValue={this.state.data.email}
                                                    placeholder="name@example.com"/>
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Label>{t('emailAddress')}</Form.Label>
                                                <Form.Control
                                                    name="name"
                                                    type="text"
                                                    defaultValue={this.state.data.name}
                                                    placeholder="name"/>
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlInput2">
                                                <Form.Label>{t('number')}</Form.Label>
                                                <Form.Control
                                                    name="number"
                                                    type="tel"
                                                    defaultValue={this.state.data.addData.number}
                                                    pattern="^\+?3?8?(0\d{9})$"
                                                    placeholder=""/>
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Label>{t('location')}</Form.Label>
                                                <Form.Control
                                                    name="location"
                                                    defaultValue={this.state.data.addData.location}
                                                    type="text"
                                                    placeholder="location there"/>
                                            </Form.Group>
                                            <Form.Label>{t('accountType')}</Form.Label>
                                            <DropdownButton id="dropdown-variants-info" variant="outline-info"
                                                            title={t(this.state.type)}
                                                            style={{margin: "auto"}}>
                                                <Dropdown.Item
                                                    onClick={this.chooseType.bind(this, "owner")}>{t('owner')}</Dropdown.Item>
                                                <Dropdown.Item
                                                    onClick={this.chooseType.bind(this, "company")}>{t('company')}</Dropdown.Item>
                                            </DropdownButton>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>{t('descry')}</Form.Label>
                                                <Form.Control
                                                    defaultValue={this.state.data.comp_description}
                                                    name="descry"
                                                    as="textarea"
                                                    rows="6"/>
                                            </Form.Group>
                                            <Button variant="info" type="submit" block>
                                                {t('submit')}
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                    </div>
                </div>
            </>
        )
    }
}

const AccountInfo = withTranslation()(LegacyAccountInfo);
export default AccountInfo;