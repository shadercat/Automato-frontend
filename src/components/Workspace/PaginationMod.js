import React, {Component} from "react";
import {Pagination} from "react-bootstrap";
import {HashLink as Link} from "react-router-hash-link";

class PaginationMod extends Component {
    render() {
        const {changeHandler, current, count, limitPage} = this.props;
        const arr = [];
        let delta = 2;
        let left = current - delta;
        let right = current + delta;
        let pages = Math.ceil(count / limitPage);
        for (let i = left; i <= right; i++) {
            if (i > 0 && i <= pages) {
                arr.push(i);
            }
        }
        return (
            <>
                <Pagination>
                    <Pagination.First onClick={() => changeHandler(1)}/>
                    {arr.map((item) =>
                        <Link to={"#top"} key={item}>
                            <Pagination.Item
                                as='div'
                                onClick={() => changeHandler(item)}
                                active={item === current}
                            >{item}</Pagination.Item>
                        </Link>
                    )}
                    <Pagination.Last onClick={() => changeHandler(pages)}/>
                </Pagination>
            </>
        )
    }
}

export default PaginationMod;