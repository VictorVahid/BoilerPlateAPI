const User = require("../models/userModel");

class UserUseCase {
	constructor(validator) {
		this.validator = validator;
	}


  class GetUserByIdUseCase {
    async execute(userId) {
      return await User.findById(userId);
    }
  }

  class CreateUserUseCase {
    constructor(validator) {
      this.validator = validator;
    }

    async execute(userData) {
      const { error } = this.validator.validate(userData);
      if (error) throw new Error(error.details[0].message);
      return await User.create(userData);
    }
  }

  class UpdateUserUseCase {
    async execute(userId, updateData) {
      return await User.findByIdAndUpdate(userId, updateData, { new: true });
    }
  }

  class DeleteUserUseCase {
    async execute(userId) {
      return await User.findByIdAndDelete(userId);
    }
  }

  class ListUsersUseCase {
    async execute(filter = {}) {
      return await User.find(filter);
    }
  }


module.exports = UserUseCase;
