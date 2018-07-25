import React from 'react'; 

class SearchBar extends React.Component {


     render(){
         return (
            <header className="search-bar">
            <input type="text" 
              value={this.props.text}
              onChange={(e) => {
                this.props.handleChange(e.target.value)
              }}/> 
          </header> 
         );
     }


}
export default SearchBar;