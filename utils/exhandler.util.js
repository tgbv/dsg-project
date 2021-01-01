module.exports = (res, message='')=>{
  return res.status(500).send({
    success: false,
    message: message,
  })
}
