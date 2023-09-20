const bcrypt = require('bcryptjs');

const hashPassword = async function (password) {
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
}

const comparePassword = async function (raw, hash) {
    return await bcrypt.compareSync(raw, hash);
}

module.exports = {
    hashPassword,
    comparePassword
}

