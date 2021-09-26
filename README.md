# Proth Weekend Feeback Survey Challenge

Created a 4-page survey for gathering feedback, with a review page for submission, and redirect back to the start.

## Description

Your project description goes here. What problem did you solve? How did you solve it?


## Checklist

- [x] Initialize database and table(s)
- [x] Check files and setup
- [x] index.js page prepped with combine reducers
- [ ] **GOAL: write comments as you go!**
- [x] Router in App.jsx
- [x] Header component imported into App
- [x] page1 component
    - [x] input form for type number, required
    - [x] reducer in index
    - [x] dispatch input as number
    - [x] next button with link/history.push
    - [x] display message if incomplete field
- [x] page2 component
    - [x] model after page1
    - [x] added route to page one reducer
- [x] page3 component
    - [x] like pages 1 and 2
    - [x] Add supporteed route to page one reducer
- [x] page4 component
    - [x] input form for string
    - [x] dispatch string
- [x] express post route
- [x] review and submit page component
    - [x] useSelector for feedback item(s)
    - [x] display feedback items (form or table or ul or div?)
    - [x] Object to Post
    - [x] axios POST on submit
    - [ ] anything else?
- [x] success and reset page component
    - [x] reset dispatcher
    - [x] start new review button nav to page 1
- [ ] additional basic styling
- [ ] Update ReadMe (remove line at top)
    - [ ] Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
- [ ] still needs more code comments

## Stretch Goals 

- [ ] Update score functionality (navigate back)
    - [ ] may need to splice into redux state?
    - [ ] 
- [ ] material UI
    - [ ] cards, snackbars, nav bar, icons, theme?
- [ ] Admin page component
    - [ ] display feedback Items from DB (axios and express GET)
    - [ ] allow delete (axios and express DELETE)
    - [ ] store Item to delete in redux state
    - [ ] confirm delete component 
    - [ ] delete with nav back to admin page
    - [ ] flag feedback entry (conditional render?)
- [ ] Deploy to Heroku
    - [ ] find the special instructions for this (check syllabus and pool module)
