import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
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

const Main = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Card>
            <center>
                <CardActions>

                    <CardText>
                        The purpose of The Power of Why is to consolidate answers to questions you may have about a
                        wide variety of topics. You may be asking yourself, "Why not just Google these questions?" What
                        The Power of Why provides that Google does not is a range from general answers to these
                        questions, to much more in depth answers.
                        Enjoy getting some of your questions answered, and feel free to suggest more questions you have!
                    </CardText>
                    <RaisedButton label="Suggest a Question and Answer" href="/suggestion"/>
                    <RaisedButton label="Suggest a Question to be Answered" href="/question_suggestion"/>

                </CardActions>
            </center>
        </Card>
    </MuiThemeProvider>
);

export default Main;

ReactDOM.render(
    <Main/>,
    document.getElementById('main')
);