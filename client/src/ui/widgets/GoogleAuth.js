import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signIn, signOut } from "../../api/actions/index";

class GoogleAuth extends React.Component {

    //state = { isSignedIn: null };

    componentDidMount() {

        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '139033583816-ild1vrv9t0d2j3ml999ng4kmj4j9ctee.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                //this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            }).catch(e=>{
                console.log(e);
                console.log("error");
            });
        });
        //-->window es una variable del scope del browser, 
        //que es el lugar donde se usa la biblioteca de google gapi(google api, instalada en public index).
        //2do arg-->callback, es una funcion que se ejecuta dsp que la primera o anterior funcion termina de ejecutarse.
        //-->scope: son las variables que se van a tomar de la registracion en google, ej: email, etc.
    }

    //"on"-->todas las funciones que comienzan con on, significa que son eventos.
    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
    };

    onSignIn=()=>{
        this.auth.signIn();
    }

    onSignOut=()=>{
        this.auth.signOut();
    }
    
    //onclick={this.onSignOut}--> el objeto no lleva parentesis, 
    //  ya que si los tiene se ejecuta ni bien se hace el render 
    //  y este evento se tiene que ejecutar cuando se hace click. 
    renderAuthButton() {
        /*if (this.state.isSignedIn === null) {
            return null;
        } else*/ if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className='google icon' />
                    Salir
                </button>
            );
        } //else {
            return (
                <button onClick={this.onSignIn}  className="ui green google button">
                    <i className='google icon' />
                    Ingresar   
                </button>
            );
        //}
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

let mapToSatateProp=(estado)=>{
    return {isSignedIn: estado.authvideo.isSignedIn};
}

let mapDispatchToProps = dispatch => ({
    signIn:bindActionCreators(signIn,dispatch),
    signOut:bindActionCreators(signOut,dispatch)
}); 

export default connect(mapToSatateProp,mapDispatchToProps) (GoogleAuth);