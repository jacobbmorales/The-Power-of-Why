import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase'
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {red500, white, grey400, darkWhite, blue900} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blue900,
    },
});

var listStyle = {
    backgroundColor: darkWhite,
    color: blue900,
    border: red500
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
var ref = db.ref('current_type/type');


class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            searchString: '',
            type: ''
        };
        this.handleSearch = this.handleSearch.bind(this);
        ref.on("value", function (snapshot) {
            var type = snapshot.val()
            this.setState({type: type});
            var ref1 = db.ref(type);
            ref1.on("value", function (snapshot) {
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
        }.bind(this), function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }

    handleSearch(event) {
        // grab value form input box
        this.setState({searchString: event.target.value});
    };

    render() {
        var questions = this.state.questions;
        var searchString = this.state.searchString.trim().toLowerCase();

        if (searchString.length > 0) {
            questions = questions.filter(function (question) {
                return question.value.toLowerCase().match(searchString);
            });
        }
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        <TextField id="search" type="text" value={this.state.searchString} onChange={this.handleSearch}
                                   placeholder="Search"/>
                        <List>
                            {questions.map((question) => (
                                <div>

                                    <ListItem
                                        key={question.key}
                                        primaryText={question.value}
                                        href={this.state.type + "/answer/" + question.key}
                                        style={listStyle}
                                    />
                                    <Divider inset={false}/>
                                </div>
                            ))}
                        </List>
                        <div>
                            <center>
                                <RaisedButton label="Home" href={"/"}/>
                            </center>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Questions;

ReactDOM.render(
    <Questions/>,
    document.getElementById('questions')
);
