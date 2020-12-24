
import {
    getValueIfKeyInList,
    deconstructJsonApiResource,
    sortClassesByStartTime,
    getTimeStateForDateAtSchool,
    getNextImportantTime,
    checkTimeRange
} from "./helpers";
import ClassPeriod from "../@types/classperiod";
import Time from "../@types/time";
import { classPeriod2, classPeriod, beforeSchoolHours, school, betweenClass, inClass, noSchool, afterSchoolHours, bellScheduleClasses, duringClass, startTime, endTime, startTime2, beforeClass, endTime2 } from "./testconstants";
import { TimeStates, TimeComparisons } from "./enums";

test("get value if key in list", () => {
    const object1 = { value1: "foo" };
    const object2 = { value_1: "foo" };
    const list = ["value_1", "value1"];

    expect(getValueIfKeyInList(list, object1)).toBe("foo");
    expect(getValueIfKeyInList(list, object2)).toBe("foo");
    expect(getValueIfKeyInList(["doesNotExist"], object1)).toBeFalsy();
});

test("deconstruct JSON:API responses", () => {
    const jsonapi_resource_object = {
        type: "sample",
        id: "1",
        attributes: {
            prop1: "foo",
            prop2: "bar",
            prop3: "baz"
        },
        links: {
            self: "/the/path/to/the/thing"
        }
    };

    const flattened_response = {
        type: "sample",
        id: "1",
        prop1: "foo",
        prop2: "bar",
        prop3: "baz",
        endpoint: "/the/path/to/the/thing"
    };

    expect(deconstructJsonApiResource(jsonapi_resource_object)).toEqual(
        flattened_response
    );
});

//ignoring getCurrentDate

test("sort classes by start time", () => {
    expect(sortClassesByStartTime(bellScheduleClasses.reverse())).toEqual(bellScheduleClasses);
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


test("get next important time", () => {
    expect(getNextImportantTime(beforeSchoolHours, school)).toBe([
        classPeriod,
        classPeriod.getStartTime()
    ]);

    expect(getTimeStateForDateAtSchool(noSchool, school)).toBeFalsy();
    
    expect(getTimeStateForDateAtSchool(betweenClass, school)).toBe([
        classPeriod2,
        classPeriod2.getStartTime()
    ]);

    expect(getTimeStateForDateAtSchool(inClass, school)).toBe([
        classPeriod,
        classPeriod.getEndTime()
    ]);

    expect(getTimeStateForDateAtSchool(afterSchoolHours, school)).toBeFalsy();
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
});