import React, { Component } from 'react';

export default class Step extends Component {
    render() {
        let classNameDescripcion = (this.props.typeClass === "descripcion"? "active step" : "disabled step"); 
        let classNameVideo =(this.props.typeClass === 'video'? "active step":"disabled step" );
        let classNameConfimacion =(this.props.typeClass === 'confirmacion'? "active step":"disabled step" );
        
        return (
            <div className="ui three top attached steps">
                <div className={classNameDescripcion}>
                    <i className="list ul icon"></i>
                    <div className="content">
                        <div className="title">Descripcion</div>
                        <div className="description">Informacion acerca del VidUs</div>
                    </div>
                </div>
                <div className={classNameVideo}>
                    <i className="file video icon"></i>
                    <div className="content">
                        <div className="title">Video</div>
                        <div className="description">Selecciona el video que te interese</div>
                    </div>
                </div>
                <div className={classNameConfimacion}>
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
