module.exports = {
  MustBeAdminMiddleware: require('./mustBeAdmin.middleware'),
  MustBeLoggedOnMiddleware: require('./mustBeLoggedOn.middleware'),
  ValidateAuthInputDataMiddleware: require('./validateAuthInputData.middleware'),
  BearerNotMandatoryMiddleware: require('./bearerNotMandatory.middleware'),
  CheckBooksInputMiddleware: require('./checkBooksInput.middleware'),
  ValidateSearchInputMiddleware: require('./validateSearchInput.middleware'),
}
