console.log('App is running')

// JSX - Javascript XML
const appObj = {
    title: 'Indecision App',
    subtitle: 'My first react project',
    options: []
}
const onFormSubmit = (e) => {
    e.preventDefault()
    
    const option = e.target.elements.option.value

    if (option) {
        appObj.options.push(option)
        e.target.elements.option.value = null
        renderApp()
    }
}

const clearList = () => {
    appObj.options = []
    renderApp()
}

const pickOne = () => {
    const randomNum = Math.floor(Math.random() * appObj.options.length)
    const option = appObj.options[randomNum]
    console.log(option)
}


// Inject react
let appRoot = document.getElementById('app')

const renderApp = () => {
    let template = (
        <div>
            <h1>{appObj.title}</h1>
            {appObj.subtitle && <p>{appObj.subtitle}</p>}
            <p>{appObj.options && appObj.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{appObj.options.length}</p>
            {
                appObj.options.length > 0 && 
                <button onClick={clearList}>Clear list</button> &&
                <button onClick={pickOne}>Pick one</button>
            }
            <ul>
                { appObj.options.map((option) => <li key={option}>{option}</li>) }
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderApp()

