import Realm from "realm";
import { TaskSchema } from "./schemas/task.schema";
import { UserSchema } from "./schemas/users.schema";


export async function InitRealm() {
  return Realm.open({
    schema: [TaskSchema, UserSchema],
  })
}
