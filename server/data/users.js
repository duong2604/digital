import bcrypt from "bcryptjs";

const users = [
  {
    username: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    role: "admin",
  },
  {
    username: "John Doe",
    email: "john@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    username: "Jane Doe",
    email: "jane@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
