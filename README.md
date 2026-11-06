# 🍕 Pizzeria App

A React-based Pizzeria web application where users can explore pizzas, customize their own pizzas, manage their shopping cart, and proceed through a checkout process.

The application provides an interactive pizza-ordering experience with dynamic pricing and a user-friendly interface.

## 🚀 Features

### 1. Home Page
- Displays the Pizzeria home page.
- Provides navigation to different sections of the application.
- Includes the Pizzeria logo and navigation menu.

### 2. Order Pizza
- Displays available pizzas using data from JSON files.
- Allows users to browse the pizza menu.
- Add pizzas to the shopping cart.
- Customize pizzas before adding them to the cart.

### 3. Build Your Own Pizza
- Allows users to create customized pizzas.
- Displays available ingredients.
- Allows users to select or deselect ingredients.
- Automatically updates the pizza price based on selected ingredients.

### 4. Shopping Cart
- Displays selected pizzas and their quantities.
- Allows users to increase or decrease pizza quantities.
- Calculates the total price dynamically.
- Allows users to remove individual items or clear the cart.

### 5. Checkout
- Collects delivery address and mobile number.
- Provides payment method selection.
- Validates the required delivery details.
- Displays an order summary with the total amount.
- Redirects users to the order success page after placing an order.

## 🛠️ Technologies Used

- **React.js** – Building reusable UI components.
- **JavaScript (ES6+)** – Application logic and functionality.
- **HTML5** – Application structure.
- **CSS3** – Styling.
- **Bootstrap** – Responsive layout and UI components.
- **Redux Toolkit** – Managing application and cart state.
- **React Router DOM** – Navigation between pages.
- **Vite** – Development server and build tool.
- **JSON** – Storing pizza and ingredient data.

## 📂 Project Structure

```text
pizzariaApp/
│
├── public/
│   └── data/
│       ├── pizza.json
│       └── ingredients.json
│
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── OrderPizza.jsx
│   │   ├── BuildPizza.jsx
│   │   ├── Cart.jsx
│   │   └── Checkout.jsx
│   │
│   ├── redux/
│   │   └── slices/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Visual Studio Code (recommended)

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Navigate to the Project Folder

```bash
cd pizzariaApp
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Development Server

```bash
npm run dev
```

### Step 5: Open the Application

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## 🧪 Available Scripts

| Command | Description |
|---|---|
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts the development server |
| `npm run lint` | Checks code using ESLint |
| `npm run build` | Creates a production build |

## 🔄 Application Workflow

1. Open the Pizzeria home page.
2. Navigate to the Order Pizza section.
3. Browse the available pizzas.
4. Add a pizza to the cart or customize one.
5. Select ingredients in the Build Your Own Pizza section.
6. View the updated price.
7. Manage pizza quantities in the shopping cart.
8. Proceed to checkout.
9. Enter delivery details and select a payment method.
10. Place the order and view the success page.

## 🎯 Project Objective

The main objective of this project is to demonstrate practical implementation of React concepts, including:

- Functional components
- Props and state management
- React Hooks
- Event handling
- Conditional rendering
- React Router
- Redux Toolkit
- Dynamic data rendering
- Form validation
- Dynamic price calculation

## 🔮 Future Enhancements

- Integrate a backend for storing user and order information.
- Implement secure user authentication.
- Integrate a real payment gateway.
- Persist shopping cart data across browser refreshes.
- Add order history and order tracking.
- Improve error handling and form validation.

## 👨‍💻 Author

**Sambit Kumar**

## 📄 License

This project is created for learning and educational purposes.
