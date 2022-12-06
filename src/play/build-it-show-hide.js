class VisibilityApp extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            visibility: false
        }
    }
    toggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Build it, show - hide</h1>
                <button onClick={this.toggle}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>Those are secret details. Hide them now!</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityApp />, document.getElementById('app'))







