let add_task = document.querySelector(".add");
let add_task_cont = document.querySelector(".add-content");
let progress = document.querySelector(".progress")

add_icon.addEventListener("click", function () {
    home_data.style.display = "none";
    add_task_cont.style.display = "block";
    add_icon.style.display = "none";
})

backToHome.forEach((back) => {
    back.addEventListener("click", function () {
    addHomeData()
    add_task_cont.style.display = "none";
    add_icon.style.display = "block";
    stopwatch.style.display = "none";
})
})


let list_colors = ["#DAF5FF", "#FDF7C3", "#FFD6EC", "#E1FFB1", "#FAD4D4", "#C3F8FF", "#F3E0B5", "#FEFAE0", "#F8EAD8", "#DEF5E5", "#F8FFDB", "#DAF5FF", "#FDF7C3", "#FFD6EC", "#E1FFB1", "#FAD4D4", "#C3F8FF", "#F3E0B5", "#FEFAE0", "#F8EAD8", "#DEF5E5", "#F8FFDB"]
let start_colors = 0;
//auto update calender for today task
const calendarElement = document.getElementById('calendar');
function updateCalendar() {
    const now = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayOfWeek = daysOfWeek[now.getDay()];
    const month = monthsOfYear[now.getMonth()];
    const date = now.getDate();
    calendarElement.innerHTML = `
    <div>${date} ${month}, ${dayOfWeek}</div>
  `;

}
updateCalendar();
let taskDetail = document.querySelector(".task-detail");


// Function to handle the click event on tasks
function handleTaskClick(event) {
  if (event.target.classList.contains('fa-trash')) {
    var taskToRemove = event.target.closest('.task.list-task');

    if (taskToRemove) {
      taskDetail.forEach(function (taskDiv) {
        if (taskDiv.contains(taskToRemove)) {
          taskDiv.removeChild(taskToRemove);
        }
      });
    }
  } else if (event.target.classList.contains('fa-check')) {
    event.target.parentElement.classList.toggle('checked');
  }
}

// Add click event listeners to existing tasks
taskDetail.forEach((task) => {
  task.addEventListener('click', handleTaskClick);
});

// Function to add a new task
function addTask() {
  var taskName = document.querySelector(".taskName").value;
  var taskTime = document.getElementById("start-time").value;
  var taskEnd = document.getElementById("end-time").value;
  var descrip = document.querySelector("#textarea").value;

  if (taskName === "" || taskTime === "" || taskEnd === "" || descrip === "") {
    alert("Please fill in all inputs");
    return false;
  }

  var taskDate = new Date("2000-01-01T" + taskTime + ":00");
  var taskEndDate = new Date("2000-01-01T" + taskEnd + ":00");
  var startTime = taskDate.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  var endTime = taskEndDate.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  taskDetail.forEach(function (div) {
    var taskElement = createTaskElement(taskName, startTime, endTime);
    div.appendChild(taskElement);

    // Add click event listener to the newly created task element
    taskElement.addEventListener('click', handleTaskClick);
  });

  document.querySelector("#textarea").value = "";
}

    
    

    // taskDetail.forEach((task) => {
    //   task.addEventListener('click', function (event) {
    //     if (event.target.classList.contains('fa-trash')) {
    //       // Remove the task from all div elements with class "task list-task"
    //       var taskToRemove = event.target.closest('.task.list-task');
          
    //       if (taskToRemove) {
    //         taskToRemove.parentNode.removeChild(taskToRemove);
    //       }
    //     } else if (event.target.classList.contains('fa-check')) {
    //       event.target.parentElement.classList.toggle('checked');
    //     }
    //   });
    // });
    
// document.querySelectorAll(".task").forEach((clickTask)=>{
//     clickTask.addEventListener("click", function(){
        // home_data.style.display = "none";
        // add_icon.style.display = "none";
        // let checking = document.querySelector(".task-full-data");
        // checking.style.display = "block"
        // checking.innerHTML = this.innerHTML;
//       alert(this.innerHTML)
                
//     })
// })

// function clrs_add() {
//     list_colors.forEach((clrs, index) => {
//         if (list_task[index] && start_colors < list_colors.length) {
//             list_task[index].style.backgroundColor = clrs;
//             console.log(clrs)
//         }

//     })
// }
// clrs_add()




// function updateLocalStorage(){
//   taskDetail.forEach((both)=>{
//   both.innerHTML = localStorage.getItem("task-data");
//   })
// }


// delTasks.forEach(function(delButton) {
//   delButton.addEventListener('click', function() {
//     alert("cliked")
//     var parentElement = this.parentNode;
//     parentElement.remove();
//   });
// });
const completedTasks = document.querySelectorAll(".checked");

let numOFTasks = document.querySelector(".progress-tasks span");
numOFTasks.innerHTML = taskDetail.length / 2;
function progressData(){
    const progressValue = (completedTasks.length / checkTasks.length) * 100;
    progress.value = progressValue;
    document.querySelector(".progress-percent").innerText = progressValue;
    console.log(completedTasks.length, checkTasks.length, progressValue)
}

//Function to update task data in both sections
// function updateTaskData() {
//     var homeTasksContainer = document.getElementById("home-tasks");
//     var allTasksContainer = document.getElementById("all-tasks");
  
//     // Update home section task data
//     localStorage.setItem("home-tasks-data", homeTasksContainer.innerHTML);
  
//     // Update all tasks section task data
//     localStorage.setItem("all-tasks-data", allTasksContainer.innerHTML);
//   }



//add taks related category 
function removeActiveCategory() {
  document.querySelectorAll(".category-name").forEach(category => category.classList.remove('active'))
}

document.querySelectorAll(".category-name").forEach((category) => {
  
  category.addEventListener("click", function(){
    removeActiveCategory()
    this.classList.add("active")
  })
})