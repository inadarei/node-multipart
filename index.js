module.exports.parse = function(src_content, src_boundary) {


    // let safeboundary = escapeRegExp(boundary); // for regex. Unused right now
    let content = src_content;

    let nl = '\n';
    let marker = '--';
    let boundary = src_boundary;
    let typical = nl + marker + boundary;
    let distinguished = typical + marker;

    let message = content.split(distinguished);
    let chunks  = [];
    if(message.length>1) {
        chunks = message[0].split(typical).slice(1);
    }
};

function escapeRegExp(content) {
    return content.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '$&');
}