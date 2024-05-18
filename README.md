# Land Use Change Viewer with ArcGIS Pro API for JavaScript

This project demonstrates how to use the ArcGIS Pro API for JavaScript to create a web application for visualizing land use changes over time. The application includes functionality to zoom to specific locations (Accra, Ghana, and Vancouver, Canada) and utilizes a time slider to show changes in land use classes between 2020 and 2100 with a 10 year temporal interval.

## Features

- **Zoom to Locations**: Two buttons to zoom to Accra, Ghana, and Vancouver, Canada.
- **Time Slider**: A time slider to visualize land use changes over time, with a decade interval.
- **Legend**: A legend to display different land use classes.

## How to Use

1. **HTML Structure**: Contains the basic layout and includes buttons for zooming to specific locations.
2. **CSS Styling**: Positions the buttons and the time slider on the map.
3. **JavaScript Functionality**: 
    - Initializes the map and view.
    - Adds a feature layer for land use data.
    - Configures a time slider to display changes over decades.
    - Adds buttons for zooming to Accra and Vancouver.
    - Adds a legend to explain land use classes.

## Notes

- **SceneView vs. MapView**: While the `SceneView` provides a 3D globe effect, the `MapView` is used in this demonstration instead for a smoother transition for the time slider and rendering polygons.
- **Land Use Data**: Ensure the URL to your feature layer is correctly specified in the `FeatureLayer` constructor. Also, an API key needs to be specified if you are using a ArcGIS Developer account.
- **Date Field**: The date field in your land use data should be formatted in a way that it can be correctly filtered by the time slider. This should be done in ArcGIS Pro and properly enabled in your ArcGIS online Content before proceeding.

## Sample Land Use Change Data

A sample land use change dataset has been included in the repository. This data represents a simulation of land use changes between 2020 and 2100 under the SSP 2 (Shared Socioeconomic Pathway 2) Scenario. However, please note that only part of Vancouver, Canada, and Accra, Ghana, are covered in this sample data. The dataset provides an example of how the application can be used to visualize and analyze land use changes over time. 

## LICENSE
The MIT License (MIT)

Copyright (c) 2024 Bright Addae (https://codepen.io/baddae/pen/BaejmEB)
Fork of an original work LAND USE CHANGE VIEWER WITH ArcGIS  JAVASCRIPT API (https://codepen.io/baddae/pen/BaejmEB)

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




