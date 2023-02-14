# Topdown Minigame

<!-- Table of contents -->
<details open="open">
<summary>Table of Contents</summary>
<ol>
<li>
    <a href="#about-the-project">About The Project</a>
    <ul>
    <li><a href="#built-with">Built With</a></li>
    </ul>
</li>
<li>
    <a href="#getting-started">Getting Started</a>
    <ul>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#installation">Installation</a></li>
    </ul>
</li>
<li>
    <a href="#getting-started">Part 1: Game Mechanics</a>
    <ul>
    <li><a href="#todo1">TODO 1: Create a map</a></li>
    <li><a href="#todo2">TODO 2: Create a player</a></li>
    <li><a href="#todo3">TODO 3: Move player</a></li>
    <li><a href="#todo4">TODO 4: Add collectables</a></li>
    <li><a href="#conclusion-part-1">Conclusion</a></li>
    </ul>
</li>
<li>
    <a href="#getting-started">Part 2: Web3 Implementation (Coming soon!)</a>
    <ul>
    <!-- Link TODOS -->
    <li><a href="#todo1">TODO 1</a></li>
    <li><a href="#todo2">TODO 2</a></li>
    <li><a href="#todo3">TODO 3</a></li>
    <li><a href="#todo4">TODO 4</a></li>
    <li><a href="#todo5">TODO 5</a></li>
    <li><a href="#todo6">TODO 6</a></li>
    <li><a href="#todo7">TODO 7</a></li>
    <li><a href="#todo8">TODO 8</a></li>
    <li><a href="#todo9">TODO 9</a></li>
    <li><a href="#todo10">TODO 10</a></li>
    </ul>
</li>
<li><a href="#contributing">Contributing</a></li>
</ol>
</details>

<!-- About the project -->

## About The Project

This project is a simple topdown minigame that is built using JavaScript, HTML, and CSS.
You will be able to walk around the map and collect coins. The more coins you collect, the higher your score will be.

### Built With

