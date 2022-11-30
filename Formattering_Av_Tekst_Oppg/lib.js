
function fixText(text){
    text = text.trim();
    let firstLetter = text.charAt(0);
    let restOfString = text.substring(1);
    firstLetter = firstLetter.toUpperCase();
    restOfString = restOfString.toLowerCase();
    return firstLetter + restOfString;
}





