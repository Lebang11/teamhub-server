const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
}

function comparePassword(raw, hash) {
    return bcrypt.compareSync(raw, hash);
}

module.exports = {
    hashPassword,
    comparePassword
}

