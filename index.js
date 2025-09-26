// 1. Function declaration
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// 2. Function expression
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// 3. Function returning a function (closure)
function wrapAdjective(flair = "*") {
  return function(adj = "special") {
    return `You are ${flair}${adj}${flair}!`;
  };
}

// ✅ Export so CodeGrade can access them
module.exports = {
  saturdayFun,
  mondayWork,
  wrapAdjective
};
