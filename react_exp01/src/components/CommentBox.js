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

        //var _that = this;
        //setTimeout(function(){
        //    _that.setState({data: [
        //        {
        //            "author": "吕布",
        //            "id": 1,
        //            "text": "方天画戟",
        //        }]}
        //    );
        //},2000);
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
            </div>
        );
    }
    handleCommentSubmit(comment) {
        // TODO: submit to the server and refresh the list
        var comments = this.state.data;
        comment.id = Date.now();
        var newComments = comments.concat([comment]);

        this.setState({data:newComments});
    }
}

export default CommentBox;