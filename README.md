# Project-4 

## Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the day

|  Day | Deliverable | Status
|---|---| ---|
|2/26/19| Project Description | Complete
|2/26/19| Wireframes / Priority Matrix / Functional Components | Complete
|2/27/19| Core Application Structure (Routes - Client/Server) | Complete
|2/28/19| Pseudocode / actual code | Complete
|3/2/19| MVP unstyled | Complete
|3/3/19| MVP styled | Complete
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

| Component | Description | 
| --- | :---: |  
| HeaderTitle | This will render the top header | 
| New Journal Entry | Form for adding new entries | 
| JournalEntries | Lists all journal entries | 
| EditJournalEntry | edit form for a single journal entry | 
| Information | intructions/technique info page | 
| Journal Entry | single journal entry |  


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### SAMPLE.....
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| User Auth | H | 5hrs| 12hrs |
| CRUD for Dream Journal | H | 6hrs| 16hrs |
| Server Side Routes | H | 4hrs| 5hrs |
| Client Views | H | 4hrs| 4hrs |
| Styling | M | 4hrs| 6hrs |
| Splash Page | L | 3hrs| 1.5hrs |
| Post MVP | L | 10hrs| 0hrs |
| Total | H | 36hrs| 44.5hrs | 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
<View style={{flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Image
          source={require('../assets/app_images/ouro_logo.png')}
          style={{ width: 30, height: 30, marginLeft: '15%' }}
        />
      </View>
      
      <Text style={{flex:3, fontWeight: 'bold', color: 'white', fontSize: 16, marginLeft: '5%'}}>Consciousness Diversified</Text>
      </View>
```

```
static navigationOptions = ({navigation}) => {
	return{
	    	headerTitle: <HeaderTitle />,
	    	headerRight: (
	    		<Text style={{flex:1}} onPress={() => navigation.navigate("Home")}>Logout</Text>
	    	)
	}
  };
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

| Original Plan | Outcome | 
| --- | :---: |  
| Have one Information component | Split into multiple (6) components because too much data to have on a single page | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

**ERROR**: ActionController::ParameterMissing                           
**RESOLUTION**: typo/bug capitalized a variable name that shouldn'y have been
