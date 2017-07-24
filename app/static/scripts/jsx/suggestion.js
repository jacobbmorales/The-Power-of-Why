import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as firebase from 'firebase'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';
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

class Suggestion extends React.Component {
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
        injectTapEventPlugin();
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
        var postsRef = ref.child('admin');
        var newPostRef = postsRef.push();
        newPostRef.set({
            type: type,
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
                        <CardHeader
                            title="Propose a question"
                            subtitle="First dimension is most general answer to fifth dimension being most complex"
                        />
                        <CardActions>
                              <RadioButtonGroup name="category" value={this.state.dropDown} onChange={this.handleChange}>
                                <RadioButton value={1} label="Science"/>
                                <RadioButton value={2} label="Sports"/>
                                <RadioButton value={3} label="History"/>
                                <RadioButton value={4} label="General Knowledge"/>
                            </RadioButtonGroup>
                            <br />
                            <TextField
                                hintText="Question"
                                value={this.state.question}
                                onChange={this.handleQuestion}
                            />
                            <br />
                            <TextField
                                hintText="First dimension"
                                value={this.state.first}
                                onChange={this.handleFirst}
                            />
                            <br />
                            <TextField
                                hintText="Second dimension"
                                value={this.state.second}
                                onChange={this.handleSecond}
                            /><br />
                            <TextField
                                hintText="Third dimension"
                                value={this.state.third}
                                onChange={this.handleThird}
                            />
                            <br />
                            <TextField
                                hintText="Fourth dimension"
                                value={this.state.fourth}
                                onChange={this.handleFourth}
                            /><br />
                            <TextField
                                hintText="Fifth dimension"
                                value={this.state.fifth}
                                onChange={this.handleFifth}
                            /><br />
                            <TextField
                                hintText="Sixth dimension"
                                value={this.state.sixth}
                                onChange={this.handleSixth}
                            /><br />
                            <FlatButton label="Add" onClick={this.write}/>
                        </CardActions>
                    </Card>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Suggestion;

ReactDOM.render(
    <Suggestion/>,
    document.getElementById('suggestion')
);