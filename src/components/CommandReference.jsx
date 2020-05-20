import React, { Component } from 'react'
import CommandTable from './CommandTable'

export default class CommandReference extends Component {
  render () {
    const tables = []

    for (const category in this.props.commands) {
      const commandsInCategory = this.props.commands[category]
      tables.push(<CommandTable key={category} title={category} commands={commandsInCategory} />)
    }

    return tables
  }
}
