export const COMMAND_NAME = {
  DELETE: 'delete'
}

export const COMMON_REQUIRED_OPTIONS_COMMANDS = [
  COMMAND_NAME.DELETE
]

export function improveProgram (program) {
  function addRequiredOptions (options = [], commandsName = []) {
    program.commands.forEach(command => {
      if (commandsName.includes(command.name())) {
        options.forEach(option => {
          command.requiredOption(...option)
        })
      }
    })
  }

  return {
    addRequiredOptions
  }
}
