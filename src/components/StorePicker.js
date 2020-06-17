import React, {Fragment} from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component{
    render(){
        return (
        <Fragment>
            { /* This is the store picker!*/} 
            <form className="store-selector">
                <h2>Írd be a neved</h2>
                <input type="text" required placeholder="Bolt neve" defaultValue={getFunName()} />  
                <button type="submit">Irány a bolt</button>
            </form>
        </Fragment>
        );
    }
 }

 export default StorePicker;