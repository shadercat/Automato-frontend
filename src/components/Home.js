import React, {Component} from 'react';
import '../styles/styles.css';
import {Carousel, Jumbotron} from "react-bootstrap";
import {withTranslation} from "react-i18next";
import PropTypes from "prop-types";

class LegacyHome extends Component {
    static propTypes = {
        t: PropTypes.func.isRequired
    };

    render() {
        const {t} = this.props;
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images\Empyreal_Tragicomedy_Story_CG4.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{t('slide1.title')}</h3>
                            <p>{t('slide1.text')}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images\t0112136b402ca59108.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>{t('slide2.title')}</h3>
                            <p>{t('slide2.text')}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images\Memory_Crimson_Echoes_Background_2.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>{t('slide3.title')}</h3>
                            <p>{t('slide3.text')}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images\Memory_Crimson_Echoes_Background_3.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>{t('slide4.title')}</h3>
                            <p>{t('slide4.text')}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                {/*<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">*/}
                <div>
                    <Jumbotron>
                        <h1 className="display-3">Automato</h1>
                        <p>
                            {t('automatoDescry')}
                        </p>
                    </Jumbotron>
                </div>
                <div className="container">
                    <hr className="divider"/>

                    <div className="row">
                        <div className="col-md-7" style={{
                            alignItems: "center",
                            justifyContent: "center", display: "flex"
                        }}>
                            <div>
                                <h2 className="heading">{t('headline1.head')}<span
                                    className="text-muted">{t('headline1.mute')}</span></h2>
                                <p className="lead">{t('headline1.text')}</p>
                            </div>
                        </div>


                        <div className="col-md-5">
                            <img className="image img-fluid mx-auto" data-src="holder.js/500x500/auto"
                                 alt="500x500" style={{width: "500px", height: "500px"}}
                                 src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16f15daf331%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16f15daf331%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.2828125%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                 data-holder-rendered="true"/>
                        </div>
                    </div>

                    <hr className="divider"/>

                    <div className="row">

                        <div className="col-md-5 order-md-1">
                            <img className="image img-fluid mx-auto"
                                 data-src="holder.js/500x500/auto" alt="500x500"
                                 src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16f15daf335%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16f15daf335%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.2828125%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                 data-holder-rendered="true" style={{width: "500px", height: "500px"}}/>
                        </div>

                        <div className="col-md-7 order-md-2" style={{
                            alignItems: "center",
                            justifyContent: "center", display: "flex"
                        }}>
                            <div>
                                <h2 className="heading">{t('headline2.head')}<span
                                    className="text-muted">{t('headline2.mute')}</span></h2>
                                <p className="lead">{t('headline2.text')}</p>
                            </div>
                        </div>
                    </div>

                    <hr className="divider"/>

                    <div className="row">
                        <div className="col-md-7" style={{
                            alignItems: "center",
                            justifyContent: "center", display: "flex"
                        }}>
                            <div>
                                <h2 className="heading">{t('headline3.head')}<span
                                    className="text-muted">{t('headline3.mute')}</span></h2>
                                <p className="lead">{t('headline3.text')}</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img className="img-fluid mx-auto"
                                 data-src="holder.js/500x500/auto" alt="500x500"
                                 src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16f15daf337%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16f15daf337%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.2828125%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                 data-holder-rendered="true" style={{width: "500px", height: "500px"}}/>
                        </div>
                    </div>

                    <hr className="divider"/>
                </div>
                <div className="d-md-flex flex-md-equal fle w-100 my-md-3 pl-md-3">
                    <div
                        className="w-50 bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div className="my-3 py-3">
                            <h2 className="display-5">{t('phone1.head')}</h2>
                            <p className="lead">{t('phone1.mute')}</p>
                        </div>
                        <div className="bg-light shadow-sm mx-auto text-center text-dark p-4"
                             style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}>
                            <h2 className="text-muted"><span>{t('phone1.text')}</span></h2>
                        </div>
                    </div>
                    <div className="w-50 bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5">{t('phone2.head')}</h2>
                            <p className="lead">{t('phone2.mute')}</p>
                        </div>
                        <div className="bg-dark shadow-sm mx-auto text-white p-4"
                             style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}>
                            <h2 className="text-muted"><span>{t('phone2.text')}</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const Home = withTranslation()(LegacyHome);
export default Home;