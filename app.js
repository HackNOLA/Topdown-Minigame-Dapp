const character = document.querySelector(".character");
const map = document.querySelector(".map");

let x = 100;
let y = 50;
const held_directions = [];

let speed = 1;

const placeCharacter = () => {
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
};

const step = () => {
  placeCharacter();
  window.requestAnimationFrame(() => step());
};

step();

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

document.addEventListener("touchstart", (e) => {
  //if user touches the screen to the right of the character, move right
});

// document.addEventListener("touchstart", (e) => {
//   //if user touches the screen to the right of the character, move right
//   if (e.touches[0].clientY > window.innerHeight / 2) {
//     held_directions.unshift(directions.down);
//   }
// });

// document.addEventListener("touchstart", (e) => {
//   //if user touches the screen to the above of the character, move up
//   if (e.touches[0].clientY < window.innerHeight / 2) {
//     held_directions.unshift(directions.up);
//   }
// });

document.addEventListener("touchend", (e) => {
  held_directions.length = 0;
});
