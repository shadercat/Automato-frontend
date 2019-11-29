import React, {Component} from "react";
import {connect} from 'react-redux';
import {CardColumns} from "react-bootstrap";
import MachineCard from "./MachineCard";

class LegacyMachineList extends Component {

    render() {
        return (
            <>
                <CardColumns>
                    {this.props.machines.map((item) =>
                        <MachineCard
                            key={item._id}
                            item={item}
                        />
                    )}
                </CardColumns>
            </>
        )
    }
}


const mapStateToProps = function (store) {
    return {
        machines: store.machinesState.machines
    };
};


const MachineList = connect(mapStateToProps)(LegacyMachineList);
export default MachineList;

