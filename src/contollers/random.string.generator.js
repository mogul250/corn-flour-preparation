export function rsg(len, incNum, incStr, incSchar, incUc) {
    const array = [
        [
            Array.from('abcdefghijklmnopqrstuvwxyz'),
            Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        ],
        Array.from('0123456789'),
        Array.from('!@#$%^&*()_+[]{}|;:,.<>?/~`-=')
    ];

    let newA = array.slice();
    if (len == undefined) len = 7  
    
    if (incNum == undefined ) incNum = !0
    if (incStr == undefined) incStr = !0
    if (incSchar == undefined) incSchar == undefined
    if (incUc == undefined) incUc = !0 
    let ns = '';
    
        if (!incStr) newA.splice(0, 1);
        if (!incNum) newA.splice(1, 1);
        if (!incSchar) newA.splice(2, 1);
        if (incStr && !incUc) newA[0].splice(1, 1);
    for (let index = 0; index < len; index++) {
        let nachari = Math.floor(Math.random() * newA.length);
        let nchar;

        if (nachari === 0 && incStr) {
            let nschi = Math.floor(Math.random() * newA[0].length);
            let nchari = Math.floor(Math.random() * newA[0][nschi].length);
            nchar = newA[0][nschi][nchari];
        } else {
            let nchari = Math.floor(Math.random() * newA[nachari].length);
            nchar = newA[nachari][nchari];
        }

        ns += nchar;
    }
    return ns;
}
