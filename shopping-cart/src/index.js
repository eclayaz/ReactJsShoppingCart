import React from 'react';
import ReactDOM from 'react-dom';

//Babel will compile this to React.createElement
//that's why we have imported React on the top
//even though it's directly not used in the code
const element = <h1>Hello World</h1>;
console.log(element);

//projects created with create-react-app
//when even changes are saves, application is automatically restarted
//no need to refresh the browser, hot module reloading 