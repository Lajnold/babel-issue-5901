Test case for https://github.com/babel/babel/issues/5901.
Later changed to https://github.com/brigand/babel-plugin-flow-react-proptypes/issues/117.

`src/index.js` contains a few functions, each one with a comment saying whether it works. The ones that do not work generate this error  on compilation:
```
ERROR in ./src/index.js
Module build failed: TypeError: src/index.js: Cannot read property 'file' of undefined
    at Scope.toArray (node_modules\babel-traverse\lib\scope\index.js:437:24)
    at getSpreadLiteral (node_modules\babel-plugin-transform-es2015-spread\lib\index.js:16:20)
    at build (node_modules\babel-plugin-transform-es2015-spread\lib\index.js:56:20)
    at PluginPass.ArrayExpression (node_modules\babel-plugin-transform-es2015-spread\lib\index.js:76:21)
    at newFn (node_modules\babel-traverse\lib\visitors.js:276:21)
    at NodePath._call (node_modules\babel-traverse\lib\path\context.js:76:18)
    at NodePath.call (node_modules\babel-traverse\lib\path\context.js:48:17)
    at NodePath.visit (node_modules\babel-traverse\lib\path\context.js:105:12)
    at TraversalContext.visitQueue (node_modules\babel-traverse\lib\context.js:150:16)
    at TraversalContext.visitSingle (node_modules\babel-traverse\lib\context.js:108:19)
    at TraversalContext.visit (node_modules\babel-traverse\lib\context.js:192:19)
```

`.babelrc` includes `flow-react-proptypes` as a plugin. The code doesn't make use of any flow or react stuff. Removing the plugin from `.babelrc ` makes the code compile.

`gulpfile.js` defines `es2015` as a preset in `babelOptions`. That preset is also defined in `.babelrc`. Removing it from `gulpfile.js` makes the code compile.
```
const babelOptions = {
	presets: ['es2015']
};
```

# Build
* Check out repo
* `npm install`
* `gulp`
* See errors
