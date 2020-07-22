cl = (...args) => console.log(...args);

x = [1,3,6,2,9,13,5,21,6]

cl(x)

y = x.filter ( function (e) {return e>6;}); 
    //(e) => {e>0} );


z = x.filter ( e => e>7 )

cl(z);

x => x %2;



