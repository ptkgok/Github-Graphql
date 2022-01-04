export const UserSchema = {
  name: 'User',
  properties: {
    id: {type: 'string', indexed: true},
    name: 'string?',
    login: 'string?',
    avatarUrl: 'string?',
    company: 'string?',
    location: 'string?',
    starredRepositories: 'int?',
  },
  primaryKey: 'id',
};
