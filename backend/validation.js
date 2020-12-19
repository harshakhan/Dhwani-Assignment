const yup = require('yup');

const registerSchema = yup.object().shape({
    name: yup.string().min(4, 'First name should be miniumum 4 characters!').required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(6, 'Password should have miniumum 6 characters!').required('Required'),
    
});

const loginSchema = yup.object().shape({
    username: yup.string().required('Please fill in your username'),
    password: yup.string().required('Please fill in your password')
});

module.exports = { loginSchema, registerSchema };