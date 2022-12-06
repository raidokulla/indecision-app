
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: props.options
        }
    }
    componentDidMount() {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)
        if (!options) return
        this.setState(() => ({ options }))
    }
    componentDidUpdate(prevProps, prevState) {
        try {
            if (prevState.options.length === this.state.options.length) return
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        } catch (error) {
            console.log(error)
        }
    }
    componentWillUnmount() {
        console.log('Component will unmount')
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        console.log(option)
    }
    handleAddOption(option) {

        if (!option) return 'Enter valid value to add item'
        if (this.state.options.indexOf(option) > -1) return 'This option already exsists'

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
}

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
        </div>
    )  
}

const Options = (props) => {
    return (
        <div>
            <p>{props.options.length > 0 ? 'Here are your options:' : 'Please add an option to get started!'}</p>
            {props.options.length > 0 && <button onClick={props.handleDeleteOptions}>Remove all</button>}
            <div>
                {props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption} 
                    />
                ))}
            </div>
        </div>
    ) 
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => { props.handleDeleteOption(props.optionText)} }>Remove</button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault()

        let option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => ({ error: error }))

        if (!error) e.target.elements.option.value = null
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))