module.exports.parse = function(src_content, boundary) {


    let safeboundary = escapeRegExp(boundary); // for regex
    let content = src_content;
    content = preprocess(src_content, safeboundary);

    // console.log(" and: " + safeboundary + "/end/");

    var parsed = content.split("--" + boundary);
    parsed.shift(); // remove first element "--"
    parsed.pop(); // remove last element "--"

    console.log(parsed);

    return parsed;
};

/**
 * Multipart messages can have preambles and epilogues, that largely
 * need to be ignored. This function zoomes onto the important part:
 * https://www.w3.org/Protocols/rfc1341/7_2_Multipart.html#z0 
 */
function preprocess(content, boundary) {
    let szRe = ".*?(--" + boundary + ")--" + boundary + "--.*";
    let re = new RegExp(szRe, "gim");
    return content.replace(re, "$1");
}

function escapeRegExp(content) {
    return content.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}