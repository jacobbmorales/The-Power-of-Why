import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase'
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {indigo500, indigo700, indigo100, indigo900, white, grey400, darkWhite} from 'material-ui/styles/colors';
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
var ref = db.ref('admin');
class AdminEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut(event) {
        firebase.auth().signOut();
    }
    ;

    render() {
        var questions = this.state.questions;
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        <Card>
                            <center>
                                <CardActions>
                                    <RaisedButton label="Science" href={'/admin_edit/science'}/>
                                    <RaisedButton label="Sports" href={'/admin_edit/sports'}/>
                                    <RaisedButton label="Hisory" href={'/admin_edit/history'}/>
                                    <RaisedButton label="General Knowledge" href={'/admin_edit/general'}/>
                                </CardActions>
                            </center>
                        </Card>
                        <center>
                            <RaisedButton label="Back" href={"/admin"}/>
                        </center>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default AdminEdit;

ReactDOM.render(
    <AdminEdit/>,
    document.getElementById('admin_edit')
);
