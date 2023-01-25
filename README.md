# Node Webdav Simple CLI

To be run on any system without managing the build/dependencies, 
this package includes `ncc` to make an "executable". Simply run `pnpm package`

## Functions

### Delete

```shell
delete --help

Usage: index delete [options]

Delete, recursively, files and folders in path

Options:
  --dry                      Dry mode, no real delete (default: false)
  -P, --path <pathName>      Webdav path
  -H, --host <host>          Webdav host
  -l, --login <login>        Webdav login
  -p, --password <password>  Webdav password
  -h, --help                 display help for command
```
