// A map of prettier and more verbose names for WildBeast command properties

export default {
  helpMessage: {
    name: 'Help message',
    description: 'Help message for this command, contains information of what it does, how to use it, etc.',
    type: 'String',
    default: '[help message not set]'
  },
  hidden: {
    name: 'Is hidden?',
    description: 'Whether to hide this command from the help command indexing',
    type: 'Boolean',
    default: false
  },
  nsfw: {
    name: 'Is NSFW?',
    description: 'Whether to mark this command as Not Safe For Work, disabling it from being run outside channels marked as NSFW',
    type: 'Boolean',
    default: false
  },
  disableDM: {
    name: 'Disabled in DMs?',
    description: 'Whether this command is disabled in Direct Messages',
    type: 'Boolean',
    default: false
  },
  userPerms: {
    name: 'Required user permissions',
    description: 'Required permissions for the user running this command',
    type: 'Object<Permissions>',
    default: {}
  },
  clientPerms: {
    name: 'Required client permissions',
    description: 'Required permissions for the bot itself',
    type: 'Object<Permissions>',
    default: {}
  },
  prereqs: {
    name: 'Required prerequisites',
    description: 'Required internal custom prerequisites',
    type: 'Array<String>',
    default: []
  },
  aliases: {
    name: 'Aliases',
    description: 'Alternative names for running this command',
    type: 'Array<String>',
    default: []
  }
}
