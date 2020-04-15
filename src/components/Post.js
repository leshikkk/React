import React from "react";

 const Post = (props) => {
    const {title, author, content } = props;

    return(
        <div className="Post">
            <pre className="post__title">{title}</pre>
            <pre className="post__content">{author}</pre>
            <pre className="post__author">{content}</pre>

        </div>
    )
};
export default Post;
