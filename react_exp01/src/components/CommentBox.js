/**
 * Created by wangjiang on 17/5/18.
 */

import React, { Component } from 'react';
import './CommentBox.css';
import CommentForm from "./CommentForm"
import CommentList from "./CommentList"


class CommentBox extends Component {
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
}

export default CommentBox;