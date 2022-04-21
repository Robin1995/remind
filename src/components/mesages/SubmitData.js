import React from "react";

export default class SubmitData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    handleVisibilityChange() {
        if (document.visibilityState !== "hidden") {
            setTimeout(() => {
                navigator.clipboard.readText().then(clipText => this.setState({ input: clipText }));
            }, 300);
        }
    }
    componentDidMount() {
        document.addEventListener("visibilitychange", this.handleVisibilityChange, false);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }
    handleSubmit() {
        if (this.state.input !== '') {
            this.setState({ input: '' })
            this.props.submitMessage(this.state.input)
        }
    }
    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.handleSubmit();
        }
    }
    render() {
        return (
            <section>
                <h2>Type in a new Message:</h2>
                <input autoFocus type={'text'} title="Digite una frase y oprima enter"
                    onChange={this.handleChange} value={this.state.input}
                    onKeyPress={this.handleKeyPress} />
            </section>
        )
    }
}