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

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: 0,
            question: ''
        }
        this.state.answer = "Nuclear fusion in the sun produces huge amounts of energy"
        this.handleSlider = this.handleSlider.bind(this);
    }

    getData() {
        $.ajax({
            type: "GET",
            url: 'https://power-of-why.firebaseio.com/general/1/question'
            data: {'cause_name': event.target.value},
            success: function (data) {
                this.setState({
                    question: data
                });
            }.bind(this)
        });
    }

    handleSlider(event, value) {
        this.setState({slider: value});
        if (this.state.slider == 0) {
            getData();
            this.setState({answer: this.state.question});
        }
        else if (this.state.slider == .2) {
            getData();
            this.setState({answer: this.state.question});
        }
        else if (this.state.slider == .4) {
            getData();
            this.setState({answer: this.state.question});
        }
        else if (this.state.slider == .6) {
            this.setState({answer: "and they travel in straight lines unless they hit something."});
        }
        else if (this.state.slider == .8) {
            this.setState({answer: "The sky looks blue because the photons coming from the sky must have been scattered"});
        }
        else if (this.state.slider == 1) {
            this.setState({answer: " and photons that look blue scatter more than others."});
        }

    };

    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
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
