function cl(...args) { console.log(...args); }

function reverseInteger(x) {
    let y = 1;
    if (x < 0) {
        x = x * -1;
        y = -1;
    }
        
    let reverseInt = 0;
    while (x > 0) {
        reverseInt = reverseInt + x % 10;
        x = Math.floor(x / 10)
        if (x>0) {reverseInt = reverseInt * 10};
    }
    
    if (reverseInt < -Math.pow(2, 31) || reverseInt > Math.pow(2,31) - 1)
        return 0
    else     
        return (reverseInt * y);
}

cl(reverseInteger(123))

