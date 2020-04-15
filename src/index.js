import React from 'react'
import ReactDOM from 'react-dom';
import '../src/styles/index.scss';
import HelloWorld from "./components/HelloWorld";

import App from "../src/App";
import Registration from "../src/components/Registration";
import Timer from "../src/components/Timer";
const user = { name: 'Vasia' };

const logUser = (userName) => {
    console.log(userName)
};

ReactDOM.render(
    <React.StrictMode>
        {/*<HelloWorld userName={user.name} logUser={logUser} />
        <App/>*/}
        {/*<Registration />*/}
        <Timer />
    </React.StrictMode>
    ,
    document.getElementById('root')
);