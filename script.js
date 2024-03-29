document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // Ensure each day has at least an empty array
    const tasksDetails = {
        'Sunday': ['Breakfast with family at the local diner - Enjoying the start of the day with pancakes and coffee.', 'Morning Yoga at the park - A 60-minute session to refresh and energize.'],
        'Monday': ['Team Meeting at 9AM - Discussing the upcoming project deadlines and goals for the week.', 'Lunch with John at City Deli - Catching up over a sandwich.', 'Project Deadline by EOD - Finalizing and submitting the marketing proposal.'],
        'Tuesday': ['Client Call at 11AM - Reviewing the project scope and deliverables.', 'Gym at 6PM - Cardio and strength training session.'],
        'Wednesday': [], // Example of a day with no tasks
        'Thursday': [],
        'Friday': [],
        'Saturday': []
    };

    const weekContainer = document.querySelector('.week-container');
    week.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.innerHTML = `<h3>${day}</h3>`;

        // Check if the day has tasks; if not, display a placeholder or message
        if (tasksDetails[day] && tasksDetails[day].length > 0) {
            tasksDetails[day].forEach((taskDetail, index) => {
                const taskDiv = document.createElement('div');
                taskDiv.className = 'task';
                taskDiv.textContent = taskDetail.split(' -')[0]; // Display the first part as the task name
                taskDiv.addEventListener('click', () => openModal(taskDetail));
                dayDiv.appendChild(taskDiv);
            });
        } else {
            // Display a message for days with no tasks
            const noTaskDiv = document.createElement('div');
            noTaskDiv.textContent = "No tasks for today";
            dayDiv.appendChild(noTaskDiv);
        }
        weekContainer.appendChild(dayDiv);
    });

    const modal = document.getElementById("taskModal");
    const taskDetailsP = document.getElementById("taskDetails");
    const span = document.getElementsByClassName("close")[0];

    function openModal(detail) {
        taskDetailsP.textContent = detail;
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
