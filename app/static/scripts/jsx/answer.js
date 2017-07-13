import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';
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
var key = answer_key;
var link = 'general/' + key;
var admin = require("firebase");
var db = admin.database();
var ref = db.ref(link);
// Attach an asynchronous callback to read the data at our posts reference

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: 0,
            question: '',
            answer: '',
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: ''
        };
        ref.on("value", function (snapshot) {
            this.setState({question: snapshot.val().question});
            this.setState({answer: snapshot.val().one});
            this.setState({one: snapshot.val().one});
            this.setState({two: snapshot.val().two});
            this.setState({three: snapshot.val().three});
            this.setState({four: snapshot.val().four});
            this.setState({five: snapshot.val().five});
            this.setState({six: snapshot.val().six});
        }.bind(this), function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        this.handleSlider = this.handleSlider.bind(this);
    }


    handleSlider(event, value) {
        if (value == 0) {
            this.setState({answer: this.state.one});
        }
        else if (value == .2) {
            this.setState({answer: this.state.two});
        }
        else if (value == .4) {
            this.setState({answer: this.state.three});
        }
        else if (value == .6) {
            this.setState({answer: this.state.four});
        }
        else if (value == .8) {
            this.setState({answer: this.state.five});
        }
        else if (value == 1) {
            this.setState({answer: this.state.six});
        }
        this.setState({slider: value});

    };

    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        <p>
                            <span>{this.state.question}</span>
                        </p>
                        <Slider
                            step={0.20}
                            value={this.state.slider}
                            onChange={this.handleSlider}
                        />
                        <p>
                            <span>{this.state.answer}</span>
                        </p>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Answer;

ReactDOM.render(
    <Answer/>,
    document.getElementById('answer')
);
