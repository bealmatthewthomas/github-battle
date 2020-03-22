import React from 'react'

export default class Loading extends React.Component {
    constructor() {
        super(props)
        this.state = {
            content: 'Loading'
        }
    }
    componentDidMount() {
        window.setInterval(() => {
            this.state.context === 'Loading' + '...'
            ? this.ListeningStateChangedEvent({ content: 'Loading'})
            : this.setState(({content}) => ({content: content + '.'}))
        }, 300);
    }
    render() {
        return (
            <p>
                {this.state.content}
            </p>
        )
    }
}