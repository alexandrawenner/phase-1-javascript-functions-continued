
function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(task = "go to the office"){
    return `This Monday, I will ${task}.`
}

function wrapAdjective (flare = '*') {
    const innerFunction = function (describe = "special") {
        return `You are ${flare}${describe}${flare}!`
    } 
    return innerFunction
}



