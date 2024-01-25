# React Music Player App

## Overview

The React Music Player App is a web application that allows users to manage and play music collection. It includes features such as uploading music and viewing a list of songs.

## Component Structure

The project is structured around the following key components:

1. **Main:** Component for more comfortable work.
2. **TopBar:** Displays navigation links, a search input, and filter/sort controls.
3. **SongList:** Renders a table of songs, including details like song name, artist name, and track number.
4. **SongRow:** Represents a single row within the SongList, displaying information about an individual song.
5. **MusicUploadForm:** Allows users to upload music files, displaying a form for song details and a mock progress indicator.

## State Management

The application handles state primarily through local state within React components.

## How to Run Locally

To run the application locally, follow these steps:

1. **Clone the repository:**

   `git clone https://github.com/lusine-dev/react-music-player.git`

2. **Navigate to the project folder:**

   ` cd react-music-player`

3. **Install dependencies:**

   `npm install`

4. **Start the development server:**

   `npm start`

#### The app will be accessible at http://localhost:3000

**Assumptions and Additional Features**
**Assumptions**
The application assumes a simulated backend API for music uploads, and integrating with a real backend can be done with minimal changes.
**Additional Features**
The app includes a filter component for filtering songs without the need for a filter button. It also provides a sorting option in the TopBar, allowing users to sort music by track number, artist name, or song name.
Feel free to explore to the project!
