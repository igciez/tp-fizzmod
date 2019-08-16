import React from 'react';
import { Field, reduxForm } from "redux-form";


class Form extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className='ui error message'>
                    <div className='header'>
                        {error}
                    </div>
                </div>
            );
        }
    }

    //sintax es5 {...input}, add los campos de eventos(ej onChange) de reduxForm 
    //para que sean completados por el input y luego lo devuelve al state de reduxForm.
    renderInput = ({ input, label, meta }) => {
        let className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form
                className='ui form error'
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <Field name='title' component={this.renderInput} label='Ingrese el titulo' />
                <Field name='description' component={this.renderInput} label='Ingrese la descripcion' />
                <Field name='video' component={this.renderInput} label='Link del Video' />
                <button className='ui button primary'>{this.props.buttonName}</button>                
            </form>
        );
    }
}

let validate = (formValues) => {
    let errors = {};

    if (!formValues.title) {
        errors.title = 'Ingrese un titulo!';
    }
    if (!formValues.description) {
        errors.description = 'Ingrese una descripcion!';
    }

    return errors;
};

export default reduxForm({
    form: 'Form',
    validate
})(Form);

