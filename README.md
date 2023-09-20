## Sorting Algorithms
This project is a **work in progress** so pardon the dust.

Sorting algorithms are used to sort large numbers of items into specific orders such as alphabetical, highest-to-lowest value or shortest-to-longest distance. In this application, I hope to show various sorting algorithms and their strengths or weaknesses. 

While perhaps not the most straightforward implementation for this project, I wanted to demonstrate knowledge of distributed systems, sorting algorithms, API usage, and interfaces/abstract Classes.

Ratings are just personal preferences (though I wish I could rate bogo sort higher for the sheer hilarity of it):

| Algorithm       | Complexity     | Rating      |
|-----------------|---------------|--------------|
| Selection sort  | O(n^2)        | 2/5          |
| Bubble sort     | O(n^2)        | 2/5          |
| Insertion sort  | O(n^2)        | 3/5          |
| Merge sort      | O(n log n)    | 5/5          |
| Quick sort      | O(n log n)    | 5/5          |
| Heap sort       | O(n log n)    | 4/5          |
| Counting sort   | O(n + k)      | 4/5          |
| Radix sort      | O(n * k)      | 4/5          |
| Bucket sort     | O(n + k)      | 4/5          |
| Bogo sort       | O((n+1)!)     | 1/5          |
| Miracle sort    | O(1)          | 0/5          |



# Goals/Flow
  * an API request is sent to the `sort` endpoint
  * the backend instantiates a TypeSort class and performs the work
  * the backend returns iterative steps to the react application for presentation
  * users can view various sorting algorithms at work
  * users can sort by ascending or descending
  * add sounds and playback features like pause and stepping through

# Technologies
* Flask 
* PyGame (for practice displaying sorts, will be removed from final iteration)
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
* Mike C & Billy F for the guidance and experience

# Bugs / Issues
* It's not finished yet!

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