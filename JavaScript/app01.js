// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
/*
let courseName = 'Web Developement - The Complete Guide';
let coursePrice = 39;
let courseGoals = ['Learn Web Development', 'Become a web developer', 'Have fun!'];
*/

// 2) Output ("alert") the three variable values
/*
alert(courseName);
alert(coursePrice);
alert(courseGoals);
*/

// 3) Try "grouping" the three variables together and still output their values thereafter
let onlineCourse = {
    name: 'Web Developement - The Complete Guide',
    price: 39,
    goals: ['Learn Web Development', 'Become a web developer', 'Have fun!']
}

console.log(onlineCourse.name);
console.log(onlineCourse.price);
console.log(onlineCourse.goals);

// 4) Also output the second element in your "main goals" variable
console.log(onlineCourse.goals[0]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
function accessListItem(array, arrayIndex) {
    let arrayElement = array[arrayIndex];
    return arrayElement;
}

// 6) Execute your custom command from (5) and output ("alert") the result
let firstGoal = accessListItem(onlineCourse.goals, 0);
console.log(firstGoal);