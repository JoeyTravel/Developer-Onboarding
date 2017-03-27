# Developer Onboarding

 * [Yarn Installation](https://yarnpkg.com/en/docs/install)
 
 Yarn is 100% deterministic.  Deterministic = if you run Yarn from any state, any time, 1000X times, it will work the same way 1001st time.  npm's installs are non-deterministic.  If you run it in various states, it will install different ways.
 
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
