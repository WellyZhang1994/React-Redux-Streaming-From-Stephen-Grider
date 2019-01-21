import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';


class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2' , () => {
            window.gapi.client.init({
                clientId:'593105570931-jk2on25avb85n20jo7f5iskj7nvou6um.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                // original this.setState({ isSignedIn: this.auth.isSignedIn.get()});
                // use redux action to change state 
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    };

    onAuthChange = (isSignedIn) => {
        // original this.setState({ isSignedIn:this.auth.isSignedIn.get()});
        // redux : pass result to action
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
    };

    onSignInClick = () => { 
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton(){
        if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }
        else if(this.props.isSignedIn === null){
            return null
        }
        else{
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In With Google
                </button>
            );
        }
    };

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }

};

const mapStateToProps = (state) =>{
    return { isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);