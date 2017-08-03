import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {red500, indigo700, indigo100, indigo900, white, grey400, darkWhite} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: red500,
    },
});

var buttonStyle = {
    backgroundColor: 'transparent',
    color: 'white'
};

const Topics = () => (
    <div>
        <FlatButton label="Home" style={buttonStyle} href="/"/>
        <FlatButton label="Science" style={buttonStyle} href="/question/science"/>
        <FlatButton label="Sports" style={buttonStyle} href="/question/sports"/>
        <FlatButton label="History" style={buttonStyle} href="/question/history"/>
        <FlatButton label="General Knowledge" style={buttonStyle} href="/question/general"/>
        <FlatButton label="Admin Panel" style={buttonStyle} href="/admin"/>
    </div>
);

const Title = () => (
    <div>
        <FlatButton label="The Power of Why" style={buttonStyle} href="/"/>
    </div>
);

const Navbar = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
            iconElementLeft={<Title/>}
            iconElementRight={<Topics/>}
        />
    </MuiThemeProvider>
);

export default Navbar;

ReactDOM.render(
    <Navbar/>,
    document.getElementById('navbar')
);