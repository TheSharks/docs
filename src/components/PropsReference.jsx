import React, { Component } from 'react'
import commandProperties from '../utils/prettyCommandProperties'

export default class PropsReference extends Component {
  generateRows () {
    const rows = []

    for (const prop in commandProperties) {
      const currentProperty = commandProperties[prop]

      currentProperty.name = prop // Use programmatic name instead of pretty

      rows.push(
        <tr key={prop}>
          {Object.values(currentProperty).map((value, i) => {
            return (
              <td key={i}>
                {typeof value !== 'string' ? JSON.stringify(value) : value}
              </td>
            )
          })}
        </tr>
      )
    }

    return rows
  }

  render () {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          {this.generateRows()}
        </tbody>
      </table>
    )
  }
}
