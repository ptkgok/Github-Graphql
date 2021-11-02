import Realm from "realm";
import { UserSchema } from "./schemas/users.schema";


export async function InitRealm() {
  return Realm.open({
    schema: [UserSchema],
  })
}
