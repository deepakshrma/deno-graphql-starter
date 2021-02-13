const UserSchema = `
  type Friends {
    id: Int
    name: String
  }

  type User {
    _id: String
    index: Int
    guid: String
    isActive: Boolean
    balance: String
    picture: String
    age: Int
    name: String
    gender: String
    email: String
    phone: String
    address: String
    about: String
    registered: String
    friends: [Friends]
  }
`;
export default UserSchema;
