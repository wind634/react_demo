/**
 * Created by wangjiang on 17/5/18.
 */

import React, { Component } from 'react';
import './CommentBox.css';
import CommentForm from "./CommentForm"
import CommentList from "./CommentList"


class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []}
    }
    componentDidMount() {
        this.setState({data: [
            {
                "author": "张飞",
                "id": 1,
                "text": "丈八蛇矛",
            },
            {
                "author": "赵云",
                "id": 2,
                "text": "龙胆枪",
            },
            {
                "author": "关羽",
                "id": 3,
                "text": "青龙偃月刀",
            },

        ]});
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
}

export default CommentBox;