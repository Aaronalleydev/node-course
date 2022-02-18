const fs = require('fs')

// reading files
// Takes two arguments, the file and a function with two params, the error and the data from the file. 
// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(data.toString());
// })

// console.log('last line')
// writing files
// Takes three arguments, the filepath to be written, the text to overwrite and callback function. If file doesnt exist it will create a new one
// fs.writeFile('./docs/blog2.txt', 'Hello, new', () => {
//   console.log('file was written')
// })
// directories
// if(!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', (err) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log('folder created')
//   });
// } else {
//   fs.rmdir('./assets', (err) => {
//     console.log(err)
//   })
//   console.log('folder deleted')
// }


// deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('file delete')
  })
}

