import React, { Component } from 'react';


//**********//

//Function based component
// const SearchBar = () => {
//     return <input />
// };

//**********//

//Class based Components are used so that components can be aware of what has happened to them since the time they have been rendered.
// It is a ES6 class based Javascript implementation with proper properties and method.

// These curly braces mean that pull off a property called Component from react and call it Component
// It is similar to like const Component = React.Component
// If we don't use that curly braces syntax in import for Component then while defining class we have to use 'extends React.Component'

//!IMPORTANT TIP: Whenever in doubt to understand state add 'Value Of the Input = {this.state.term} on line 36'
//!IMPORTANT NOTE: Whenever referencing javascript variable inside JSX, always wrap it inside curly braces like on line 34 and 36

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: ''};
    }

    render () {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />;

            </div>
            );

    }

    //delete the handler
    // onInputChange(event){
    //     console.log(event.target.value);
    //
    // }

}


export default SearchBar;