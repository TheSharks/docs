---
id: custom_commands
title: Custom command creation
---

Creating custom commands in WildBeast is very easy. Simply create a file in the `src/commands/*` folder (* = a subfolder of your choice) with the following structure:

```js
// src/commands/utils/myCommand.js
const Command = require('../../classes/Command')

module.exports = new Command(msg => {
  msg.channel.createMessage('This is my new command!')
})
```

And you're good to go!

If you want to take user input for a command, just add the `suffix` parameter to the parameter list for the executor function:

```js {4}
// src/commands/utils/echo.js
const Command = require('../../classes/Command')

module.exports = new Command((msg, suffix) => {
  msg.channel.createMessage(`You said: ${suffix}`)
})
```

That's it! No fuss, no tricks. Simple and functional.

:::note Tip: Changing command properties

For further customisation, you can change various properties of the [`props`](command_class#props) object, which you may optionally pass to the [Command](command_class#class-commandfn-function-props-object) constructor. See [Command class reference](command_class) for more information.


:::
