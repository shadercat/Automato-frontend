import React, {Component} from "react";
import {connect} from 'react-redux';
import {CardColumns} from "react-bootstrap";
import MachineCard from "./MachineCard";
import _ from "lodash";

class LegacyMachineList extends Component {

    render() {
        const {machines} = this.props;
        return (
            <>
                {_.chunk(machines, 3).map((item) =>
                    <CardColumns key={item[0]._id + "col"} className="mb-2">
                        {item.map((item2) =>
                            <MachineCard
                                key={item2._id}
                                item={item2}
                            />
                        )}
                    </CardColumns>
                )}
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

