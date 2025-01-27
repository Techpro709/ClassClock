import { DateTime, Zone } from "luxon";
import { matchDates } from "../utils/helpers"

export default class Time {
    public static fromMilliseconds(milliseconds: number): Time {
        const hours = Math.floor(milliseconds / 1000 / 60 / 60);
        milliseconds -= hours * 1000 * 60 * 60;
        const minutes = Math.floor(milliseconds / 1000 / 60);
        milliseconds -= minutes * 1000 * 60;
        const seconds = Math.floor(milliseconds / 1000);
        milliseconds -= seconds * 1000;

        return new Time(hours, minutes, seconds);
    }

    public static fromJSDate(date: Date, toLocalTime=false) {
        if (toLocalTime) {
            return new Time(date.getHours(), date.getMinutes(), date.getSeconds(), 'local');
        } else {
            return new Time(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), 'utc');
        }
    }

    public static fromISO(time: string) {
        const datetime = DateTime.fromISO(time)//, { zone: inTimeZone }
        return new Time(datetime.get("hour"), datetime.get("minute"), datetime.get("second") )
    }

    public static fromString(time: string) {
        const parts = time.split(":");
        if (parts.length < 2 || parts.length > 3) {
            //error
        }
        return new Time(
            parseInt(parts[0], 10),
            parseInt(parts[1], 10),
            parts.length === 3 ? parseInt(parts[2], 10) : undefined
        );
    }

    private time:DateTime;

    constructor(hours: number, minutes: number, seconds?: number, zone?: Zone | string) {
        let timeObj = {
            hour: Math.abs(hours % 24),
            minute: Math.abs(minutes % 60),
            second: Math.abs((seconds || 0) % 60)
        }
        if (zone) {
            this.time = DateTime.fromObject({ ...timeObj, zone })
        } else {
            this.time = DateTime.fromObject(timeObj)
        }
    }

    public getHours() {
        return this.time.get('hour');
    }
    public getMinutes() {
        return this.time.get('minute');
    }
    public getSeconds() {
        return this.time.get('second');
    }
    public getMillisecondsTo(otherTime: Time) {
        const oTime = matchDates(this.time, otherTime.asDateTime())
        return oTime.diff(this.time).toObject()['milliseconds']
    }
    public getTimeDeltaTo(otherTime: Time) {
        return Time.fromMilliseconds(Math.abs(this.getMillisecondsTo(otherTime)??0));
    }
    public asDateTime() {
        return this.time
    }
    //TODO: maybe make this into an options object to preserve the names
    public toString(excludeSeconds = false, use24HourTime = true) {

        const hrsformat = use24HourTime ? "HH" : "hh"
        const seconds = excludeSeconds? "": ":ss"
        const meridiem = use24HourTime? "": " a"

        const format = hrsformat + ":mm" + seconds + meridiem

        return this.time.toFormat(format)
    }

    public getFormattedString(excludeSeconds = false, use24HourTime = false) {
        return this.toString(excludeSeconds, use24HourTime)
    }

    //this overrides the automatic serialization of Time Objects and makes them return a string and not a plain object (which is more annoying to parse back in and rwould require an extra factory method)
    public toJSON() {
        return this.time.toFormat("HH:mm:ss");
    }

}
