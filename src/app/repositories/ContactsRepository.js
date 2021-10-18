const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Marcos',
    email: 'marcos@mail.com',
    phone: '123123123',
    category: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
