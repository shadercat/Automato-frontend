import React, {Component} from "react";
import AccountWindow from "./AccountWindow/UnauthorizedWin";
import AuthAccountWindow from "./AccountWindow/AuthorizedWin";

class UserWindow extends Component{
    render() {
        let {isAuth} = this.props;
        return (isAuth) ? (<AuthAccountWindow/>) : (<AccountWindow/>);
    }
}
export default UserWindow;