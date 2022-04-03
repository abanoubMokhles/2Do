// use module's [date.js] exports object's [which has methods and properties] .getDate [custom method we make it can take any name] and equal it to the function expression
module.exports.getDate = function(){
    let currentDate = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    let todayDate = currentDate.toLocaleDateString("en-US", options);
    return todayDate;
}
;

module.exports.getDay = function(){
    let currentDate = new Date();
    let options = {
        weekday: "long",
    };
    let todayDate = currentDate.toLocaleDateString("en-US", options);
    return todayDate;
}

