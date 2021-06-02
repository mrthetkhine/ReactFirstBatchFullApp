import { LOAD_USER} from "./constant/action-type";

export function loadUser(user) {
    return {
        type: LOAD_USER,
        user: user
    }
}