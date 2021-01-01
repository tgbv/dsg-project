module.exports = (res, message='')=>{
  return res.status(401).send({
    success: false,
    message: message,
  })
}
