const User = require("../models/userModel");

const User = require("../models/userModel");

class UserUseCase {
	constructor(validator) {
		this.validator = validator;
	}

	async getUserById(userId) {
		return await User.findById(userId);
	}

	async createUser(userData) {
		const { error } = this.validator.validate(userData);
		if (error) throw new Error(error.details[0].message);
		return await User.create(userData);
	}

	async updateUser(userId, updateData) {
		return await User.findByIdAndUpdate(userId, updateData, { new: true });
	}

	async deleteUser(userId) {
		return await User.findByIdAndDelete(userId);
	}

	async listUsers(filter = {}) {
		return await User.find(filter);
	}
}

module.exports = UserUseCase;
