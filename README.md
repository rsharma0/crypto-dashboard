# Crypto Dashboard

Crypto Dashboard is a simple full-stack web app that lets you view real-time crypto prices and keep track of your personal portfolio. You can add coins you own, see how much of each you have, and visualize your holdings in a live chart.

Live Site: [https://crypto-dashboard-sand-eight.vercel.app](https://crypto-dashboard-sand-eight.vercel.app)

## About the Project

This app was built using React on the frontend and Node.js (with Express) on the backend. It pulls crypto market data from CoinGecko and stores user portfolio entries in a Supabase database. It uses Chart.js to graph your holdings and TailwindCSS for styling and animation. It’s designed to be fast, mobile-friendly, and easy to use.

## Target Browsers

This app works on all modern browsers:

- Chrome, Firefox, Safari, Edge
- iOS Safari
- Android Chrome


## Developer Manual

This section is for developers who want to run the app or maintain the project moving forward.

### Folder Structure
crypto-dashboard
    app <-React frontend
    server <-Express backend

### How to Install Locally

#### 1. Clone the repo:
```bash
git clone https://github.com/rsharma0/crypto-dashboard
cd crypto-dashboard
```

#### 2. Install frontend dependencies:
```bash
cd dashboard
npm install
```

#### 3. Install backend dependencies:
```bash
cd ../server
npm install
```

#### 4. Run the backend server:
```bash
node index.js
```
By default, this starts the Express server at `http://localhost:3001`.

#### 5. Run the frontend:
Open a second terminal window/tab:
```bash
cd dashboard
npm start
```
This runs the React app at `http://localhost:3000`.


### API Endpoints

Your backend exposes two main endpoints via Express:

- `GET /api/portfolio`  
  Fetches all portfolio entries from Supabase.

- `POST /api/portfolio/add`  
  Accepts JSON `{ coin, amount }` and inserts it into the Supabase database.

These two endpoints were custom-authored in the Express backend and used by the frontend via fetch. 

### Known Bugs
- You may need to wait 1–2 seconds after submitting an entry before it appears in the chart due to Render API cold start delays.
- The app assumes valid coin names are entered manually, there's no coin validation yet.

### Future Development
- Add user authentication so portfolios are saved per user.
- Validate coin names via CoinGecko’s API.
- Improve mobile responsiveness for small screens.

