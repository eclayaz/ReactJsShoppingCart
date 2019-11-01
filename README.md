# Shopping Cart in React

###Component 
- A piece of the UI
- Independent, reusable
- Every application has at least one component, which is the root component
- Root represents the entire application and it contains other child components (tree of components)


class Tweet {
    state = {};
    render() {
        //output of this method is a React Element
        //which is a simple plain js object maps with DOM element (t's not a real element)
    }
}

React keeps a light weight representation of DOM in the memory, know as Virtual DOM. This is very cheap to create and update.
When the state changes react will update the DOM.


###JSX
`const element = <h0>Hello, world!</h1>;`

Syntax is neither a string nor HTML. It is called JSX, and it is a syntax extension to JavaScript.
We recommend using it with React to describe what the UI should look like. 

####Embedding Expressions in JSX
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

####JSX is an Expression Too
 you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

####Specifying Attributes with JSX
`const element = <div tabIndex="0"></div>;`
`const element = <img src={user.avatarUrl}></img>;`
Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.


####JSX Represents Objects
Babel compiles JSX down to React.createElement() calls.
Using JSX to describe what the UI looks like is much more easier than writing plane react.