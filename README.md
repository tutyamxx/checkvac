# Steam Profile Checker 🚀

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
</p>

<p align="center">
  <img src="https://i.imgur.com/2SODyxU.png"><br/>
</p>

A simple Node.js script to check Steam profiles for VAC bans. 🕵️‍♂️

## Features ✨

*   **Bulk Checking:** Processes a list of Steam profile URLs from a text file. 📝
*   **VAC Ban Detection:**  Accurately identifies profiles with VAC bans. 🚫
*   **Clear Output:** Provides easy-to-understand results in the console. ✅ ❌
*   **Efficient Processing:**  Designed for fast and reliable checking. 💨
*   **Customizable:** Easily modify the input file and output format. ⚙️

## Prerequisites 🛠️

*   **Node.js:**  Version 16 or higher is recommended.  [https://nodejs.org/](https://nodejs.org/)
*   **npm or yarn:** Node package manager.

## Installation 📦

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/steam-profile-checker.git
    cd steam-profile-checker
    ```

2.  Install dependencies:

    ```bash
    npm install  # or yarn install
    ```

## Usage 💻

1.  **Create a text file** (e.g., `profiles/steam_urls.txt`) containing a list of Steam profile URLs, one URL per line.

2.  **Run the script:**

    ```bash
    node index.js
    ```

3.  **View the results** in your console.  Clean profiles will be marked with ✅, and VAC banned profiles will be marked with 🚨.

## Example `profiles/steam_urls.txt`
