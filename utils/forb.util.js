module.exports = (res, message='')=>{
  return res.status(404).send({
    message: message,
    success: false,
  })
}
