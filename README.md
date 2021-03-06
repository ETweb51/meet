Meet App Features and User Stories

Feature 1: Filter events by city.

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

Sencario 3: User can select a city from the suggested list.
Given the user was typing „Berlin“ in the city textbox and the list of suggested cities is showing
When the user selects a city (e.g., „Berlin, Germany“) from the list
Then their city should be changed to that city (i.e., „Berlin, Germany“) and the user should receive a list of upcoming events in that city



Feature 2: Show/Hide an event’s details

Scenario 1: An event element is collapsed.
Given user hasn’t searched for any city or has searched for a city
When the user opens the app or selects a city
Then all the event elements should seen collapsed by the user

Scenario 2: User can expand an event to see its details.
Given user is interested in an event
When user clicks on the event or a button
Then the user should see the details of the selected event

Scenario 3: User can collapse an event to hide its details.
Given user got the wanted information
When user clicks on a button or outside the event element
Then the event element should collapse



Feature 3: Specify number of events

Scenario 1: When user hasn’t specified a number, 32 is the default number.
Given user opened the app or selected a city
When the user does not specify the number of shown events
Then a list of 32 events should return to the user

Scenario 2: User can change the number of events they want to see.
Given user opened the app or selected a city
When the user does specify the number of shown events
Then a list of events with the specified number should be returned to the user



Feature 4: Use the app when offline

Scenario 1: Show cached data when there’s no internet connection.
Given user had no internet connection
When the user opens the app
Then a list of events should be returned, which are cached

Scenario 2: Show error when user changes the settings (city, time range).
Given user had no internet connection
When user tries to change the settings
Then an error message should occur on the screen of the user



Feature 5: Data visualization

Scenario 1: Show a chart with the number of upcoming events in each city.
Given user had interest in the upcoming events of a city
When the user clicks on a time button
Then the user should see the number of upcoming events for the specific time range of that specific city