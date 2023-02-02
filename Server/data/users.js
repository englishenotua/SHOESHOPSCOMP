import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'jobananada@gmail.com',
    password: bcrypt.hashSync('Ssasdfasdf12345', 10),
    isAdmin: true,
  },
  {
    name: 'User',
    email: 'englishenotua@gmail.com',
    password: bcrypt.hashSync('Ssasdfasdf12345', 10),
  },
];

export default users;
