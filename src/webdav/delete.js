export async function webdavDelete (params) {
  try {
    // Get directory contents
    const { data } = await params.webdavClient.getDirectoryContents(params.path, {
      details: true
    })

    if (!data.length) {
      console.log('No more file to delete')
      return
    }

    const toDelete = data.map(r => r.filename)
    console.log('Delete files:', toDelete)

    if (!params.dry) {
      Promise.all(toDelete.map(params.webdavClient.deleteFile)).then(() => {
        return webdavDelete(params)
      })
    }
  } catch (e) {
    console.log('Error', e)
  }
}
