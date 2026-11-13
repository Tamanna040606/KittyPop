# 🐾 KittyPop
### A Little Pop of Cuteness, One Kitty at a Time!

KittyPop is a playful cat discovery web application that lets users explore adorable feline images from around the world. Discover a new kitty with every click, collect your favourites, and download images you love!

---

## 🌸 About the Project

KittyPop brings together creativity and frontend development to create a simple yet enjoyable experience for cat lovers.

Powered by The Cat API, the application dynamically fetches random cat images and allows users to interact with them through a collection of easy-to-use features.

Whether you're looking for a little entertainment or simply love cats, KittyPop makes every visit delightful!

## ✨ Key Features

| Feature | Description |
|---|---|
| 🐱 Kitty Discovery | Generate random cat images instantly. |
| ❤️ Favourite Collection | Save your favourite cat images. |
| 📥 Image Download | Download cat images directly. |
| 💾 Persistent Storage | Preserve favourites using LocalStorage. |
| 🎨 Aesthetic Interface | Enjoy a soft pastel-themed design. |
| 📱 Responsive Layout | Access the application across different screen sizes. |

## 🛠️ Built With

- **HTML5** – Application structure.
- **CSS3** – Styling, layouts and visual effects.
- **JavaScript** – Interactive functionality.
- **The Cat API** – Dynamic cat image generation.
- **LocalStorage** – Browser-based favourite management.

## 📁 Project Architecture

```text
KittyPop/
│
├── index.html       # Main application page
├── style.css        # Styling and responsive design
├── script.js        # Application functionality
└── README.md        # Project documentation
```

## 🚀 Getting Started

Follow these instructions to run KittyPop on your local machine.

### Prerequisites

- A modern web browser.
- Visual Studio Code (recommended).
- An active internet connection.

### Installation

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Navigate to the project directory**

```bash
cd KittyPop
```

**3. Start the local server**

Using Python:

```bash
python -m http.server 5500
```

**4. Open the application**

Visit:

```text
http://localhost:5500
```

Alternatively, use the Live Server extension in VS Code.

## 🌐 API Integration

KittyPop uses The Cat API to retrieve random cat images.

**API Endpoint:**

```text
https://api.thecatapi.com/v1/images/search
```

Each request fetches a new cat image, allowing users to explore different cats without manually uploading pictures.
