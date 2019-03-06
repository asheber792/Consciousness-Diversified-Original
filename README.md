# Project-4 

## Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the day

|  Day | Deliverable | Status
|---|---| ---|
|2/26/19| Project Description | Complete
|2/26/19| Wireframes / Priority Matrix / Functional Components | Complete
|2/27/19| Core Application Structure (Routes - Client/Server) | Incomplete
|2/28/19| Pseudocode / actual code | Incomplete
|3/2/19| MVP unstyled | Incomplete
|3/3/19| MVP styled | Incomplete
|3/6/19| Present | Incomplete


## Project Description

A Consciousness Exploration App using React on Rails where you are able to get information/instructions/techniques of exploring consciousness through natural methods (lucid dreaming/astral projection/meditation/etc.) and also able to create and maintain a dream/experience journal. 

## Wireframes

https://res.cloudinary.com/dj10zwlqs/image/upload/v1551211214/Project4/P4-Wireframes.jpg

## Priority Matrix

https://res.cloudinary.com/dj10zwlqs/image/upload/v1551211221/Project4/P4-Priority-Matrix.jpg

### MVP/PostMVP - 5min

#### MVP 

- Splash page 
- Login/Registration 
- CRUD with Dream Journal functionality 
- Page with info regarding exploring consciousness 
- Styling 

#### PostMVP 

- Alternative Activities 
    - guided meditations (preloaded) 
    - binaural beat player (preloaded) 
    - option to upload new meditations/beats

## Architectural Design

https://res.cloudinary.com/dj10zwlqs/image/upload/v1551211226/Project4/P4-Component-Hierarchy.jpg

## ERD

https://res.cloudinary.com/dj10zwlqs/image/upload/v1551211206/Project4/P4-ERD.jpg

## UI Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

#### SAMPLE.....
| Component | Description | 
| --- | :---: |  
| Header | This will render the header navigation | 
| New Journal Entry | Form for adding new entries | 
| Journal List | Lists all journal entries | 
| Edit Journal Entry | edit form for a single journal entry | 
| Instructions | intructions/technique info page | 
| Journal Entry | single journal entry |  


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### SAMPLE.....
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| User Auth | H | 5hrs| ??hrs |
| CRUD for Dream Journal | H | 6hrs| ??hrs |
| Server Side Routes | H | 4hrs| ??hrs |
| Client Views | H | 4hrs| ??hrs |
| Styling | M | 4hrs| ??hrs |
| Splash Page | L | 3hrs| ??hrs |
| Post MVP | L | 10hrs| ??hrs |
| Total | H | 36hrs| ??hrs | 

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| Bootstrap | Used to help style my application | 
| Giphy API | Used to get gifs to use | 


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
