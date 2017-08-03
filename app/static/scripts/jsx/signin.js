import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {indigo500, indigo700, indigo100,} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo500,
        primary2Color: indigo700,
        primary3Color: indigo100,
    },
});

var config = {
    apiKey: "AIzaSyAoMDi3nrfpQgE3rtbptQF4vLVSzd-GE-4",
    authDomain: "power-of-why.firebaseapp.com",
    databaseURL: "https://power-of-why.firebaseio.com/",
    projectId: "power-of-why",
    storageBucket: "power-of-why.appspot.com",
    messagingSenderId: "90138298651"
};
firebase.initializeApp(config);
// Import Admin SDK
var admin = require("firebase");
var db = admin.database();

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            password: "",
        };
        this.handleUser = this.handleUser.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    handleUser(event) {
        this.setState({
            user: event.target.value
        });
    };

    handlePassword(event) {
        this.setState({
            password: event.target.value,
        });
    };

    handleSignIn(event) {
        firebase.auth().signInWithEmailAndPassword(this.state.user, this.state.password)
            .then(function (result) {
                location.reload();
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
                // [END_EXCLUDE]
            });

    };

    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Card>
                        <div>
                            <center>
                                <CardActions>
                                    <TextField
                                        hintText="Username"
                                        value={this.state.user}
                                        onChange={this.handleUser}
                                    />
                                    <br />
                                    <TextField
                                        hintText="Password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handlePassword}
                                    />
                                    <br />
                                    <RaisedButton label="Sign In" onClick={this.handleSignIn}/>
                                    <RaisedButton label="Home" href={"/"}/>
                                </CardActions>
                            </center>
                        </div>
                    </Card>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Signin;

ReactDOM.render(
    <Signin/>,
    document.getElementById('signin')
);
