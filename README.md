# E-Commerce-Redux
## Intro
E-Commerce-Redux is a simple E-Commerce site for viewing and choosing products to order. It is developed as a task assigned to me by my mentor (Yousha Vai) as part of some training sessions during my internship at DSinnovators. It is a continuation of a previous task assigned by my mentor. Only the frontend is developed by me and the shown product data are collected from [https://fakestoreapi.com/products](https://fakestoreapi.com/products) .

The Live Preview is available at **Netifly**: ***[https://e-shop-94.netlify.app/](https://e-shop-94.netlify.app/)***

## About Task
The current task is a continuation of the Previous Task along with a few additions.
### Previous Task
```
You are to prepare the frontend of an e-commerce website.
Requirements
Clone this frontend https://e-commerce-frontend-react.netlify.app/
Tools needed to be used:
React
Context Api
fetch/axios
Routing
Tailwind css
localStorage for data persistence
Suggestions
UI should be beautiful, buttery smooth and super responsive
While showing the products in a row, you should insert a mechanism to control the number of products you want to show per row, as it should be consistent throughout the application
Make sure the overall UX is stimulating and raises minimum questions
Backend api : https://fakestoreapi.com/products

Good Luck!
```
### Current Task
```
You are to rewrite the previously written e-commerce application with some new technologies:
redux
redux-thunk(not mandatory)
Added Requirements:
The data needs to be persisted. Any data, input from the user, needs to be persisted on refresh. Also, you are allowed only one network call to the api to fetch data from server, after that you need to implement a system to save that data too.
You are to write a custom modal component which can be configured and reused for later projects. It should accept props like height, width, position(X-Y axis) etc
You are to write a custom hook to fetch the data from server and save it in your localstorage so that you dont make any network calls next time you show the products list.
For persistence in redux, you can look up redux-persist, a really easy-to-use library.
Make a new repository for this, and drop the github link and live link only under this to-do as comment.
Good Luck!
```
## Tech Stack
- **ReactJS** : Frontend
- **Redux** : Global State Management
- **TailwindCss** : CSS Framework

## Screenshot
### Desktop
<img src="screenshots/Desktop/home.PNG" width="800" />
<img src="screenshots/Desktop/sidebar.PNG" width="800" /> 
<img src="screenshots/Desktop/checkout.PNG" width="800" /> 
<img src="screenshots/Desktop/order_success.PNG" width="800" />

### Smartphone
<img src="screenshots/Smartphone/home.PNG" width="360" />
<img src="screenshots/Smartphone/sidebar.PNG" width="360" />
