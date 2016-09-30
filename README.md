## log
* meteor create resistor-color-code
* meteor npm install --save react react-dom
* meteor remove insecure
* meteor remove autopublish
* scss
  * meteor add fourseven:scss
* Material UI
  * meteor npm install --save material-ui react-tap-event-plugin
* meteor npm install --save react-router
* meteor add accounts-facebook accounts-ui

* meteor npm install babel-plugin-transform-class-properties

## Done Features
* material ui
* facebook login

## Problems
* accounts ui style
  * use useraccounts
* material-ui using inline style
  * https://github.com/mattkrick/meatier/issues/108
  * https://github.com/callemall/material-ui/issues/1132
  * https://github.com/callemall/material-ui/issues/30#issuecomment-62447976
* routing not working in firefox and Safari
* material ui not correct in Firefox and Safari
* material design library
  * [react-toolbox](https://github.com/react-toolbox/react-toolbox)
  * mdl
  * materialize
* Missing class properties transform.
  * to use

    ```js
    handleToggle = () => { ...; }
    ```

    you need the babel-plugin "transform-class-properties"

  * How to config babel. (To use "transform-class-properties")
    * add ".babelrc" file in root of project folder
    * edit the file to

      ```js
      {
        "plugins": [
          "transform-class-properties"
        ]
      }
      ```
    * Restart meteor. Done!
*
