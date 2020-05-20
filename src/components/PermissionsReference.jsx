import React, { Component } from 'react'
import permissions from '../utils/prettyErisPermissions'

export default class PermissionsReference extends Component {
  generateRows () {
    const rows = []

    for (const permission in permissions) {
      const prettyPermission = permissions[permission]
      rows.push(
        <tr>
          <td><code>{permission}</code></td>
          <td>{prettyPermission}</td>
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
            <th>Permission</th>
            <th>Verbose name (In client)</th>
          </tr>
        </thead>
        <tbody>
          {this.generateRows()}
        </tbody>
      </table>
    )
  }
}
