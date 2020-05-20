---
id: command_class
title: Command class reference
---

This page documents the **Command** class, which is used to define commands for WildBeast.

### class Command<fn: Function, props: Object>

```js
class Command {
  constructor (fn, props) {
    this.props = {
      category: 'Uncategorized',
      helpMessage: '[help message not set]',
      accessLevel: 0,
      hidden: false,
      nsfw: false,
      disableDM: false,
      userPerms: {},
      clientPerms: {},
      prereqs: [],
      aliases: [],
      ...props
    }
  }
}
```

#### fn

| Parameter | Description | Type |
| --------- | ----------- | ---- |
| msg | [Eris message object](https://abal.moe/Eris/docs/Message) of the message that invoked the command | [Eris.Message](https://abal.moe/Eris/docs/Message) |
| suffix | Any text input submitted after the command name (I.e. in `++help 8ball`, the `suffix` parameter would be set to `8ball`, and vice versa). | String |

#### props

import PropsReference from '../src/components/PropsReference'

<PropsReference/>

:::note Categories

The `category` property is purely cosmetic. In this documentation suite, command categories are determined by the folder the command file is located in inside the `src/commands` directory.

:::

:::note Prerequisites

The `prereqs` property is an array of name references to files in the `src/components/prereqs` directory.

:::

:::note Permissions

The `permissions` property is a [Permissions](#interface-permissionsguild-arraypermission-channel-arraypermission) interface, which is documented below.

:::

### interface Permissions<guild: Array<[Permission](#type-permission-stringerisconstantspermissions)\>, channel: Array<[Permission](#type-permission-stringerisconstantspermissions)\>>

```js
interface Permissions {
  channel: Array<Permission>,
  guild: Array<Permission>
}
```

A **Permissions** interface establishes which guild and/or channel permissions are required for running a certain command.

### type Permission: String

A **Permission** is a string derived from the Eris [Permissions](https://abal.moe/Eris/docs/reference) interface. Currently, the following permissions are supported.

import PermissionsReference from '../src/components/PermissionsReference'

<PermissionsReference/>
