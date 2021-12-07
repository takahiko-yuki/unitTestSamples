/**
 * 整数3の剰余演算で余りがないか
 * @param int num 
 * @returns bool
 */
module.exports = (num) => {
    if (num == 0) {
        return false
    } 

    if ((num % 3) === 0) {
        return true;
    }

    return false;
}