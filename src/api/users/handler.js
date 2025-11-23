<<<<<<< HEAD
/* eslint-disable no-unused-vars */
=======
const autoBind = require('auto-bind');

>>>>>>> 71373e2eea6ecad6f5839ab99c9ddcfe385ba8a3
class UsersHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

<<<<<<< HEAD
    this.postUserHandler = this.postUserHandler.bind(this);
    this.getUserByIdHandler = this.getUserByIdHandler.bind(this);
=======
    autoBind(this);
>>>>>>> 71373e2eea6ecad6f5839ab99c9ddcfe385ba8a3
  }

  async postUserHandler(request, h) {
    this._validator.validateUserPayload(request.payload);
    const { username, password, fullname } = request.payload;

    const userId = await this._service.addUser({ username, password, fullname });

    const response = h.response({
      status: 'success',
      message: 'User berhasil ditambahkan',
      data: {
        userId,
      },
    });
    response.code(201);
    return response;
  }

  async getUserByIdHandler(request, h) {
    const { id } = request.params;
<<<<<<< HEAD
    const user = await this._service.getUserById(id);
=======

    const user = await this._service.getUserById(id);

>>>>>>> 71373e2eea6ecad6f5839ab99c9ddcfe385ba8a3
    return {
      status: 'success',
      data: {
        user,
      },
    };
  }
}

module.exports = UsersHandler;
