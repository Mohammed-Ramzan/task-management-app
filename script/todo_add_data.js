let add_task = document.querySelector(".add");
let add_task_cont = document.querySelector(".add-content");

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

function removeActiveCategory() {
    document.querySelectorAll(".category-name").forEach(category => category.classList.remove('active'))
}

document.querySelectorAll(".category-name").forEach((category) => {
    
    category.addEventListener("click", function(){
      removeActiveCategory()
      this.classList.add("active")
    })
  })

let list_colors = ["#DAF5FF", "#FDF7C3", "#FFD6EC", "#E1FFB1", "#FAD4D4", "#C3F8FF", "#F3E0B5", "#FEFAE0", "#F8EAD8", "#DEF5E5", "#F8FFDB", "#DAF5FF", "#FDF7C3", "#FFD6EC", "#E1FFB1", "#FAD4D4", "#C3F8FF", "#F3E0B5", "#FEFAE0", "#F8EAD8", "#DEF5E5", "#F8FFDB"]
let start_colors = 0;

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

    requestAnimationFrame(updateCalendar);
}
updateCalendar();

var taskList = document.querySelector(".task-detail");
if (localStorage.getItem('task-data')) {
    taskList.innerHTML = localStorage.getItem('task-data');
}

function addTask() {
    // Get the user input for task name and time
    var taskName = document.querySelector(".taskName").value;
    var taskTime = document.getElementById("start-time").value;
    var taskend = document.getElementById("end-time").value;
    var descrip = document.querySelector("#textarea").value;
    if (taskName === "" || taskTime === "" || taskend === "" || descrip === "") {
        alert("Please Fill All Inputs")
        return false;
    }
    // Convert the time to a localized string in 12-hour format
    var taskDate = new Date("2000-01-01T" + taskTime + ":00");
    var taskend = new Date("2000-01-01T" + taskend + ":00");
    var start_Time = taskDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    var end_Time = taskend.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    // Create a new task element and populate it with the user input
    var taskElement = document.createElement("div");
    taskElement.className = "task list-task";
    taskElement.innerHTML = `<p class='task-name'>${taskName}</p><p class='task-time'>${start_Time} - ${end_Time}</p><i class="fas fa-check"></i> <i class="fas fa-trash"></i>`;
    // Add the new task element to the task list
    taskList.appendChild(taskElement);
clrs_add()
localStorage.setItem("task-data", taskList.innerHTML)
    // Clear the user input fields
    document.querySelector(".taskName").value = "";
    document.getElementById("start-time").value = "";
    document.getElementById("end-time").value = "";

}

// Function to display task details
function showTaskDetails(taskName, start_Time, end_Time, descrip) {
    alert(`
        Task Name: ${taskName}
        Time: ${start_Time} - ${end_Time}
        Description: ${descrip}
    `);
}

// Event listener for task elements
document.addEventListener("click", function(event) {
    // Check if the clicked element or its ancestor has the class "task"
    const taskElement = event.target.closest('.task');
    if (taskElement) {
        // Extract task details from the clicked task element
        const taskName = taskElement.querySelector('.task-name').textContent;
        const timeRange = taskElement.querySelector('.task-time').textContent;
        
        // Extract description if available
        let descrip = "";
        const descripElement = taskElement.querySelector('.task-description');
        if (descripElement) {
            descrip = descripElement.textContent;
        }

        // Show task details
        showTaskDetails(taskName, timeRange, descrip);
    }
});


// Add event listener outside of the addTask function
document.addEventListener("click", function(event) {
    // Check if the clicked element has the class "fa-trash"
    if (event.target.classList.contains("fa-trash")) {
        // Get the parent element (taskElement) and remove it
        var parentTaskElement = event.target.closest(".task");
        if (parentTaskElement) {
            parentTaskElement.remove();
            localStorage.setItem("task-data", taskList.innerHTML)
        }
    }
    else if (event.target.classList.contains('fa-check')) {
        //       event.target.parentElement.classList.toggle('checked');
           // Get the parent element (taskElement) and remove it
    var parentTaskElement = event.target.closest(".task");
    if (parentTaskElement) {
        parentTaskElement.classList.toggle('checked');
        localStorage.setItem("task-data", taskList.innerHTML)
    }
}
 
});
function clrs_add() {
    let list_task = document.querySelectorAll(".list-task")
    list_colors.forEach((clrs, index) => {
        if (list_task[index] && start_colors < list_colors.length) {
            list_task[index].style.backgroundColor = clrs;
            console.log(clrs)
        }

    })
}

