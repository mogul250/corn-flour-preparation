import { DateTime } from "luxon";

export function now() {
    try {
        let time = new DateTime.now();
        time = time.setZone('Africa/kigali')
        time = time.toFormat('yyyy-MM-dd HH:mm:ss')
        return time
    } catch (error) {
        throw error
    }
}