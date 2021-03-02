# E-commerce app with React v17, Redux, Hooks, GraphQL, ContextAPI, node, Stripe and Firebase

See the deployed (heroku) version here: [https://javi-ecom.herokuapp.com](https://javi-ecom.herokuapp.com)

![ecomDemo](https://raw.githubusercontent.com/javiside/ecom-clothing/main/src/assets/demo.gif)

### Commit history

1. Initialize project using Create React App
2. Created project with create react app and added files for homepage
3. Divided the homepage into smaller components, finished styling the menu-item component
4. Update the menu-items to navigate with Link instead of withRouter HOC
5. Added shop page and collection-preview/item components
6. Added header component and links to home, shop and contact pages
7. Added login and registration pages and custom input and button components
8. Integrated firebase into application, created sign in page with sign in component and sign in with google
9. Implemented firebase utils, included ability to store authenticated users into the firestore database
10. Finished login handleSubmit method
11. Added redux, implemented userReducer and userActions to header and app components
12. Added redirect to homepage if user is signed in
13. Moved styles to folder, added cartIcon and cartDropdown components, also implemented cart reducer
14. Updated shop data with new data, updated cart utils to group items in cart reducer
15. Created cart-item component and connected cart dropdown with cartItems reducer
16. Included reselect and replaced cart selectors with memoized selectors
17. Added header and user selectors, replaced mapStateToProps with getProps selectors and mapDispatchToProps with object
18. Added checkout page, checkout item component and updated checkout to use selectors
19. Added addItem and removeItem functionality to arrows in the checkout item component
20. Added redux-persist and persisting the cart store
21. Moved shop and directory data into their own reducer, created respective selectors and updated corresponding components with new redux flow for directory/shop
22. Finished stripe integration, updated favicon and icon
23. Implement code that pulls in the shop data from firestore and stores it into the shop reducer. Also included redux-thunk and withSpinner HOC
24. Updated code to leverage containers for collections-overview and collection-page components
25. Moved currentUser value from App state to redux, converted Login and Register components to use Hooks
26. Added media queries to accommodate mobile devices
27. Converted last two class components to hooks, added firestore unsubscribe methods on useEffect cleanup functions
28. Added clearCart action to stripe payment successful, moved registration message error from alert to setError hook
29. Fixed collection page mobile style, added basic contact page
30. Added function header comments to selectors, added test folder and fixed app test case
31. Added enzyme, react adapter 17 and test files, fixed jest empty snapshots issue
32. Added coverage image

![coverage](https://raw.githubusercontent.com/javiside/ecom-clothing/main/src/assets/coverage.png)
