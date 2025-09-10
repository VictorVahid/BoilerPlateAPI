const UserUseCase = require('../useCases/User')

module.exports = {
  async createUser(req, res) {
    try {
      const userData = req.body
      const newUser = await UserUseCase.createUser(userData)
      res.status(201).json(newUser)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },

  async getUser(req, res) {
    try {
      const userId = req.params.id
      const user = await UserUseCase.getUserById(userId)
      if (!user) {
        return res.status(404).json({ error: 'User not found' })
      }
      res.json(user)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },

  async updateUser(req, res) {
    try {
      const userId = req.params.id
      const updateData = req.body
      const updatedUser = await UserUseCase.updateUser(userId, updateData)
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' })
      }
      res.json(updatedUser)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },

  async deleteUser(req, res) {
    try {
      const userId = req.params.id
      const deleted = await UserUseCase.deleteUser(userId)
      if (!deleted) {
        return res.status(404).json({ error: 'User not found' })
      }
      res.status(204).send()
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
