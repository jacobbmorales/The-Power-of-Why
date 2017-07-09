import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
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

class Suggestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 1};
    }

    handleChange(event, index, value){
        this.setState({value});
    }

    render() {
        return (

            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Card>
                        <CardHeader
                            title="Propose a question"
                            subtitle="First dimension is most general answer to fifth dimension being most complex"
                        />
                        <CardActions>
                            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                                <MenuItem value={1} primaryText="Science"/>
                                <MenuItem value={2} primaryText="Sports"/>
                                <MenuItem value={3} primaryText="History"/>
                                <MenuItem value={4} primaryText="General Knowledge"/>
                            </DropDownMenu>
                            <br />
                            <TextField
                                hintText="Question"
                            />
                            <br />
                            <TextField
                                hintText="First dimension"
                            />
                            <br />
                            <TextField
                                hintText="Second dimension"
                            /><br />
                            <TextField
                                hintText="Third dimension"
                            />
                            <br />
                            <TextField
                                hintText="Fourth dimension"
                            /><br />
                            <TextField
                                hintText="Fifth dimension"
                            /><br />
                            <FlatButton label="Add" href="/suggestion"/>
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