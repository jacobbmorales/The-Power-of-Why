import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
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

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 1};
    }

    handleChange(event, index, value) {
        this.setState({value});
    }

    render() {
        return (

            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Card>
                        <CardHeader
                            title="Questions"
                        />
                        <CardActions>
                            <List>
                                <ListItem primaryText="Why is the sky blue?" href="/answer"/>
                                <ListItem primaryText="Holder"/>
                                <ListItem primaryText="Holder"/>
                                <ListItem primaryText="Holder"/>
                                <ListItem primaryText="Holder"/>
                            </List>
                        </CardActions>
                    </Card>
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
