# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > The code that will execute when a child is clicked on is contained in the main module. 
   When a user clicks on an element, a click event is triggered. The event.target will identify the exact element that was clicked on and will check the class. If it has the class kid-item, it will retrieve the child's wish using whatWasClickedOn.dataset.wish and then display a window alert showing the child's name and wish.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > Each child has a unique celebrityId that matches which celebrity they are to be paired with. As the loop iterates over the kids array, invoking findCelebrityMatch() allows kid to be passed as an argument in the function which will find the correct match for each kid.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > To display the sport that a celebrity plays, each celebrity list item includes a data-sport attribute that contains the sport name. The click event listener in main.js is able to retrieve the sport associated with a celebrity using whatWasClickedOn.dataset.sport and constructs the alert message for display.

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Pairings, Celebrities and Kids are imported from their respective modules. The HTML element with the id container is initialized as mainContainer so that the DOM can be manipulated. The HTML is then constructed with the imported functions which includes a heading, sections for kids and celebrities, and a section for pairings. The HTML is then rendered to the DOM by inserting it into the mainContainer. When a click happens anywhere inside mainContainer, the event handlers are executed. If the clicked element is a kid, an alert is displayed showing the child's wish using the data-wish attribute. If the clicked element is a celebrity, an alert is displayed showing the celebrity's sport using the data-sport attribute.

