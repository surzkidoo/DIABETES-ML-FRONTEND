import React, { Component } from 'react';


class Loader extends Component {
    
    render() { 
        return (
           <div >
            <div className="container">
        <div className="loader">
        </div>
        <p className="mt">Loading... please wait</p>
    </div>
           </div>
        );
    }
}
 
export default Loader;