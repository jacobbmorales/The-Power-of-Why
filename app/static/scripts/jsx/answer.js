import React from 'react';
import ReactDOM from 'react-dom';
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
const min = 0;
const max = Math.pow(10, 6);
const power = 12;

function transform(value) {
    return Math.round((Math.exp(power * value / max) - 1) / (Math.exp(power) - 1) * max);
}

function reverse(value) {
    return (1 / power) * Math.log(((Math.exp(power) - 1) * value / max) + 1) * max;
}

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {slider: 0};
        this.handleSlider = this.handleSlider.bind(this);
    }

  handleSlider(event, value){
    this.setState({slider: transform(value)});
  };

render()
{
    return (
        <div>
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                <Slider
                    step={0.20}
                    value={reverse(this.state.slider)}
                    onChange={this.handleSlider}
                />
                <p>
                    <span>{'The value of this slider is: '}</span>
                    <span>{this.state.slider}</span>
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
