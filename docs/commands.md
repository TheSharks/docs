---
id: commands
title: Command reference
---

This page contains the command reference for WildBeast. Descriptions for the different properties and their meanings can be found in the [Command class reference](command_class).

:::note

Send the message **++help <command\>** (Prefix may vary) to the bot to get further information on any given command.

:::

:::note

An empty **Help message** field indicates that the command takes no arguments and is accepted as such.

:::

import commands from '../data/commands.json'
import CommandReference from '../src/components/CommandReference'

<CommandReference commands={commands}/>