- [JavaScript](https://www.javascript.com/)
- [HTML](https://html.com/)
- [CSS](https://www.w3schools.com/css/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- Fundamental knowledge of HTML and CSS
- Basic knowledge of the following Javascipt data types: `strings`, `numbers`, `booleans`, `arrays`, `objects`.
- Basic knowledge of the following Javascipt constructs: `functions`, `loops`, `operators`.

### Installation

To get a local copy up and running follow these simple steps.

- Clone the repo: `git clone https://github.com/asp2131/topdown-minigame.git`
- Install NPM packages: `npm install`
- Open `index.html` with Live Server

<br>
<br>

## Part 1: Game Mechanics

### TODO 1: Create a map

Locate the body tag in `index.html` and add the following code to it:

> ```html
> <body>
>   <div class="camera">
>     <div class="map pixel-art"></div>
>   </div>
> </body>
> ```

1. This will create a div with the class `map` inside of a div with the class `camera`. The `camera` div will be used to move the map around. The `map` div will be used to create the map.

<br>

2. Now, let's create the map. Locate the `style.css` file and add the following code to it:

<details>
<summary>Click to expand!</summary>

```css
:root {
  --pixel-size: 2px;
  --grid-cell: calc(16 * var(--pixel-size));
  --bg: #eacc79;
}

@media screen and (min-width: 768px) {
  :root {
    --pixel-size: 3px;
  }
}

@media screen and (min-width: 900px) {
  :root {
    --pixel-size: 4px;
  }
}

html,
body {
  height: 100%;
}

body {
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.pixel-art {
  image-rendering: pixelated;
}

.camera {
  width: calc(var(--pixel-size) * 240);
  height: calc(var(--pixel-size) * 221);
  overflow: hidden;
}

.map {
  image-rendering: pixelated;
  /* background-image: url(https://res.cloudinary.com/https-pilot-tune-herokuapp-com/image/upload/v1675455965/DALL_E_2023-02-03_14.18.20_-_top_down_2d_pixelated_map_with_flowers_and_trees_for_web_game_kgrppz.png); */
  background-size: 100%;
  width: calc(26 * var(--grid-cell));
  height: calc(20 * var(--grid-cell));
  position: relative;
  border-radius: 50px;
  border-bottom: 50px;
}
```

</details>

<br>

3. Before we add our map, let's create an AI generated map. Go to [this website](https://labs.openai.com/) and create a map. You can search the following to generate one:

   ```
   topdown 2d map
   ```

<br>

4. Save one of the maps and upload it to [Cloudinary](https://cloudinary.com/). You can upload it to any image hosting service, but Cloudinary is the one I used. Once you upload it, copy the url of the image.

<br>

5. Now, let's add the map to the `.map` selector. Locate the `style.css` file and add the following code to it:

<details>
<summary>Click to expand!</summary>

```css
background-image: url("paste cloudinary url here");
```

</details>

<br>

6. Afterwards your `.map` selector in your `style.css` file should look like this:

<details>
<summary>Click to expand!</summary>

```css
.map {
  image-rendering: pixelated;
  background-size: 100%;
  width: calc(26 * var(--grid-cell));
  height: calc(20 * var(--grid-cell));
  position: relative;
  border-radius: 50px;
  border-bottom: 50px;
  background-image: url(https://res.cloudinary.com/https-pilot-tune-herokuapp-com/image/upload/v1675455965/DALL_E_2023-02-03_14.18.20_-_top_down_2d_pixelated_map_with_flowers_and_trees_for_web_game_kgrppz.png);
}
```

</details>

<br>
<br>

### TODO 2: Create a player

1. Now, let's create a player. Locate the `index.html` file and add the following code to inside our `map` div:

<details>
<summary>Click to expand!</summary>

```html
<div class="map pixel-art">
  <div class="character" facing="down" walking="true">
    <div class="shadow pixel-art"></div>
    <div class="character_spritesheet pixel-art"></div>
  </div>
</div>
```

</details>

<br>

2. Now, let's add some CSS to our player. Locate the `style.css` file and add the following code to it:

<details>
<summary>Click to expand!</summary>

```css
.character {
  width: calc(var(--grid-cell) * 2);
  height: calc(var(--grid-cell) * 2);
  position: absolute;
  overflow: hidden;
  z-index: 1;
}

.shadow {
  width: calc(var(--grid-cell) * 2);
  height: calc(var(--grid-cell) * 2);
  position: absolute;
  left: 0;
  top: 0;
  background: url("https://assets.codepen.io/21542/DemoRpgCharacterShadow.png")
    no-repeat no-repeat;
  background-size: 100%;
}

.character_spritesheet {
  position: absolute;
  background: url("https://res.cloudinary.com/https-pilot-tune-herokuapp-com/image/upload/v1675461985/run_lmgso6.png")
    no-repeat no-repeat;
  background-size: 100%;
  width: calc(var(--grid-cell) * 24);
  height: calc(var(--grid-cell) * 8);
}
```

</details>

<br>

3. Now, if you preview your game, you should see a player on the map. However, it's not moving. Let's fix that.

<br>

### TODO 3: Make the player move

1. Create a new file called `app.js` and add the following code to it:

<details>
<summary>Click to expand!</summary>

```js
const character = document.querySelector(".character");
const map = document.querySelector(".map");

let x = 100;
let y = 50;

const held_directions = [];

let speed = 1;

function placeCharacter() {
  let pixelSize = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--pixel-size")
  );

  const held_direction = held_directions[0];
  if (held_direction) {
    if (held_direction) {
      if (held_direction === directions.right) {
        x += speed;
      }
      if (held_direction === directions.left) {
        x -= speed;
      }
      if (held_direction === directions.down) {
        y += speed;
      }
      if (held_direction === directions.up) {
        y -= speed;
      }
      character.setAttribute("facing", held_direction);
    }
    character.setAttribute("facing", held_direction);
  }
  character.setAttribute("walking", held_direction ? "true" : "false");

  var leftLimit = -8;
  var rightLimit = 16 * 24 + 8;
  var topLimit = -8;
  var bottomLimit = 16 * 18;
  if (x < leftLimit) {
    x = leftLimit;
  }
  if (x > rightLimit) {
    x = rightLimit;
  }
  if (y < topLimit) {
    y = topLimit;
  }
  if (y > bottomLimit) {
    y = bottomLimit;
  }

  var camera_left = pixelSize * 66;
  var camera_top = pixelSize * 42;

  map.style.transform = `translate3d( ${-x * pixelSize + camera_left}px, ${
    -y * pixelSize + camera_top
  }px, 0 )`;
  character.style.transform = `translate3d( ${x * pixelSize}px, ${
    y * pixelSize
  }px, 0 )`;
}

const update = () => {
  placeCharacter();
  window.requestAnimationFrame(() => update());
};

update();

/* Direction key state */
const directions = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
};
const keys = {
  38: directions.up,
  37: directions.left,
  39: directions.right,
  40: directions.down,
};
document.addEventListener("keydown", (e) => {
  var dir = keys[e.which];
  if (dir && held_directions.indexOf(dir) === -1) {
    held_directions.unshift(dir);
  }
});

document.addEventListener("keyup", (e) => {
  var dir = keys[e.which];
  var index = held_directions.indexOf(dir);
  if (index > -1) {
    held_directions.splice(index, 1);
  }
});

/* Touch controls */
document.addEventListener("touchstart", (e) => {
  //if user touches the screen to the right of the character, move right
  const x = e.touches[0].clientX - window.innerWidth / 2;
  const y = e.touches[0].clientY - window.innerHeight / 2;
  console.log(x, "x");
  console.log(y, "y");
  if (e.touches[0].clientX > window.innerWidth / 2 && x > 100) {
    held_directions.unshift(directions.right);
  } else if (e.touches[0].clientX < window.innerWidth / 2 && x < -70) {
    held_directions.unshift(directions.left);
  }
  if (e.touches[0].clientY > window.innerHeight / 2 && y > 100) {
    held_directions.unshift(directions.down);
  } else if (e.touches[0].clientY < window.innerHeight / 2 && y < -200) {
    held_directions.unshift(directions.up);
  }
  //if user touches the screen to the right of the character, move right
});

document.addEventListener("touchend", (e) => {
  held_directions.length = 0;
});
```

</details>

<br>
<br>

2. Now lets disect the code that what we just put in our javascript file.

<details>
<summary>Click to expand!</summary>

```js
const character = document.querySelector(".character");
const map = document.querySelector(".map");
```

Here we are selecting the character and map elements from our HTML file.

```js
let x = 100;
let y = 50;
```

Here we are declaring two variables `x` and `y` and setting their values to `100` and `50` respectively.

```js
const held_directions = [];

let speed = 1;
```

Here we are declaring two variables `held_directions` and `speed` and setting their values to an empty array and `1` respectively. We will use the `held_directions` array to store the direction in which the player is moving. We will use the `speed` variable to store the speed at which the player is moving.

```js
function placeCharacter() {
  let pixelSize = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--pixel-size")
  );
```

Here we are declaring a function called `placeCharacter` and inside it we are declaring a variable called `pixelSize` and setting its value to the value of the `--pixel-size` CSS variable.

```js
const held_direction = held_directions[0];
if (held_direction) {
  if (held_direction) {
    if (held_direction === directions.right) {
      x += speed;
    }
    if (held_direction === directions.left) {
      x -= speed;
    }
    if (held_direction === directions.down) {
      y += speed;
    }
    if (held_direction === directions.up) {
      y -= speed;
    }
    character.setAttribute("facing", held_direction);
  }
  character.setAttribute("facing", held_direction);
}
character.setAttribute("walking", held_direction ? "true" : "false");
```

Here we are checking if the `held_direction` variable is not empty. If it is not empty then we are checking if the `held_direction` variable is equal to the `directions.right` variable. If it is equal to the `directions.right` variable then we are adding the `speed` variable to the `x` variable. We are doing the same for the `directions.left`, `directions.down` and `directions.up` variables.

```js
var leftLimit = -8;
var rightLimit = 16 * 24 + 8;
var topLimit = -8;
var bottomLimit = 16 * 18;
if (x < leftLimit) {
  x = leftLimit;
}
if (x > rightLimit) {
  x = rightLimit;
}
if (y < topLimit) {
  y = topLimit;
}
if (y > bottomLimit) {
  y = bottomLimit;
}
```

Here we are checking if the `x` variable is less than the `leftLimit` variable. If it is less than the `leftLimit` variable then we are setting the `x` variable to the `leftLimit` variable. We are doing the same for the `rightLimit`, `topLimit` and `bottomLimit` variables.

```js
  var camera_left = pixelSize * 66;
  var camera_top = pixelSize * 42;

  map.style.transform = `translate3d( ${-x * pixelSize + camera_left}px, ${
    -y * pixelSize + camera_top
  }px, 0 )`;
  character.style.transform = `translate3d( ${x * pixelSize}px, ${
    y * pixelSize
  }px, 0 )`;
}
```

Here we are setting the `map.style.transform` and `character.style.transform` CSS properties to the values of the `x` and `y` variables.

```js
const directions = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
};
```

Here we are declaring a variable called `directions` and setting its value to an object with four properties. The properties are `up`, `down`, `left` and `right`.


<details>
<summary>Click to expand!</summary>

```js
const character = document.querySelector(".character");
const map = document.querySelector(".map");
```

Here we are selecting the character and map elements from our HTML file.

```js
let x = 100;
let y = 50;
```

Here we are declaring two variables `x` and `y` and setting their values to `100` and `50` respectively.

```js
const held_directions = [];

let speed = 1;
```

Here we are declaring two variables `held_directions` and `speed` and setting their values to an empty array and `1` respectively. We will use the `held_directions` array to store the direction in which the player is moving. We will use the `speed` variable to store the speed at which the player is moving.

```js
function placeCharacter() {
  let pixelSize = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--pixel-size")
  );
```

Here we are declaring a function called `placeCharacter` and inside it we are declaring a variable called `pixelSize` and setting its value to the value of the `--pixel-size` CSS variable.

```js
const held_direction = held_directions[0];
if (held_direction) {
  if (held_direction) {
    if (held_direction === directions.right) {
      x += speed;
    }
    if (held_direction === directions.left) {
      x -= speed;
    }
    if (held_direction === directions.down) {
      y += speed;
    }
    if (held_direction === directions.up) {
      y -= speed;
    }
    character.setAttribute("facing", held_direction);
  }
  character.setAttribute("facing", held_direction);
}
character.setAttribute("walking", held_direction ? "true" : "false");
```

Here we are checking if the `held_direction` variable is not empty. If it is not empty then we are checking if the `held_direction` variable is equal to the `directions.right` variable. If it is equal to the `directions.right` variable then we are adding the `speed` variable to the `x` variable. We are doing the same for the `directions.left`, `directions.down` and `directions.up` variables.

```js
var leftLimit = -8;
var rightLimit = 16 * 24 + 8;
var topLimit = -8;
var bottomLimit = 16 * 18;
if (x < leftLimit) {
  x = leftLimit;
}
if (x > rightLimit) {
  x = rightLimit;
}
if (y < topLimit) {
  y = topLimit;
}
if (y > bottomLimit) {
  y = bottomLimit;
}
```

Here we are checking if the `x` variable is less than the `leftLimit` variable. If it is less than the `leftLimit` variable then we are setting the `x` variable to the `leftLimit` variable. We are doing the same for the `rightLimit`, `topLimit` and `bottomLimit` variables.

```js
  var camera_left = pixelSize * 66;
  var camera_top = pixelSize * 42;

  map.style.transform = `translate3d( ${-x * pixelSize + camera_left}px, ${
    -y * pixelSize + camera_top
  }px, 0 )`;
  character.style.transform = `translate3d( ${x * pixelSize}px, ${
    y * pixelSize
  }px, 0 )`;
}
```

Here we are setting the `map.style.transform` and `character.style.transform` CSS properties to the values of the `x` and `y` variables.

```js
const directions = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
};
```

Here we are declaring a variable called `directions` and setting its value to an object with four properties. The properties are `up`, `down`, `left` and `right`.

```js
const keys = {
  37: directions.left,
  38: directions.up,
  39: directions.right,
  40: directions.down,
};
```

Here we are declaring a variable called `keys` and setting its value to an object with four properties. The properties are `37`, `38`, `39` and `40`. The values of the properties are the values of the `directions` variable.

```js
document.addEventListener("keydown", (e) => {
  const direction = keys[e.keyCode];
  if (direction) {
    held_directions.unshift(direction);
  }
});
```

Here we are adding an event listener to the `document` object. The event listener is for the `keydown` event. When the `keydown` event is fired we are checking if the `direction` variable is not empty. If it is not empty then we are adding the `direction` variable to the `held_directions` array.

```js
document.addEventListener("keyup", (e) => {
  const direction = keys[e.keyCode];
  if (direction) {
    held_directions.splice(held_directions.indexOf(direction), 1);
  }
});
```

Here we are adding an event listener to the `document` object. The event listener is for the `keyup` event. When the `keyup` event is fired we are checking if the `direction` variable is not empty. If it is not empty then we are removing the `direction` variable from the `held_directions` array.

```js
document.addEventListener("touchstart", (e) => {
  //if user touches the screen to the right of the character, move right
  const x = e.touches[0].clientX - window.innerWidth / 2;
  const y = e.touches[0].clientY - window.innerHeight / 2;
  console.log(x, "x");
  console.log(y, "y");
  if (e.touches[0].clientX > window.innerWidth / 2 && x > 100) {
    held_directions.unshift(directions.right);
  } else if (e.touches[0].clientX < window.innerWidth / 2 && x < -70) {
    held_directions.unshift(directions.left);
  }
  if (e.touches[0].clientY > window.innerHeight / 2 && y > 100) {
    held_directions.unshift(directions.down);
  } else if (e.touches[0].clientY < window.innerHeight / 2 && y < -200) {
    held_directions.unshift(directions.up);
  }
});
```

Here we are adding an event listener to the `document` object. The event listener is for the `touchstart` event. This enables touc controls for mobile functionality. When a user touches the screen we are checking if the `x` variable is greater than the `window.innerWidth` variable divided by two. If it is greater than the `window.innerWidth` variable divided by two then we are adding the `directions.right` variable to the `held_directions` array. We are doing the same for the `directions.left`, `directions.down` and `directions.up` variables.

```js
document.addEventListener("touchend", (e) => {
  held_directions.length = 0;
});
```

Here we are adding an event listener to the `document` object. The event listener is for the `touchend` event. When a user stops touching the screen we are setting the `held_directions` array to an empty array.

```js
function update() {
  placeCharacter();
  window.requestAnimationFrame(() => update());
}
```

Here we are declaring a function called `update` and inside it we are calling the `placeCharacter` function. We are also calling the `requestAnimationFrame` function and passing the `update` function as an argument. This will call the `update` function every frame.

```js
update();
```

Here we are declaring a variable called `keys` and setting its value to an object with four properties. The properties are `37`, `38`, `39` and `40`. The values of the properties are the values of the `directions` variable.

```js
document.addEventListener("keydown", (e) => {
  const direction = keys[e.keyCode];
  if (direction) {
    held_directions.unshift(direction);
  }
});
```

Here we are adding an event listener to the `document` object. The event listener is for the `keydown` event. When the `keydown` event is fired we are checking if the `direction` variable is not empty. If it is not empty then we are adding the `direction` variable to the `held_directions` array.

```js
document.addEventListener("keyup", (e) => {
  const direction = keys[e.keyCode];
  if (direction) {
    held_directions.splice(held_directions.indexOf(direction), 1);
  }
});
```

Here we are adding an event listener to the `document` object. The event listener is for the `keyup` event. When the `keyup` event is fired we are checking if the `direction` variable is not empty. If it is not empty then we are removing the `direction` variable from the `held_directions` array.

```js
document.addEventListener("touchstart", (e) => {
  //if user touches the screen to the right of the character, move right
  const x = e.touches[0].clientX - window.innerWidth / 2;
  const y = e.touches[0].clientY - window.innerHeight / 2;
  console.log(x, "x");
  console.log(y, "y");
  if (e.touches[0].clientX > window.innerWidth / 2 && x > 100) {
    held_directions.unshift(directions.right);
  } else if (e.touches[0].clientX < window.innerWidth / 2 && x < -70) {
    held_directions.unshift(directions.left);
  }
  if (e.touches[0].clientY > window.innerHeight / 2 && y > 100) {
    held_directions.unshift(directions.down);
  } else if (e.touches[0].clientY < window.innerHeight / 2 && y < -200) {
    held_directions.unshift(directions.up);
  }
});
```

Here we are adding an event listener to the `document` object. The event listener is for the `touchstart` event. This enables touc controls for mobile functionality. When a user touches the screen we are checking if the `x` variable is greater than the `window.innerWidth` variable divided by two. If it is greater than the `window.innerWidth` variable divided by two then we are adding the `directions.right` variable to the `held_directions` array. We are doing the same for the `directions.left`, `directions.down` and `directions.up` variables.

```js
document.addEventListener("touchend", (e) => {
  held_directions.length = 0;
});
```

Here we are adding an event listener to the `document` object. The event listener is for the `touchend` event. When a user stops touching the screen we are setting the `held_directions` array to an empty array.

```js
function update() {
  placeCharacter();
  window.requestAnimationFrame(() => update());
}
```

Here we are declaring a function called `update` and inside it we are calling the `placeCharacter` function. We are also calling the `requestAnimationFrame` function and passing the `update` function as an argument. This will call the `update` function every frame.

```js
update();
```

Here we are calling the `update` function.

</details>

<br>
<br>

3. Add the following CSS to the `style.css` file.

```css
.character[walking="true"] .character_spritesheet {
  animation: walkAnimation 0.6s steps(4) infinite;
}

@keyframes walkAnimation {
  from {
    transform: translate3d(0%, 0%, 0);
  }
  to {
    transform: translate3d(-100%, 0%, 0);
  }
}
```

Here we are adding a CSS animation to the `character_spritesheet` class. The animation is called `walkAnimation`. The animation will run for 0.6 seconds. The animation will have four steps. The animation will run infinitely. The animation will start from the `0%` position and end at the `-100%` position.

4. Run the project and test it out. You should be able to move the character around the map using the arrow keys or by touching the screen.

### TODO 4: Add collectables

1. Below, your `div` with the class of `character`, add the following HTML to the `index.html` file.

```html
<div>
  <ul class="collectables">
    <li class="collectable"></li>
    <li class="collectable"></li>
    <li class="collectable"></li>
    <li class="collectable"></li>
    <li class="collectable"></li>
    <li class="collectable"></li>
    <li class="collectable"></li>
  </ul>
</div>
```

These list items will be used to display the collectables on the map.

2. Add the following CSS to the `style.css` file.

```css
.collectables {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  z-index: 0;
}

.collectable {
  position: absolute;
  background: url(https://i.pinimg.com/originals/ed/f2/54/edf254eea0ca51397e883b6908ad57cb.gif);
  background-size: 100%;
  width: calc(var(--grid-cell) * 4);
  height: calc(var(--grid-cell) * 2);
  background-repeat: no-repeat;
}
```

Here we are adding some CSS to the `collectables` class. We are setting the width and height to `100%`. We are setting the position to `absolute`. We are setting the overflow to `hidden`. We are setting the z-index to `0`. We are also adding some CSS to the `collectable` class. We are setting the position to `absolute`. We are setting the background to a gif. We are setting the background size to `100%`. We are setting the width and height to `calc(var(--grid-cell) * 4)` and `calc(var(--grid-cell) * 2)` respectively. We are setting the background repeat to `no-repeat`.

<br>
<br>

3. Now we're going to be adding some collectable functionality to the `app.js` file.

- First, we are going to grab all of the collectables from the DOM and store them in a variable called `collectables`.

```js
const collectables = document.querySelectorAll(".collectable");
```

- Next, we are going to create a function called `renderCollectables` and inside it we are going to loop through the `collectables` array and randomly place them on the map.

```js
const renderCollectables = () => {
  let pixelSize = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--pixel-size")
  );
  for (let collectable of collectables) {
    collectable.style.transform = `translate3d( ${
      Math.random() * 500 * pixelSize
    }px, ${Math.random() * 500 * pixelSize}px, 0 )`;
  }
};
```

- Next, we are going to create a function called `placeCollectables` and inside it we are going to call the `renderCollectables` function. This will make sure collectables are regenerated every 10 seconds at a random location on the map.

```js
const placeCollectables = () => {
  renderCollectables();
  setInterval(() => {
    renderCollectables();
    for (let collectable of collectables) {
      collectable.style.display = "block";
    }
  }, 5000);
};

placeCollectables();
```

- Next, we are going to create a function called `checkCollision` and inside it we are going to loop through the `collectables` array and check if the character is colliding with any of the collectables. If the character is colliding with a collectable then we are going to set the `display` property of the collectable to `none`.

```js
const checkCollision = () => {
  for (let collectable of collectables) {
    const collectableRect = collectable.getBoundingClientRect();
    const characterRect = character.getBoundingClientRect();
    if (
      collectableRect.top < characterRect.bottom &&
      collectableRect.bottom > characterRect.top &&
      collectableRect.left < characterRect.right &&
      collectableRect.right > characterRect.left
    ) {
      collectable.style.display = "none";
    }
  }
};
```

- Lastly, we are going to call the `checkCollision` function inside the `update` function.

```js
function update() {
  placeCharacter();
  checkCollision();
  window.requestAnimationFrame(() => update());
}
```

4. Run the project and test it out. You should be able to move the character around the map using the arrow keys or by touching the screen. You should also be able to collect the collectables.

### Conclusion: Part 1

In this tutorial, we learned how to create a simple 2D game using HTML, CSS, and JavaScript. We learned how to create a map using CSS grid. We learned how to create a character using CSS spritesheets. We learned how to move the character around the map using JavaScript. We learned how to add collectables to the map. We learned how to check for collisions between the character and the collectables.

<br>
<br>
<br>
<br>

## Part 2: Web3 Integration

In this part of the tutorial, we are going to be integrating Web3 into our game. We are going to be using Web3 to connect to the Avalanche blockchain. Instead of connecting to actual Avalanche blockchain, we'll be on a testnet so that we don't use any real cryptocurrency. We are going to be using Web3 to interact with our smart contract. We are going to be using Web3 to send transactions to our smart contract. We are going to be using Web3 to read data from our smart contract.

<br>
<br>

### TODO 1: Connect Wallet to Fuji Testnet

1. Make sure you are logged into your metamask account. If you are not logged into metamask, then you will not be able to connect to the Avalanche blockchain and deploy your smart contract.

<br>
<br>

2. Once you are logged into metamask, go to [Chainlist](https://chainlist.org/chain/43113) and click on the `Connect Wallet` on one of the Fuji rpc nodes (preferably the one with the lowest latency or verified privacy). This will connect your metamask account to the Avalanche Fuji testnet.

<!-- Include image of where of the Connect Wallet button is located -->
<img src="https://res.cloudinary.com/https-pilot-tune-herokuapp-com/image/upload/v1676405372/Screen_Shot_2023-02-14_at_2.06.38_PM_orw0mc.png" width="500px" />

<br>
<br>

3. Now we are going to be getting fake AVAX tokens from the [Avalanche Fuji Faucet](https://faucet.avax-test.network/). Make sure your wallet is connected to the site.Afterwards, click on the `Request 2 AVAX` button and then verify the transaction in metamask. This will give you 2 fake AVAX tokens. Your metamask should look like this:

  <img src="https://res.cloudinary.com/https-pilot-tune-herokuapp-com/image/upload/v1676406127/Screen_Shot_2023-02-14_at_2.21.32_PM_olo0fa.png" width="250px" />

<br>
<br>

### TODO 2: Create a Smart Contract

1. Within the `contracts` folder, create a new file called `Player.sol`. The contract is already created for you. However, lets disect the [Solidity](https://soliditylang.org/) in `Player.sol` file.

```solidity
pragma solidity ^0.8.9;
```

- This is the version of Solidity that we are using. We are using version 0.8.9.

```solidity
contract Player {
```

- This is the contract declaration. We are creating a contract called `Player`.

```solidity
  address payable public owner;
  uint256 public score;
```

- These are the state variables. We are creating a `uint` called `unlockTime`, an `address` called `owner`, and a `uint256` called `score`.

```solidity
   function editScore(uint256 amount) public onlyOwner {
        score = amount;
    }
```

- This is a function called `editScore`. This function takes in a `uint256` called `amount` and sets the `score` state variable to the `amount` that is passed in.

```solidity
    function getScore() public view returns (uint256) {
        return score;
    }
```

- This is a function called `getScore`. This function returns the `score` state variable.

```solidity
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can execute this method.");
        _;
    }
```

- This is a modifier called `onlyOwner`. This modifier makes sure that the `owner` is the one calling the function.

```solidity
    constructor() {
        owner = payable(msg.sender);
    }
  }
```

- This is the constructor. This is called when the contract is deployed. This sets the `owner` state variable to the address of the person who deployed the contract.

<br>
<br>

### TODO 3: Deploy Smart Contract

1. Now we are going to be deploying our smart contract to the Avalanche Fuji testnet using a tool called Hardhat. Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software.

- First, we need to copy our wallet's private key. Go to metamask and click on the `Account Details` button. Then click on the `Export Private Key` button. Paste the private key into the `.env` file. Your `.env` file should look like this:

```
PRIVATE_KEY= <key goes here>
```

- Next, we are going to compile our smart contract. Compiling our smart contract will create a `Player.json` file in the `artifacts/contracts` folder. Run the following command in the terminal:

```
npx hardhat compile
```

- Once the contract is compiled, we are going to deploy our smart contract to the Avalanche Fuji testnet. Run the following command in the terminal:

```
npx hardhat run scripts/deploy.js --network fuji
```

- Once the contract is deployed, you should see the contract address in the terminal. Copy the contract address and paste it in the `abi.js` file so that it's assigned to the `contractAddress` variable. Your `abi.js` file should look similar to this:

```js
export const contractAddress = "0x6d5E1A4606810F50Ef0839310C17949b3eF96d2D";
```


<!--
This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:
-->
 -->
