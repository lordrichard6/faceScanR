import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div className='ImageLinkForm'>
            <p>{'Load a picture a see it detect the face'}</p>
            <div className='ImageLinkForm-inner'>
                <input className="form-control" type="text" placeholder="https://link.whatever" onChange={onInputChange}/>
                <button className="btn btn-info" onClick={onButtonSubmit} >Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm