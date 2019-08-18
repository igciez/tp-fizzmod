import React from 'react';


const Notification = props => {

    
    if (props.time) {
        setTimeout(function () {
            props.onDismiss();
        }, props.time);
    }
    else if (!props.time) {
        setTimeout(function () {
            props.onDismiss();
        }, 3000);
    }

    return (
        <div className='ui modals visible active'>
            <div className='ui standard modal visible active'>
                <div className='header'>{props.title}</div>
                <div className='actions'>
                    {props.actions}
                </div>
            </div>
        </div>
    );
};

export default Notification;