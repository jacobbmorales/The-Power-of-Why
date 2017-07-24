import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
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

const Main = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Card>
            <CardHeader
                title="Add a question!"
                subtitle="(Questions must be reviewed)"
            />
            <CardActions>
                <FlatButton label="Add" href="/suggestion"/>
                <FlatButton label="Admin Sign In" href="/admin"/>
            </CardActions>
        </Card>
    </MuiThemeProvider>
);

export default Main;

ReactDOM.render(
    <Main/>,
    document.getElementById('main')
);