import React from 'react';
import ReactDOM from 'react-dom';

// 'react' is the module, React is the component

//projects created with create-react-app
//when even changes are saves, application is automatically restarted
//no need to refresh the browser, hot module replacement (HMR) do that for us

//Babel will compile this to React.createElement
//that's why we have imported React on the top
//even though it's directly not used in the code
const element = <h1>Hello World</h1>;
ReactDOM.render(element, document.getElementById('root'));
//in a real world app, instead of rendering single element, will render app component
//app component is the root component of the application
