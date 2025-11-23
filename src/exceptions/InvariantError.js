const ClientError = require('./ClientError');

class InvariantError extends ClientError {
  constructor(message) {
    super(message);
    this.name = 'InvariantError';
  }
}
<<<<<<< HEAD

=======
>>>>>>> 71373e2eea6ecad6f5839ab99c9ddcfe385ba8a3
module.exports = InvariantError;
