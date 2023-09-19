## Sorting Algorithms
This project aims to show knowledge of interfaces and sorting algorithms & is a **work in progress** so pardon the dust

# Goals
  * users can view various sorting algorithms at work
  * users can sort ascending or descending
  * an API request is sent to the `sort` endpoint

# Technology
* Flask 
* PyGame (will be replaced as rendering the sort moves to react)
* axios

# Installation
* clone this repository
* navigate to the `flask` directory in a command line interface
* run `.\env\Scripts\activate` to activate the virtual environment
* cd into the `flask` directory
* run flask with `flask run` to start in dev mode
* in a second terminal window, navigate to `frontend` directory
* run the react frontend with `npm run start`

# Thanks
* Tech with Tim (youtube) for base functionality
* Mike C for the guidance and experience

# Bugs / issues
* graphs sometimes generate bars from top to bottom like the yaxis is inverted...maybe have to floor() it or somehow prevent negatives?
* bubblesort output currently returns each step as the finished list

# License
