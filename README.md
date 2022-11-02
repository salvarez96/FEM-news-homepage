# Frontend Mentor News Homepage challenge

Frontend Mentor [News Homepage challenge](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl/hub/news-homepage-HomM_c3aWM)

You can view the final version [here](https://salvarez96.github.io/FEM-news-homepage/). For now, it is only optimized for mobile and desktop/laptop, not tablets.

## Things I learnt doing this challenge:
- Create a custom nav menu for mobile using JS and CSS.
- Make paces with CSS grid.
- Better use of `rem` as well as other accesibility stuff thanks to [this article](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/). No more `font-size: 62.5%;`
- Deal with frustration (lol).
- Deal with weird bugs. If you look at my JS code [here](https://github.com/salvarez96/FEM-news-homepage/blob/main/src/main.js), at line 10 where I used `src` for the 'X' logo to close the nav menu, I had to use GitHub pages' direct link to the `.svg` file becase, for some reason, I was getting a 404 before because the path was being loaded incorrectly.
- Practice my overall coding skills.
- BEM (sort of).
- Practice my english skills (like writing this README).

### DISCLAIMER
If you want to check my page using the browser's **device emulator**, you'll notice that: first, between ~600px and ~900px there's no change in the layout. But, the nav icon will desapear. That's because I made a conditional in JS where the **nav icon (the hamburger)** dissapears if `window.innerWidth > 650`. If `window.innerWidth > 650`, then the desktop's **nav menu** will be rendered, but this isn't interactive, so you'll have to reload the page if you want to see the correct version of either the mobile or desktop layout, otherwise both versions will be rendered at the same time.

## What's next?
- Keep making more challenges and keep practicing my coding skills, as I'll always learn something very useful everytime I challenge myself with these kind of projects.
- Maybe update this repo, maybe not. 
