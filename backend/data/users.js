import bcrypt from "bcryptjs";
const users = [
  {
    name: "Praveen Pugazh",
    email: "praveenpugazh14@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isRecruiter: true,
  },
  {
    name: "AK",
    email: "ak@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "VK",
    email: "vk@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
