export const UserSchema = {
  name: "User",
  properties: {
    id: { type: "string", indexed: true },
    name: "string?",
    username: "string?",
    avatarUrl: "string?",
    company: "string?",
    location: "string?"
  },
  primaryKey: "id",
}