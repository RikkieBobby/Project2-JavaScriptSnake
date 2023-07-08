credits:
- w3docs: https://www.w3docs.com/snippets/css/how-to-create-a-multicolor-text-in-html-and-css.html#:~:text=This%20is%20the%20easiest%20way,names%20of%20your%20preferred%20colors. Used the code from this page to apply the mulitcolor effect to the main-heading

- Kenny Yip: https://github.com/ImKennyYip/snake

- freepik.com: https://www.freepik.com/free-vector/detailed-jungle-background_13817745.htm

Bugs and Fixes:
- when playing the game using the arrow keys, the webpage tended to move the page up and down left and right, decided to switch these to the WASD keys instead to prevent this
- encountered a bug where the x axis scroll was being used in the webpage despite no overlay, working on a fix still





.row::after {
    content: "";
    clear: both;
    display: table;
}

[class*="col-"] {
    float: left;
    padding: 15px;
}


@media only screen and (max-width: 600px) {
    /* For tablets: */
    .col-s-1 {width: 8.33%;}
    .col-s-2 {width: 16.66%;}
    .col-s-3 {width: 25%;}
    .col-s-4 {width: 33.33%;}
    .col-s-5 {width: 41.66%;}
    .col-s-6 {width: 50%;}
    .col-s-7 {width: 58.33%;}
    .col-s-8 {width: 66.66%;}
    .col-s-9 {width: 75%;}
    .col-s-10 {width: 83.33%;}
    .col-s-11 {width: 91.66%;}
    .col-s-12 {width: 100%;}
  }
  @media only screen and (max-width: 768px) {
    /* For desktop: */
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}
  }
  