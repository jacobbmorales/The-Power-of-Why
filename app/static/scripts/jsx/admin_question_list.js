import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase'
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {red500, indigo700, indigo100, blue900, white, grey400, darkWhite} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blue900,
        primary2Color: indigo700,
        primary3Color: indigo100,
    },
});

var listStyle = {
    backgroundColor: darkWhite,
    color: blue900,
};

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
var ref1 = db.ref('question_suggestions');

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            questions1: []
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

        ref1.on("value", function (snapshot) {
            var questions1 = [];
            snapshot.forEach(function (childSnapshot) {
                questions1.push({
                    key: childSnapshot.key,
                    value: childSnapshot.val().question
                });
            });
            this.setState({questions1: questions1});
        }.bind(this), function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }


    render() {
        var questions = this.state.questions;
        var questions1 = this.state.questions1;
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        <center>
                            <Card>
                                <center>
                                    <CardHeader
                                        title="Answered Questions"
                                    />
                                    <CardActions>
                                        <List>
                                            {questions.map((question) => (
                                                <ListItem
                                                    key={question.key}
                                                    primaryText={question.value}
                                                    href={'admin/suggestion/' + question.key}
                                                    style={listStyle}
                                                />
                                            ))}
                                        </List>
                                    </CardActions>
                                </center>
                            </Card>

                            <Card>
                                <center>
                                    <CardHeader
                                        title="Un-Answered Questions"
                                    />
                                    <CardActions>
                                        <List>
                                            {questions1.map((question1) => (
                                                <ListItem
                                                    key={question1.key}
                                                    primaryText={question1.value}
                                                    href={'admin/question_suggestion/' + question1.key}
                                                    style={listStyle}
                                                />
                                            ))}
                                        </List>
                                    </CardActions>
                                </center>
                            </Card>
                            <RaisedButton label="Back" href={"/admin"}/>
                        </center>
                    </div>
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