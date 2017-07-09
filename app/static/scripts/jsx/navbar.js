import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
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

var buttonStyle = {
    backgroundColor: 'transparent',
    color: 'white'
};

const Topics = () => (
    <div>
        <FlatButton label="Home" style={buttonStyle} href="/"/>
        <FlatButton label="Science" style={buttonStyle} href="/science"/>
        <FlatButton label="Sports" style={buttonStyle} href="/sports"/>
        <FlatButton label="History" style={buttonStyle} href="/history"/>
        <FlatButton label="General Knowledge" style={buttonStyle} href="/general_knowledge"/>
    </div>
);

const Navbar = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
            title="The Power of Why"
            iconElementRight={<Topics/>}
        />
    </MuiThemeProvider>
);

export default Navbar;

ReactDOM.render(
    <Navbar/>,
    document.getElementById('navbar')
);
