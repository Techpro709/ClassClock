
import {
    getValueIfKeyInList,
    sortClassesByStartTime,
    getTimeStateForDateAtSchool,
    checkTimeRange,
    matchDates
} from "./helpers";
import ClassPeriod from "../@types/classperiod";
import { classPeriod2, classPeriod, beforeSchoolHours, school, betweenClass, inClass, noSchool, afterSchoolHours, bellScheduleClasses, duringClass, startTime, endTime, startTime2, beforeClass, endTime2, afterClass } from "./testconstants";
import { TimeStates, TimeComparisons } from "./enums";

test("get value if key in list", () => {
    const object1 = { value1: "foo" };
    const object2 = { value_1: "foo" };
    const list = ["value_1", "value1"];

    expect(getValueIfKeyInList(list, object1)).toBe("foo");
    expect(getValueIfKeyInList(list, object2)).toBe("foo");
    expect(getValueIfKeyInList(["doesNotExist"], object1)).toBeFalsy();
});

//ignoring getCurrentDate

test("sort classes by start time", () => {
    expect(sortClassesByStartTime(bellScheduleClasses.reverse())).toEqual(bellScheduleClasses);

    expect(sortClassesByStartTime(bellScheduleClasses.reverse())[0].getName()).toEqual("First Period");
});


test("get time states for given date and school", () => {
    expect(getTimeStateForDateAtSchool(beforeSchoolHours, school)).toBe(
        TimeStates.OUTSIDE_SCHOOL_HOURS
    );

    expect(getTimeStateForDateAtSchool(noSchool, school)).toBe(
        TimeStates.DAY_OFF
    );

    expect(getTimeStateForDateAtSchool(betweenClass, school)).toBe(
        TimeStates.SCHOOL_IN_CLASS_OUT
    );

    expect(getTimeStateForDateAtSchool(inClass, school)).toBe(
        TimeStates.CLASS_IN_SESSION
    );

    expect(getTimeStateForDateAtSchool(afterSchoolHours, school)).toBe(
        TimeStates.OUTSIDE_SCHOOL_HOURS
    );
    
});

test("check time range", () => {

    expect(checkTimeRange(duringClass, startTime, endTime)).toBe(
        TimeComparisons.IS_DURING_OR_EXACTLY
    );

    expect(checkTimeRange(duringClass, endTime, startTime2)).toBe(
        TimeComparisons.IS_BEFORE
    );

    expect(checkTimeRange(beforeClass, startTime, endTime2)).toBe(
        TimeComparisons.IS_BEFORE
    );

    expect(checkTimeRange(startTime, startTime, endTime)).toBe(
        TimeComparisons.IS_DURING_OR_EXACTLY
    );

    expect(checkTimeRange(endTime, startTime, endTime)).toBe(
        TimeComparisons.IS_DURING_OR_EXACTLY
    );

    expect(checkTimeRange(afterClass, startTime, endTime)).toBe(
        TimeComparisons.IS_AFTER
    );

    expect(checkTimeRange(afterClass, startTime, endTime2)).toBe(
        TimeComparisons.IS_DURING_OR_EXACTLY
    );

    
});

test("check time range ignoring day", () => {

    expect(checkTimeRange(duringClass.plus({ days: 1 }), startTime, endTime, true)).toBe(
        TimeComparisons.IS_DURING_OR_EXACTLY
    );

    expect(checkTimeRange(duringClass.plus({ days: 1 }), endTime, startTime2, true)).toBe(
        TimeComparisons.IS_BEFORE
    );

    expect(checkTimeRange(beforeClass.plus({ days: 1 }), startTime, endTime2, true)).toBe(
        TimeComparisons.IS_BEFORE
    );

    expect(checkTimeRange(startTime.plus({ days: 1 }), startTime, endTime, true)).toBe(
        TimeComparisons.IS_DURING_OR_EXACTLY
    );

    expect(checkTimeRange(endTime.plus({ days: 1 }), startTime, endTime, true)).toBe(
        TimeComparisons.IS_DURING_OR_EXACTLY
    );

    expect(checkTimeRange(afterClass.plus({ days: 1 }), startTime, endTime, true)).toBe(
        TimeComparisons.IS_AFTER
    );

    expect(checkTimeRange(afterClass.plus({ days: 1 }), startTime, endTime2, true)).toBe(
        TimeComparisons.IS_DURING_OR_EXACTLY
    );


});

test("matches dates between two datetimes", () => {
    expect(matchDates(duringClass, afterClass.plus({ days: 1 }))).toEqual(afterClass);
});
