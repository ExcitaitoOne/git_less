let daily_planner = [1];

function createTask(create_name, create_completed) {
    daily_planner.push({
    name: create_name,
    complet: create_completed,
  })
}

function userCreateName(create_name) {
  create_name = prompt("введите название задачи", create_name);
  if (create_name == ""){
    alert('вы ввели пустую строку');
  } else {
    return create_name;
  }

}

// userCreateCompleted, не так понял задачу :)
function userCreateCompleted(create_completed) {
  create_completed = prompt("введите 1 - выполненно 2 - не выполненно", create_completed);
  if (create_completed == 1) {
    return (create_completed = true);
  } else if (create_completed == 2) {
    return (create_completed = false);
  } else {
    alert("введено не верное значение");
    userCreateCompleted(create_completed);
  }
}

let create_name = "Имя задачи";
let create_completed = false;
function collectorCreate(create){
  create(userCreateName(create_name), create_completed); 
}

let ind = 0; 
function deleteTask(index){
  daily_planner = daily_planner.splice(index,1);
}
function userDeleteTask(index){
  index = prompt("введите номер элемента который вы хотите удалить",index);
  deleteTask(index);
}

function taskCompleted(index){
  index = prompt('введите номер задачи', index);
  daily_planner[index].complet = true;
}

function status(){
  console.log(daily_planner);
  alert(daily_planner);
}

function userInterface(i){
  i = prompt('1 - создать запись, 2 - удалить запись, 3 - поменять на выполенно, 4 - посмотреть статус, 5 - выход', i);
  if (i == 1) {
    collectorCreate(createTask);
    userInterface();
  } else if (i == 2) {
    userDeleteTask(ind);
    userInterface();
    alert('вы удалили элемент');
  } else if (i == 3) {
    taskCompleted();
    userInterface();
    alert('Задача выполнена!');
  } else if (i == 4) {
    status();
    userInterface();
  } else if (i == 5) {
    alert('до свидания');
  } else {
    console.log('ввели не верное значение');
    userInterface();
  }
}

userInterface();
