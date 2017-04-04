# Developer Onboarding

 * [Yarn Installation](https://yarnpkg.com/en/docs/install) - Yarn is 100% deterministic.  Deterministic = if you run Yarn from any state, any time, 1000X times, it will work the same way 1001st time.  npm's installs are non-deterministic.  If you run it in various states, it will install different ways.
 * [Gulp]() - node.js based tool to automate the build process.  It is converting JSX files into Javascript.
 * [React for Atom](https://orktes.github.io/atom-react/)
 * [Babel for Atom](https://atom.io/packages/language-babel)
 * [Webpack](https://webpack.js.org/guides/get-started/) - `webpack --watch` `npm run watch` `npm run dev`
 * [Lint]() - `npm install lint` ` npm run lint`
 * [Radium](http://formidable.com/open-source/radium/) - Radium is a set of tools to manage inline styles on React elements. It gives you powerful styling capabilities without CSS. `npm install radium`
 * [Aphrodite](https://github.com/Khan/aphrodite) - `npm install --save aphrodite`
 

## Install in the working directory:

## npm Commands:
`npm install --save gulp gulp-react gulp-concat`
 
 `npm init`
 
 `npm install -g gulp-cli`
 
 `npm start` - start the server
 
  * [Edit your environment variable path on OSX](http://hathaway.cc/post/69201163472/how-to-edit-your-path-environment-variables-on-mac)
 
 ```Javascript
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vidflix</title>
</head>
<body>
    <div id="app"></div>
    <script src="node_modules/react/dist/react.js"></script>
    <script src="node_modules/react-dom/dist/react-dom.js"></script>
    <script>
        var div = React.DOM.div
        var h1 = React.DOM.h1

        var MyFirstComponent = React.createClass({
          render: function () {
            return (
              div(null,
                h1(null, 'This is my first component!')
              )
            )
          }
        })

        ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
    </script>
</body>
</html>
```

`createClass` creates a new blueprint for an element, allowing to create many of the same class.  

`createElement` creates a new, single instance of that blueprint.  

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js"></script>

/Users/vukdukic/ReactCasts/ReactCasts/firstapp

https://react-cn.github.io/react/downloads.html

http://getbootstrap.com/components/#badges

() - lets JS know you are going to put your expression on the next line.
{} - to let JSX know I want this to be a JS expression

 * The interior set of `{}` represent a JS object, meaning you are passing an object to the style attribute. 
 

