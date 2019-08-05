import * as _ from "lodash";

export default function (errors: any) {
    const result: any = {};
    _.forEach(errors, (val, key) => {
        result[key] = val.message;
    });
    return result;
}