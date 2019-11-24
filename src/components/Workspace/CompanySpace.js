import React, {Component} from "react";
import {Jumbotron} from "react-bootstrap";
import {withTranslation} from "react-i18next";

class LegacyCompanySpace extends Component {
    render() {
        return (
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <Jumbotron>
                    <h1>Company!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                </Jumbotron>
                <Jumbotron>
                    <h1>Workspace!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                </Jumbotron>
                <Jumbotron>
                    <h1>Workspace!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                </Jumbotron>
                <Jumbotron>
                    <h1>Workspace!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                </Jumbotron>
                <Jumbotron>
                    <h1>Workspace!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                </Jumbotron>
                <Jumbotron>
                    <h1>Workspace!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                </Jumbotron>
                <Jumbotron>
                    <h1>Workspace!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                </Jumbotron>
                <Jumbotron>
                    <h1>Workspace!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                </Jumbotron>
            </div>
        );
    }
}

const CompanySpace = withTranslation()(LegacyCompanySpace);
export default CompanySpace;