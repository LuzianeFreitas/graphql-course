const db = require('../../../db')

module.exports = {
    Usuario: {
        perfil(usuario) {
            return db.perfis.find((p) => p.id === usuario.perfil)
        }
    },
    Query: {
        usuario(obj, args) {
            return db.usuarios.find((d) => d.id === args.id)
        },
        usuarios() {
            return db.usuarios
        }
    }
}