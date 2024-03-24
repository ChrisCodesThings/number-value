import isNumber from '@chriscodesthings/is-number';
import isString from '@chriscodesthings/is-string';

export default function (x) {
    if (isNumber(x)) {
        if (Number.isFinite(x) && Number.isInteger(x)) {
            return Number(x);
        }
    }

    if (isString(x)) {
        const val = Number(x);
        const isNum = val - val == 0;

        if (isNum) {
            return val;
        }
    }

    return;
}
