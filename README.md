# Netflix Clone

A Netflix clone application built using React.js and TMDb API to fetch movie details. The project is hosted on Firebase for seamless deployment.

## Features
- Responsive UI replicating Netflix.
- Movie details fetched dynamically using the TMDb API.
- Video playback using `react-youtube` and `movie-trailer` libraries.

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Firebase CLI](https://firebase.google.com/docs/cli)

### Steps to Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   cd netflix-clone
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Firebase Hosting**
   - Log in to Firebase CLI:
     ```bash
     firebase login
     ```
   - Initialize Firebase:
     ```bash
     firebase init
     ```
     - Select **Hosting**.
     - Choose the project to link.
     - Set the build directory as `build`.

4. **Run the Project**
   ```bash
   npm start
   ```

5. **Build and Deploy**
   - Create a production build:
     ```bash
     npm run build
     ```
   - Deploy to Firebase:
     ```bash
     firebase deploy
     ```

---

## Folder Structure

```
/src
  |-- components
  |     |-- Row.js
  |     |-- Banner.js
  |     |-- Nav.js
  |-- requests.js
  |-- App.js
``` 
- **`Row.js`**: Component for displaying movie rows.
- **`Banner.js`**: Component for the featured movie banner.
- **`requests.js`**: TMDb API endpoints and configurations.
- **`Nav.js`**: Component for Navigation Bar.

---

## Dependencies

| Package          | Description                                      |
|------------------|--------------------------------------------------|
| `axios`          | To make API requests to TMDb.                   |
| `react-youtube`  | For embedding YouTube trailers.                 |
| `movie-trailer`  | To fetch YouTube trailers based on movie names.  |

Install them using:
```bash
npm i axios react-youtube movie-trailer
```

---

## Firebase Hosting Steps

1. Add a project on Firebase.
2. Select the **Web icon** and register your app.
3. Set up **Hosting** during Firebase initialization.
4. Navigate to **Project Settings** to retrieve configuration keys.

---

## Cleaning Up

After creating the app with `create-react-app`, remove the following files:
- `App.test.js`
- `setupTests.js`
- `logo.svg`

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
