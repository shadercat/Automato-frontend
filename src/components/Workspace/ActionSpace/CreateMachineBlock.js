import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {Form, InputGroup, Button, Col, Card} from "react-bootstrap";
import DataPostService from "../../../services/dataPostService";
import {ModalTop} from "../../ModalWindow";

class LegacyCreateMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validate: false,
            showSuccessModal: false,
            showFailedModal: false,
            failText: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleModalClose() {
        this.setState({
            showSuccessModal: false,
            showFailedModal: false
        });
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const args = {
                mac_id: form.elements.macId.value.trim(),
                code: form.elements.code.value.trim(),
                name: form.elements.macName.value.trim()
            };
            DataPostService.createMachine(args)
                .then((res) => {
                    this.setState({showSuccessModal: true});
                })
                .catch((err) => {
                    this.setState({
                        showFailedModal: true,
                        failText: err.toString()
                    })
                })
        }
        this.setState(prevState => ({
            validate: true
        }));
    }

    render() {
        const {t} = this.props;
        return (
            <>
                <ModalTop
                    headerText={t('successOp')}
                    bodyText={t('macCreated')}
                    closeText={t('close')}
                    handleClose={this.handleModalClose}
                    show={this.state.showSuccessModal}
                />
                <ModalTop
                    headerText={t('failOp')}
                    bodyText={t(this.state.failText)}
                    closeText={t('close')}
                    handleClose={this.handleModalClose}
                    show={this.state.showFailedModal}
                />
                <Card className="mb-3" border="dark">
                    <Card.Header>{t('addMachine')}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <Form noValidate validated={this.state.validate} onSubmit={this.handleSubmit}
                                  className="my-4">
                                <Form.Row>
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Label>Mac_id</Form.Label>
                                        <Form.Control
                                            required
                                            name="macId"
                                            type="text"
                                            placeholder={t('machineId')}
                                        />
                                        <Form.Control.Feedback>{t('looksGood')}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="validationCustom02">
                                        <Form.Label>Code</Form.Label>
                                        <Form.Control
                                            required
                                            name="code"
                                            type="text"
                                            placeholder={t('machineCode')}
                                        />
                                        <Form.Control.Feedback>{t('looksGood')}</Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                        <Form.Label>{t('name')}</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                type="text"
                                                name="macName"
                                                placeholder={t('enterName')}
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {t('chooseName')}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                                <Button type="submit">{t('submit')}</Button>
                            </Form>
                            <footer className="blockquote-footer">
                                {t('addMacDescription')}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

const CreateMachineBlock = withTranslation()(LegacyCreateMachine);
export default CreateMachineBlock;