import React, {Fragment} from 'react';

class StorePicker extends React.Component{
    render(){
        return (
        <Fragment>
            { /* This is the store picker!*/} 
            <form className="store-selector">
                <h2>Írd be a neved</h2>
                <input type="text" required placeholder="Bolt neve"/>  
                <button type="submit">Irány a bolt</button>
            </form>
        </Fragment>
        );
    }
 }

 export default StorePicker;