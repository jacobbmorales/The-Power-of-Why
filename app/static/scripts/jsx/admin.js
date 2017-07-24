import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase'
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {indigo500, indigo700, indigo100, indigo900, white, grey400, darkWhite} from 'material-ui/styles/colors';

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
var ref = db.ref('admin');

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
        ref.on("value", function (snapshot) {
            var questions = [];
            snapshot.forEach(function (childSnapshot) {
                questions.push({
                    key: childSnapshot.key,
                    value: childSnapshot.val().question
                });
            });
            this.setState({questions: questions});
        }.bind(this), function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });


    }



    render() {
        var questions = this.state.questions;
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Card>
                        <CardHeader
                            title="Admin Sign In"
                        />
                        <CardActions>
                            <List>
                                <Subheader>Questions</Subheader>
                                {questions.map((question) => (
                                    <ListItem
                                        key={question.key}
                                        primaryText={question.value}
                                        href={'admin/suggestion/' + question.key}
                                    />
                                ))}
                            </List>
                        </CardActions>
                    </Card>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default Admin;

ReactDOM.render(
    <Admin/>,
    document.getElementById('admin')
);