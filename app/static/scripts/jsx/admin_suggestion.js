import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {red500, indigo700, indigo100, blue900, white, grey400, darkWhite} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const styles = {
    errorStyle: {
        color: blue900,
    }
}
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
var ref = db.ref('current_type');

// Attach an asynchronous callback to read the data at our posts reference

class Admin_Suggestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            question: '',
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
        };
        ref.on("value", function (snapshot) {
            var type = snapshot.val().type;
            this.setState({type: type});
            var question = snapshot.val().question;
            this.setState({key: question})
            var link = type + '/' + question;
            var ref1 = db.ref(link);
            ref1.on("value", function (snapshot) {
                this.setState({question: snapshot.val().question});
                this.setState({one: snapshot.val().one});
                this.setState({two: snapshot.val().two});
                this.setState({three: snapshot.val().three});
                this.setState({four: snapshot.val().four});
                this.setState({five: snapshot.val().five});
                this.setState({six: snapshot.val().six});
            }.bind(this), function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            }.bind(this), function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        }.bind(this), function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        this.handleFirst = this.handleFirst.bind(this);
        this.handleSecond = this.handleSecond.bind(this);
        this.handleThird = this.handleThird.bind(this);
        this.handleFourth = this.handleFourth.bind(this);
        this.handleFifth = this.handleFifth.bind(this);
        this.handleSixth = this.handleSixth.bind(this);
        this.handleQuestion = this.handleQuestion.bind(this);
        this.handleType = this.handleType.bind(this);
        this.write = this.write.bind(this);
    }

    handleFirst(event) {
        this.setState({
            one: event.target.value,
        });
    }
    ;

    handleSecond(event) {
        this.setState({
            two: event.target.value,
        });
    }
    ;

    handleThird(event) {
        this.setState({
            three: event.target.value,
        });
    }
    ;

    handleFourth(event) {
        this.setState({
            four: event.target.value,
        });
    }
    ;

    handleFifth(event) {
        this.setState({
            five: event.target.value,
        });
    }
    ;

    handleSixth(event) {
        this.setState({
            six: event.target.value,
        });
    }

    handleQuestion(event) {
        this.setState({
            question: event.target.value,
        });
    };

    handleType(event) {
        this.setState({
            type: event.target.value,
        });
    };

    write() {
        var old = db.ref('admin/' + key);
        old.remove();
        var type = this.state.type;
        var ref = db.ref();
        var postsRef = ref.child(type);
        var newPostRef = postsRef.push();
        newPostRef.set({
            question: this.state.question,
            one: this.state.one,
            two: this.state.two,
            three: this.state.three,
            four: this.state.four,
            five: this.state.five,
            six: this.state.six,
        });
    }

    delete() {
        var old = db.ref('admin/' + key);
        old.remove();
    }

    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        <center>
                            <TextField
                                id="text-field-controlled"
                                multiLine={true}
                                errorText="Type"
                                errorStyle={styles.errorStyle}
                                value={this.state.type}
                                onChange={this.handleType}
                            /><br/>
                            <TextField
                                id="question"
                                multiLine={true}
                                errorText="Question"
                                errorStyle={styles.errorStyle}
                                value={this.state.question}
                                onChange={this.handleQuestion}
                            /><br/>
                            <TextField
                                id="1"
                                multiLine={true}
                                errorText="Answer 1"
                                errorStyle={styles.errorStyle}
                                value={this.state.one}
                                onChange={this.handleFirst}
                            /><br/>
                            <TextField
                                id="2"
                                multiLine={true}
                                errorText="Answer 2"
                                errorStyle={styles.errorStyle}
                                value={this.state.two}
                                onChange={this.handleSecond}
                            /><br/>
                            <TextField
                                id="3"
                                floatingLabelText={this.state.three}
                                errorText="Answer 3"
                                errorStyle={styles.errorStyle}
                                value={this.state.three}
                                onChange={this.handleThird}
                            /><br/>
                            <TextField
                                id="4"
                                multiLine={true}
                                errorText="Answer 4"
                                errorStyle={styles.errorStyle}
                                value={this.state.four}
                                onChange={this.handleFourth}
                            /><br/>
                            <TextField
                                id="5"
                                multiLine={true}
                                errorText="Answer 5"
                                errorStyle={styles.errorStyle}
                                value={this.state.five}
                                onChange={this.handleFifth}
                            /><br/>
                            <TextField
                                id="6"
                                multiLine={true}
                                errorText="Answer 6"
                                errorStyle={styles.errorStyle}
                                value={this.state.six}
                                onChange={this.handleSixth}
                            /><br/>
                            <RaisedButton label="Add" onClick={this.write} href={"/admin"}/>
                            <RaisedButton label="Do not add and remove from suggestion list" onClick={this.delete}
                                          href={"/admin"}/>
                            <RaisedButton label="Back" href={"/admin_suggestion"}/>
                        </center>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Admin_Suggestion;

ReactDOM
    .render(
        <Admin_Suggestion/>,
        document
            .getElementById(
                'admin_suggestion'
            )
    )
;
