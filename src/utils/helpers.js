export function findHeight(selector) {
    let query = document.querySelectorAll(selector),
        elements = query.length,
        max = 0;
    if (elements) {
        while (elements--) {
            var element = query[elements];
            if (element.clientHeight > max) {
                max = element.clientHeight;
            }
        }
        return max;
    }
}
export function setAttributeString (string, replaceString) {
    string = string.replace(replaceString, `<b>${replaceString}</b>`);
    return {__html: string};
}