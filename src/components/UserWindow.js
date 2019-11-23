import React, {Component} from "react";
import AccountWindow from "./AccountWindow";
import AuthAccountWindow from "./AuthAccountWindow";

class UserWindow extends Component{
    render() {
        let {isAuth} = this.props;
        return (isAuth) ? (<AuthAccountWindow/>) : (<AccountWindow/>);
    }
}
export default UserWindow;