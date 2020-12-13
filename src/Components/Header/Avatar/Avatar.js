import React from 'react';

import './Avatar.css'

function Avatar({name}) {
    return (
        <div className='avatar my-2'>
            <span>{name}</span>
        </div>
    )
}
export default Avatar;