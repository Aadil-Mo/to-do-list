// Wait for the HTML document to be fully loaded before running script
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    // Get references to the HTML elements using their IDs
    const taskInputEl = document.getElementById('taskInput');
    const addButtonEl = document.getElementById('addButton');
    const taskListEl = document.getElementById('taskList');

    // Function to handle toggling the complete status of a task
    function toggleTaskComplete(event) {
        // event.target refers to the specific <li> element that was clicked
        event.target.classList.toggle('completed');
        console.log("Toggled complete state for:", event.target.textContent);
    }

    // Function to handle adding a new task
    function handleAddTask() {
        console.log("Add button clicked!");

        // 1. Get the text from input field and remove leading/trailing whitespace
        const taskText = taskInputEl.value.trim();

        // 2. Check if the input text is not empty
        if (taskText !== "") {
            // 3. Create a new list item element (li)
            const newTaskLi = document.createElement('li');

            // 4. Set the text content of the new list item
            newTaskLi.textContent = taskText;

            // 5. Add an event listener to the new list item for toggling completion
            // This listener calls toggleTaskComplete when the li is clicked
            newTaskLi.addEventListener('click', toggleTaskComplete);

            // 6. Append the new list item to the task list (ul)
            taskListEl.appendChild(newTaskLi);

            // 7. Clear the input field for the next task
            taskInputEl.value = '';

            // Optional: Put the focus back on the input field for easier adding
            taskInputEl.focus();

        } else {
            // Optional: Provide feedback if the input is empty
            alert("Please enter a task text!");
        }
    }

    // Add the main event listener to the button
    // When the button is clicked, call the handleAddTask function
    addButtonEl.addEventListener('click', handleAddTask);

    // Bonus: Add listener for the 'Enter' key in the input field
    taskInputEl.addEventListener('keypress', function(event) {
        // Check if the key pressed was 'Enter' (key code 13 or key property 'Enter')
        if (event.key === 'Enter') {
            console.log("Enter key pressed in input");
            handleAddTask(); // Call the same function as the button click
        }
    });

}); // End of DOMContentLoaded listener
