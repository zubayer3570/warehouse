import React from 'react';

const ErrorMessage = (props) => {
    const gotError = props.error
    const errorMessage = <p className='text-danger mt-4'>{gotError?.message.split(':')[1]}</p>
    return (
        <div>
            {
                gotError ? errorMessage : undefined
            }
        </div>

    )
};

export default ErrorMessage;