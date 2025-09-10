class User {
	constructor({ id, nome, email, senha }) {
		this.id = id
		this.nome = nome
		this.email = email
		this.senha = senha
		this.validate()
	}

	validate() {
		if (!this.nome || this.nome.trim() === '')			{
 throw new Error('Nome do úsuario é obrigatorio')
}
	}
}

module.exports = User
