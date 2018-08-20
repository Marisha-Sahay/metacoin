module.exports = function(callback) {
  console.log("Hello World!");

  callback("Insert error here")

  process.exit()
}