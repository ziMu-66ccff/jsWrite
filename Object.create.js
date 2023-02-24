function create(obj) {
    function Fn();
    Fn.prototype = obj;
    return Fn();
}