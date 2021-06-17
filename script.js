function cariLurahBaru(params) {
    params.sort();
    console.log(params);
    let counternow = 0;
    let counterprev = 0;
    let numberwin = -1;
    if (params.length != 0) {
        let temp = params[0];
        numberwin = params[0];
        if (params.length > 1) {
            for (let i = 1; i < params.length; i++) {
                if (params[i] == temp) {
                    counternow++;
                }else{
                    temp = params[i];
                    counterprev = counternow;
                    counternow = 1;
                }

                console.log('now ', counternow);
                console.log('prev ', counterprev);
                console.log('params ', params[i]);
                if (counternow > counterprev) {
                    numberwin = params[i];
                    console.log('win ', numberwin);
                    console.log('i ', i);
                }
                
                
            } 
        }
        return numberwin;   
    }else{
        return numberwin;
    }
    
}

console.log(cariLurahBaru([1,2,3,2,1,3,2,3,3]));