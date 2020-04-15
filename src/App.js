import React from "react";

import Post from "../src/components/Post";

const App = () => {
    const post = {
        title: "decs title",
        author: "desc Author",
        content: "desc Content"
    }

    return(
        <div className="app">
            <h1>h1 test</h1>
            <Post title={post.title} author={post.author} content ={post.content}/>
        </div>
    )
};

export default App