## Sorting Algorithms
![GitHub commit activity (main)](https://img.shields.io/github/commit-activity/w/alexiusvdt/sorting)![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/alexiusvdt/sorting)![Shields.io](https://img.shields.io/badge/Version-0.1-green.svg?style=flat)

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

# Description
Sorting algorithms are used to put elements of a list into an order, either numeric or lexicographical. In this application, I hope to show various sorting algorithms and their strengths or weaknesses. While perhaps not the most straightforward implementation for this project, I wanted to demonstrate knowledge of distributed systems, sorting algorithms, API usage, and interfaces/abstract Classes. Ratings are just my opinion on each algorithms' speed and efficiency. 

| Algorithm       | Complexity     | Rating      |
|-----------------|---------------|--------------|
| Selection sort  | O(n^2)        | 2/5          |
| Bubble sort     | O(n^2)        | 2/5          |
| Insertion sort  | O(n^2)        | 3/5          |
| Bogo sort       | O((n+1)!)     | 0/5          |

# Installation
* clone this repository to your workspace
* navigate to the `flask` directory in a command line interface
* create the virtual environment(venv) by entering `python -m venv .venv`. 
  * Note: `.venv` is the name for the resulting environment. You may name this however you wish, just replace `.venv` with your desired name in these commands.
* activate the virtual environment:
  * if on Windows:
    * `.\.venv\Scripts\activate`
  * if Mac/Linux (bash shell):
    * `source .venv/bin/activate`
* install necessary packages to the venv: `pip install -r requirements.txt`
* run flask with `flask run` to start in dev mode
* in a second terminal window, navigate to `frontend` directory
* run the react frontend with `npm run start`

# Thanks
* Tech with Tim (youtube) for a jumping-off point and helpful pygame tutorial
* Mike C & Billy F for the guidance and experience
* Susuwatari for her endless rubber duck debugging help 🐱

# Bugs / Issues
* It's not finished yet!

# ToDo / Improvements
* Improve playback controls
* Increase visual clarity of swaps/passes made
* add a warning/confirmation before submitting bogo request (long response times)
* add descending sort options

# License
**MIT License**

Copyright (c) 2023 Alex Johnson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
