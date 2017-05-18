/**
 * Created by wangjiang on 17/5/18.
 */

import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
}

export default Comment;