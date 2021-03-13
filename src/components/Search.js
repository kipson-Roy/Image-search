import React from 'react';

class Searchbar extends React.Component {
    constructor(props){
        super(props);
        this.state = { term:''};
    }
    onForm = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };
    render() {
        return(
        <div>
            <form onSubmit={(e) => this.onForm(e)}>
                <div className="top">
                    <label >SEARCH</label>
                    <input  type="text"  onChange={e => this.setState({term:e.target.value})}/>
                </div>
            </form>
        </div>
        );
    }
}

export default Searchbar;