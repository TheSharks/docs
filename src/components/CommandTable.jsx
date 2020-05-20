import React, { Component } from 'react'
import commandProperties from '../utils/prettyCommandProperties'
import erisPermissions from '../utils/prettyErisPermissions'

export default class CommandTable extends Component {
  constructor (props) {
    super(props)
    this.generateRows = this.generateRows.bind(this)
  }

  prettifyValue (value) {
    // Format booleans to human-readable format
    if (typeof value === 'boolean') return value ? 'Yes' : 'No'

    // Format arrays to lists
    if (Array.isArray(value)) return value.join(', ')

    // Do not output empty objects
    if (typeof value === 'object' && Object.keys(value).length === 0) return ''

    // Prettify nullish string values
    if (typeof value === 'string') {
      if (value === '[help message not set]') return ''
      else if (value === 'Uncategorized') return ''
    }

    // Prettify permissions
    // Can't use optional chaining here because I can't access the Babel config... Thanks Docusaurus
    if (value && (value.channel || value.guild)) {
      const prettyPermissions = {}

      for (const permissionGroup in value) {
        prettyPermissions[permissionGroup] = value[permissionGroup].map(permission => erisPermissions[permission])
      }

      const channelPerms = prettyPermissions.channel ? `Channel: ${prettyPermissions.channel.join(', ')}` : ''
      const guildPerms = prettyPermissions.guild ? `Guild: ${prettyPermissions.guild.join(', ')}` : ''
      const joiner = prettyPermissions.channel && prettyPermissions.guild ? ', ' : ''

      return `${channelPerms}${joiner}${guildPerms}`
    }

    // Per default just stringify the value and output it
    return JSON.stringify(value).replace(/"/g, '')
  }

  generateRows () {
    const rows = []

    for (const command in this.props.commands) {
      const currentCommand = this.props.commands[command]
      const commandProps = [command].concat(Object.values(currentCommand)) // Add Name field property

      rows.push(
        <tr key={command}>
          {
            commandProps.map((value, i) => {
              return <td key={i}>{this.prettifyValue(value)}</td>
            })
          }
        </tr>
      )
    }

    return rows
  }

  render () {
    // Inserting name into commandProps since it's not contained here
    const commandProps = ['Name'].concat(Object.keys(commandProperties))

    return (
      <>
        <h2>{this.props.title}</h2>
        <table style={{ overflow: 'initial' }}>
          <thead>
            <tr>
              {
                commandProps.map((prop, i) => {
                  // Use prop name if it exists, otherwise just print the prop
                  // (This compensates for the added "Name" property which is not in the command properties)
                  return (
                    <th key={i}>
                      {commandProperties[prop] ? commandProperties[prop].name : prop}
                    </th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            {this.generateRows()}
          </tbody>
        </table>
      </>
    )
  }
}
