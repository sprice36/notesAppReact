import React from 'react';

class DocumentEditor extends React.Component {
  render () {
      return (
          <div className ="document-editor" >
          <textarea
          value = {this.props.note.content}   
            onChange= {(e) => {
              this.props.handleChange(e.target.value)
            }} ></textarea> 
         </div>
          );
        } 
}

export default DocumentEditor;