import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
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

class Question_Suggestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: ""
        };
        this.handleQuestion = this.handleQuestion.bind(this);
        this.write = this.write.bind(this);
    }

    handleQuestion(event) {
        this.setState({
            question: event.target.value,
        });
    };

    write() {
        var ref = db.ref();
        var postsRef = ref.child('question_suggestions');
        var newPostRef = postsRef.push();
        newPostRef.set({
            question: this.state.question,
        });
    }

    render() {
        var first = "";
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Card>
                        <center>
                            <CardActions>

                                <TextField
                                    hintText="Question"
                                    multiLine={true}
                                    value={this.state.question}
                                    onChange={this.handleQuestion}
                                />
                                <br/>
                                <RaisedButton label="Add" onClick={this.write} href="/"/>
                                <RaisedButton label="Home" href={"/"}/>

                            </CardActions>
                        </center>
                    </Card>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Question_Suggestion;

ReactDOM.render(
    <Question_Suggestion/>,
    document.getElementById('question_suggestion')
);
