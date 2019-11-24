import React, {Component} from 'react';
import '../styles/styles.css';
import {Carousel, Jumbotron} from "react-bootstrap";
import {withTranslation} from "react-i18next";
import PropTypes from "prop-types";
class LegacyHome extends Component {
    static propTypes = {
        t: PropTypes.object.isRequired
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
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <Jumbotron>
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                    </Jumbotron>
                </div>
            </div>
        )
    }
}

const Home = withTranslation()(LegacyHome);
export default Home;