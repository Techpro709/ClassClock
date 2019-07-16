import Time from "./time";

export interface ISchedule {
    name: string;
    dates: Date[];
    classes: IPeriod[];
}

export interface IPeriod {
    name: string;
    startTime: Time;
    endTime: Time;
}