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

class Admin_Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDown: 1,
            first: "",
            second: "",
            third: "",
            fourth: "",
            fifth: "",
            sixth: "",
            question: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFirst = this.handleFirst.bind(this);
        this.handleSecond = this.handleSecond.bind(this);
        this.handleThird = this.handleThird.bind(this);
        this.handleFourth = this.handleFourth.bind(this);
        this.handleFifth = this.handleFifth.bind(this);
        this.handleSixth = this.handleSixth.bind(this);
        this.handleQuestion = this.handleQuestion.bind(this);
        this.write = this.write.bind(this);
    }

    handleChange(event) {
        this.setState({
            dropDown: event.target.value
        });
    };

    handleFirst(event) {
        this.setState({
            first: event.target.value,
        });
    };

    handleSecond(event) {
        this.setState({
            second: event.target.value,
        });
    };

    handleThird(event) {
        this.setState({
            third: event.target.value,
        });
    };

    handleFourth(event) {
        this.setState({
            fourth: event.target.value,
        });
    };

    handleFifth(event) {
        this.setState({
            fifth: event.target.value,
        });
    };

    handleSixth(event) {
        this.setState({
            sixth: event.target.value,
        });
    };

    handleQuestion(event) {
        this.setState({
            question: event.target.value,
        });
    };

    write() {
        var type = 'science'
        if (this.state.dropDown == 2) {
            type = 'sports';
        }
        if (this.state.dropDown == 3) {
            type = 'history';
        }
        if (this.state.dropDown == 4) {
            type = 'general';
        }
        var ref = db.ref();
        var postsRef = ref.child(type);
        var newPostRef = postsRef.push();
        newPostRef.set({
            question: this.state.question,
            one: this.state.first,
            two: this.state.second,
            three: this.state.third,
            four: this.state.fourth,
            five: this.state.fifth,
            six: this.state.sixth,
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
                                <RadioButtonGroup name="category" value={this.state.dropDown}
                                                  onChange={this.handleChange} defaultSelected='1'>
                                    <RadioButton value={1} label="Science"/>
                                    <RadioButton value={2} label="Sports"/>
                                    <RadioButton value={3} label="History"/>
                                    <RadioButton value={4} label="General Knowledge"/>
                                </RadioButtonGroup>
                                <br />
                                <TextField
                                    hintText="Question"
                                    multiLine={true}
                                    value={this.state.question}
                                    onChange={this.handleQuestion}
                                />
                                <br />
                                <TextField
                                    hintText="First dimension"
                                    multiLine={true}
                                    value={this.state.first}
                                    onChange={this.handleFirst}
                                />
                                <br />
                                <TextField
                                    hintText="Second dimension"
                                    multiLine={true}
                                    value={this.state.second}
                                    onChange={this.handleSecond}
                                /><br />
                                <TextField
                                    hintText="Third dimension"
                                    multiLine={true}
                                    value={this.state.third}
                                    onChange={this.handleThird}
                                />
                                <br />
                                <TextField
                                    hintText="Fourth dimension"
                                    multiLine={true}
                                    value={this.state.fourth}
                                    onChange={this.handleFourth}
                                /><br />
                                <TextField
                                    hintText="Fifth dimension"
                                    multiLine={true}
                                    value={this.state.fifth}
                                    onChange={this.handleFifth}
                                /><br />
                                <TextField
                                    hintText="Sixth dimension"
                                    multiLine={true}
                                    value={this.state.sixth}
                                    onChange={this.handleSixth}
                                /><br />
                                <RaisedButton label="Add" onClick={this.write} href="/admin"/>
                                <RaisedButton label="Back" href={"/admin"}/>
                        </CardActions>
                        </center>
                    </Card>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Admin_Add;

ReactDOM.render(
    <Admin_Add/>,
    document.getElementById('admin_add')
);
