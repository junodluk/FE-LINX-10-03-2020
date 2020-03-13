# Weather Dashboard - A Linx Challenge

Project created as a challenge for Linx.

Authored by **Alcione de Lucca Júnior** <junior.dluk@gmail.com>

**Summary**
- [Setting up](#setting-up)
- [Running](#running)
- [Testing](#testing)
- [Building](#building)
- [Packages and Dependencies](#packages-and-dependencies)

## Setting up
1. `git clone https://github.com/junodluk/FE-LINX-10-03-2020.git`;
2. Run `npm i` to install dependencies;

## Running
1. Start the server by running `npm start`;
2. Access the default url `http://localhost:3000/`;

## Testing
1. Run the tests by running `npm test`;
2. Press `a` to run all tests;

## Building
1. Start the build process by running `npm build`;
2. Files will be created at the folder `./build`;

## Packages and Dependencies

- [Axios](https://github.com/axios/axios)
⋅⋅⋅"Promise based HTTP client for the browser and node.js"
⋅⋅⋅Axios is a worldwide package that makes easy to manage multiple instances and promises.
⋅⋅⋅I used it mostly because it's really common in web development, and also i had been using it in many personal/professional projects for a while now.

- [moment](https://github.com/moment/moment)
⋅⋅⋅The most used package for working with dates in javascript.
⋅⋅⋅I find it more natural to use this package than the Date class in javascript. Also, pretty common in web development.

- [Styled Components](https://github.com/styled-components/styled-components)
⋅⋅⋅A very endorsed and well made package for updating a component's style on the fly.
⋅⋅⋅Since i dislike having my list of colors duplicated between css variables and javascript constants, it also facilitates a use of a single place for storing an app's list of colors.

- [styled-bootstrap-grid](https://github.com/dragma/styled-bootstrap-grid)
⋅⋅⋅A very simple package to use in conjunction with Styled Components.
⋅⋅⋅I use it simply for it's grid system wich is based on the Bootstrap grid system.

- [xml-js](https://github.com/nashwaan/xml-js)
⋅⋅⋅Since I was not successfull in getting consistent data from the OpenWeatherMap api, I was forced to use XML mode.
⋅⋅⋅JSON mode does not carry the same model as XML mode, in addition, XML mode has more complete data. So i needed to use a package to speed up this setback.

- [enzyme](https://github.com/enzymejs/enzyme)
⋅⋅⋅Enzyme is a wrapper of the @testing-library from React.
⋅⋅⋅Actually I'm quite new to this package but I wanted to use it to learn it and experiment with it.

- [check-prop-types](https://github.com/ratehub/check-prop-types)
⋅⋅⋅A very simple utility for testing and checking component PropTypes.
