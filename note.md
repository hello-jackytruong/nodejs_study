[GIT]

git add .
git commit -m "Route controller"
git push -u origin main


npm init
npm i express

node index.js


//nodemon debug
npm i nodemon --save-dev
 "scripts": {
    "start": "nodemon --inspect index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

npm i morgan --save-dev
morgan = require('morgan')

npm i handlebars

npm install express-handlebars


npm i node-sass --save-dev

    "watch":"node-sass --watch src/resources/scss/ --output src/public/css/",

npm run watch

//Format code truoc khi dua len github
npm i lint-staged husky prettier --save-dev

    "beautiful": "lint-staged",

  "lint-staged": {
    "src/**/*.{js,json,scss}": "prettier --single-quote --trailing-comma all --tab-width 4 --write"
  },

    "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },


  npm install mongoose