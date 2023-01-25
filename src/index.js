import { Command } from 'commander'
import { webdavDelete } from './webdav/delete.js'
import { withWebdav } from './webdav/client.js'
import { COMMAND_NAME, COMMON_REQUIRED_OPTIONS_COMMANDS, improveProgram } from './cli/command.js'
import { commonRequiredOptions } from './cli/cliOptions.js'
const program = new Command()

program
  .command(COMMAND_NAME.DELETE)
  .description('Delete, recursively, files and folders in path')
  .option('--dry', 'Dry mode, no real delete', false)
  .requiredOption('-P, --path <pathName>', 'Webdav path')
  .action((options) => {
    withWebdav(options)((webdavClient) => {
      webdavDelete({
        webdavClient,
        dry: options.dry,
        path: options.path
      })
    })
  })

const { addRequiredOptions } = improveProgram(program)

addRequiredOptions(commonRequiredOptions, COMMON_REQUIRED_OPTIONS_COMMANDS)

program.parse(process.argv)
