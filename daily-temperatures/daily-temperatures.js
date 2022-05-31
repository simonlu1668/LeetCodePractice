/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result = [];
    
    for(let i = 0; i < temperatures.length; i++){
        let current = temperatures[i];
        let days = 0;
        for(let j = i+1; j < temperatures.length; j++){
            if(temperatures[j] > temperatures[i]){
                result.push(days+1);
                break;
            } else {
                days++;
                if(j == temperatures.length-1){
                    result.push(0);
                }
            }
        }
    }
    result.push(0);
    return result;
};