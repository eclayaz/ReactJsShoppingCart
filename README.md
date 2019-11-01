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
