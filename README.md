#Fort.js

Modern progress bar for form completion.
All you do is add the form and Fort.js' algorithm will take care of the rest. Best of all, it's super small.

##Usage
Using Fort.js is so simple, it's simple. All you do is insert `fort.min.js` and  `fort.min.css` into the `<head>` then pop in an `<input>` into `<div class="top">`. Anything outside of the `<div>` won't count. Now you just call the effect (Scroll down to the the "Effects section for more"). Yep, that's all there is to it. Fort.js does the rest.
```html
<head>
  <script src="fort.min.js"></script>
  <link rel="stylesheet" href="fort.min.css">
</head>
<body>
  <script>
  flash()
  </script>
</body>
```

You can also change the color of the progress bar by modifying `fort.min.css`.
```css
background: #000;
```
Think the progress bar speed is too slow or too fast? No worries. In the stylesheet just change the speed to your desired liking.
```css
transition: all 1s;
```
Additionally if you prefer the bottom rather the top, just change `top: 0;` to `bottom: 0;` in the stylesheet.

Want to change the height? Open the stylesheet and change `height: 4px;` to your liking.


##Effects
 * [Default](http://colourity.github.io/) -`solid()`
 * [Gradient](http://colourity.github.io/gradient) - `gradient()`
 * [Sections](http://colourity.github.io/sections) - `sections()`
 * [Flash](http://colourity.github.io/flash) - `flash()`



**Changing the colors:**
* Default - Fire up the stylesheet and simple change it with `background`

* Gradient - Open up the stylesheet and look for `background` located in the `.top` selector.

* Sections - You'll need to find `sections()` in the script. You'll see an array with called `cols`. Note that the colors are declared twice, this is to give it a crisp look.

* Flash - Crack open the script and look for `flash()` then edit `var cols` with your desired colors.


##Coming soon
 * More setting
 * Option to only include certain forms

##License
Fort.js is licensed under the MIT license.(http://opensource.org/licenses/MIT)
It pretty simple, but heres the definition we get

The MIT License is a permissive license that is short and to the point. It lets people do anything they want with your code as long as they provide attribution back to you and don't hold you liable.
##Acknowledgements

**Fort.js** is authored and maintained by Idris Khenchil


 * [My website](http://colourity.com) (colourity.com)


Feel free to check out the demo [here](http://colourity.github.io/).
