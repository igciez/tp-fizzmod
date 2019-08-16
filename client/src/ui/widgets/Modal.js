import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    //Para crear una ventana 'modal', se usa ReactDOM.createPortal, la cual tiene dos args
    //uno donde va el diseno Jsx y el 2do arg, donde va el selector de id, el cual esta en
    //el archivo index.html.
    //onClick={(e) => e.stopPropagation()} -->se usa para evitar que se ejecute el comportamiento
    //por default de javaScript
    return ReactDOM.createPortal(
        <div
            onClick={props.onDismiss}
            className='ui dimmer modals visible active'
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className='ui standard modal visible active'
            >
                <div className='header'>{props.title}</div>
                <div className='content'>
                    {props.content}
                </div>
                <div className='actions'>
                    {props.actions}
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;