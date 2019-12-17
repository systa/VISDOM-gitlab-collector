An example of a VISDOM datacollector.
=====================================

(VISDOM  deliverable D2.1.2.)

This code has been initially developed in N4S project (https://n4s.dimecc.com/en/) and later in
the VISDOM project (iteavisdom.org).

All source code is under the following copyright:

    /*
    * Copyright 2014-2019 Tampere University
    * 
    * Main authors: Anna-Liisa Mattila, Henri Terho, Antti Luoto, Hugo Fooy(, Kari Systä)
    * 
    * Permission is hereby granted, free of charge, to any person obtaining a copy of
    * this software and associated documentation files (the "Software"), to deal in 
    * the Software without restriction, including without limitation the rights to 
    * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    * the Software, and to permit persons to whom the Software is furnished to do so, 
    * subject to the following conditions:
    * 
    * The above copyright notice and this permission notice shall be included in all
    * copies or substantial portions of the Software.
    * 
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS 
    * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
    * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
    * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    */

This software is part and example of the unified data model documented, for example, in 

- Anna-Liisa Mattila, Timo Lehtonen, Henri Terho, Tommi Mikkonen, and Kari Systä.
  Mashing up software issue management, development, and usage data.
  In Proceedings of the Second International Workshop on Rapid Continuous Software Engineering (RCoSE '15).
  IEEE Press, Piscataway, NJ, USA, 26-29. (2015)

- Otto Hylli, Anna-Liisa Mattila and Kari Systä.
  Collecting issue management data for analysis with a unified model and API descriptions.
  SPLST (2015).

In particular, this code read issue managment and CI/CD pipeline information from gitlab.
The files and folders are the following:

- data-collector/apis (folder) contains API descriptions that map the tool-specific API to
  our unified data-model. This version uses two API descriptions: gitlab and gitlab_pipelines.

- data-collector (folder) contains the generic data-collection functions.

- apps.js (javascript file) two application functions to read issues and CI pipeline data from gitlab.

- example.js (javascript file) an example file for using the data collector. Fill in the information
  and run with "node example.js"

- example-issues.txt:  an example output of example.js

- example-pipelines.txt:  an example output of example.js

- package-lock.json: exact versio used in running the code. As always with node.js modules, slight
  change in the version may effect the function of the code.


