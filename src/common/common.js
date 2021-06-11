export function debounce(fn, delay) {
    let timeout = null;
    let delay1 = delay || 1000;
    return function () {
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(fn, delay1);

    }
}
export function debounce1(fn, delay) {
    // 记录上一次的延时器
    var timer = null;
    var delay = delay || 200;
    return function () {
        var args = arguments;
        var that = this;
        // 清除上一次延时器
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(that, args)
        }, delay);
    }
}