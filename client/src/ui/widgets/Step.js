import React, { Component } from 'react';

export default class Step extends Component {
    render() {
        console.log(this.props.typeClass);
        let classNameDescripcion = (this.props.typeClass === "descripcion"? "active step" : "step"); 
        let classNameVideo =(this.props.typeClass === 'video'? "active step":"disabled step" );
        console.dir(classNameDescripcion);
        console.dir(classNameVideo);
        return (
            <div className="ui three top attached steps">
                <div className={classNameDescripcion}>
                    <i className="truck icon"></i>
                    <div className="content">
                        <div className="title">Descripcion</div>
                        <div className="description">Agrega el tema del video</div>
                    </div>
                </div>
                <div className={classNameVideo}>
                    <i className="payment icon"></i>
                    <div className="content">
                        <div className="title">Video</div>
                        <div className="description">Selecciona el video que te interese</div>
                    </div>
                </div>
                <div className="disabled step">
                    <i className="info icon"></i>
                    <div className="content">
                        <div className="title">Confirmar Datos</div>
                        <div className="description">Verifica los detalles antes de subir</div>
                    </div>
                </div>
            </div>
        )
    }
}

/*
<div class="ui attached segment">
            </div>-*/