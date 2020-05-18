const path = require('path')
const fs = require('fs-extra')
const requireAll = require('require-all')

;(async () => {
  try {
    // Remove extraneous command line parameters
    process.argv.splice(0, 2)

    const wildbeastPath = process.argv[0]

    if (!fs.existsSync(wildbeastPath)) {
      console.error(`Could not find a directory at ${wildbeastPath}! Exiting...`)
      process.exit(1)
    }

    const commandsPath = path.join(wildbeastPath, 'src/commands')

    if (!fs.existsSync(commandsPath)) {
      console.log(`Could not find a valid WildBeast command directory at ${commandsPath}! Exiting...`)
      process.exit(1)
    }

    const commandDirectory = await fs.readdir(commandsPath)
    const commands = {}

    for (const category of commandDirectory) {
      // Having to use process.cwd() here because requires need to be relative to this file
      const categoryPath = path.join(process.cwd(), commandsPath, category)
      const commandsInCategory = requireAll(categoryPath)

      commands[category] = {}

      for (const command in commandsInCategory) {
        const currentCommand = commandsInCategory[command]
        // Leave out fn property as it's not relevant to this info dump, we only want the command metadata
        commands[category][command] = currentCommand.props
      }
    }

    const dataDirectory = path.join(process.cwd(), 'data')
    await fs.ensureDir(dataDirectory)

    const dataFile = path.join(dataDirectory, 'commands.json')
    await fs.writeFile(dataFile, JSON.stringify(commands))

    console.log(`Command metadata successfully dumped to ${dataFile}`)
  } catch (err) {
    console.error('Could not dump command information: ', err)
    process.exit(1)
  }
})()
