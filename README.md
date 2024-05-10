# DJS02 Project Brief: Whole Number Divider

# Project Overview
- This project focuses on enhancing a web-based Whole Number Divider application. It's designed to help students apply their knowledge of error handling, guided by specific user stories. Before proceeding, familiarise yourself with the Gherkin syntax, a crucial tool for understanding user stories and requirements. Refer to the provided reading materials for a comprehensive guide. Below is the HTML and JavaScript code for a “Whole Number Divider”. At the moment it only meets two user stories (see below under “Resolved Stories”). Please ensure that it meets all user stories listed below:

# Project Brief
### Scenario: Starting program state
- GIVEN that the submit button has not been pressed yet
- AND the code has just loaded
- THEN “NO calculation performed” should be displayed at the bottom

### Scenario: Dividing numbers result in a whole number
- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 10 is entered into the second input
- THEN 2 should be displayed at the bottom
 
<h2 style="color:#e67e22">Unresolved Stories</h2> 

### Scenario: Dividing numbers result in a decimal number
- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 3 is entered into the second input
- THEN the number 6 with no decimal should be shown
 
### Scenario: Validation when values are missing
- GIVEN that the submit button is pressed
- WHEN either or both inputs are empty
- THEN the divisions should not be done
- AND the following should be displayed: “Division not performed. Both values are required in inputs. Try again”.
 
### Scenario: An invalid division should log an error in the console
- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 0 is entered into the second input
- THEN the division should not be done
- AND the following should be displayed: “Division not performed. Invalid number provided. Try again”.
- AND an error should be logged in the browser console that shows the call stack
- BUT the program should not crash entirely
 
### Scenario: Providing anything that is not a number should crash the program
- GIVEN that the submit button is pressed
- WHEN ‘YOLO’ is entered into the first input
- AND ‘+++’ is entered into the second input
- THEN the entire screen should be replaced with “Something critical went wrong. Please reload the page
- AND an error should be logged in the browser console that shows the call stack.

#### Task Instructions
1. **Review the Starter Code**: Understand the current implementation and its limitations.
2. **Implement User Stories**: Modify the code to fulfill all unresolved user stories. Pay attention to error handling and user input validation.
3. **Error Handling**: Ensure the application handles errors gracefully, providing clear feedback to the user without crashing.
4. **Testing**: Test your application thoroughly with various inputs to ensure it meets all the user stories.

# Elements Included 
- User stories
- Error handling
- User input validation
- Code that includes the necessary modifications to meet the project requirements.
- GitHub repository that contains the updated code files.

# Reflections
## Areas of Mastery 
- Unfortunately in this project I did not master anything but I hope in my next project there'll be a few areas.

## Challenges faced
- Getting my program to crash ONLY if the user provides anything that is not a number 

## Areas of Improvement
- Refactoring my code. 

## Overall Learning Experience
- This project challenged me to think critically about user input, error handling, and providing a seamless user experience. I had to ensure that my solution is robust, user-friendly, and meets the specified requirements. It was challenging and caused a headache, but I'm glad I was able to work through it

