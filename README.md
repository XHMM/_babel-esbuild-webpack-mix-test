## notice
if using `lodash-webpack-plugin` webpack plugin, must **not forget** to set proper [feature sets](https://github.com/lodash/lodash-webpack-plugin#feature-sets), or your function would not work properly.

you can safely only use `babel-plugin-lodash` without webpack plugin, but bundle size will increase much more but less than without nothing used.
