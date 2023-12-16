This is a simple E-commerce application made using `Next.js` and `Tailwind CSS` as part of Dil foods accessment

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn About Project Arcitecture

The App consist of `Home`, `Cart`, `CheckOut` and `Product` pages.

All navigation is done using `Next/Link`.

State management is done using `createContext`, `useReducer` and `useContext`.
A custom error page, Loading effect and a page Not Found page are added to make the application a bit more user friendly.

`util` folder is used for the helper functions.
All the styling is done using `Tailwind CSS`

## Read these before using the app to avoid confusion -\_-

The Checkout button is disabled when cart is empty
Price item count and all other state are updated using context API.

Dummy data used in this project is from [Fake store Api](https://fakestoreapi.com/).
Read the documentation for more useful info.

if you are going to use the API for fake store data don't forget to add the `domain` in the `next.config.js` as follows:

`domains: ["fakestoreapi.com"],`
