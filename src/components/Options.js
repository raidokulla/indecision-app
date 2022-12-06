import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">{props.options.length > 0 ? 'Your options' : 'Please add an option to get started!'}</h3>
            {props.options.length > 0 && <button className="button button--link" onClick={props.handleDeleteOptions}>Remove all</button>}
        </div>
        <div>
            {props.options.map((option, index) => (
                <Option 
                    key={option} 
                    optionText={option}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption} 
                />
            ))}
        </div>
    </div>
)

export default Options