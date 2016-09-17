module.exports.parse = function(content, boundary) {

    // Only needed if we are goi
    // let safeboundary = escapeRegExp(boundary);

    let safeboundary = boundary;

    // console.log(" and: " + safeboundary + "/end/");

    var parsed = content.split("--" + safeboundary);
    parsed.shift(); // remove first element "--"
    parsed.pop(); // remove last element "--"

    //console.log(parsed);

    return parsed;
};

function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}