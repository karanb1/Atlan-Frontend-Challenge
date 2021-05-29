# Atlan-Frontend-Challenge
**Atlan Frontend Intern Hiring Challenge**

**Link: https://keen-fermat-6f48d9.netlify.app/**

## Page load Time
**580 ms on Pingdom(Testing from North America)**


<img width="1043" alt="Screenshot 2021-05-28 at 10 53 28 PM" src="https://user-images.githubusercontent.com/53102310/120057338-d83b4880-c007-11eb-9661-5d6a2e705f2a.png">

**Light House Analysis**


<img width="632" alt="Screenshot 2021-05-28 at 10 57 57 PM" src="https://user-images.githubusercontent.com/53102310/120057374-37995880-c008-11eb-87c0-11a0526d66e0.png">

## Steps to Improve Load Time

1. Used React pure components using Memoization which helped in optimising the rerendering of the components.
2. All the styling is done using SCSS without any 3rd party library or styled components which helped in reducing the bundle size.
3. Implemented code splitting for every element of the UI which is recommended by React to reduce bundle size.
4. Used Fragments instead of divs to reduce DOM nodes.
