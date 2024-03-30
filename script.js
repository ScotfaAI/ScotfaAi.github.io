document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Get today's date and day index
    const todayDate = new Date();
    const todayDayIndex = todayDate.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Helper function to format date suffix
    function formatDateSuffix(date) {
        if (date > 3 && date < 21) return 'th';
        switch (date % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    // Helper function to get formatted date string
    function getFormattedDate(date) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const suffix = formatDateSuffix(day);
        return `${day}${suffix} ${months[monthIndex]}`;
    }

    // Reorder the daysOfWeek array so that it starts with today
    const orderedDays = daysOfWeek.slice(todayDayIndex).concat(daysOfWeek.slice(0, todayDayIndex));

    const tasksDetails = {
        'Friday': ['Align lattice finder - inverted epiflourescent', 'Drive down to kent - Pizza dinner, can we get off earlier/premake dough in the morning.'],
        'Saturday': ['Work AM - Cell tools output to Yolo format','Vitcoria\'s Family - Bring Easter eggs, iPad for reading microscopy/writing paper'],
        'Sunday': ['Vitcoria\'s Family All Day - In morning there may be time to work on paper'],
        'Monday': ['Vitcoria\'s Family - Leave by 4pm and get back to leamington at 6pm. Pork with udon + avocado dinner',
        'Kung fu panda 4 - Book with prime, check time with mahir, probs 19:20, odeon coventry.', 'Make lunch night before - tuna pitta'],
        'Tuesday': ['Meet with Till - Reviewing the manuscript.', 'Yoga at 7:30PM - Chicken pasta bake first'],
        'Wednesday': ['Align lattice finder - inverted epiflourescent', 'Tickles coming - What time?', 'Evening Meal - Need to book otto for 7pm.'], // Example of a day with no tasks
        'Thursday': ['Lab Meeting - Paper review or presenting?', 'Climbing - check with Sara']
    };

    const weekContainer = document.querySelector('.week-container');
    for (let i = 0; i < orderedDays.length; i++) {
        const dayIndex = (todayDayIndex + i) % 7;
        const dayName = orderedDays[i];
        const dayDate = new Date();
        dayDate.setDate(todayDate.getDate() + i);

        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.innerHTML = `<h3>${dayName}</h3><p>${getFormattedDate(dayDate)}</p>`;

        if (tasksDetails[dayName] && tasksDetails[dayName].length > 0) {
            tasksDetails[dayName].forEach((taskDetail) => {
                const taskDiv = document.createElement('div');
                taskDiv.className = 'task';
                taskDiv.textContent = taskDetail.split(' -')[0]; // Display the first part as the task name
                taskDiv.addEventListener('click', () => openModal(taskDetail));
                dayDiv.appendChild(taskDiv);
            });
        } else {
            const noTaskDiv = document.createElement('div');
            noTaskDiv.textContent = "No tasks for today";
            dayDiv.appendChild(noTaskDiv);
        }
        weekContainer.appendChild(dayDiv);
    }

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
