Music Player App Documentation

#### Overview

The Music Player app is a React-based web application that allows users to manage and play their music collection. It provides features such as uploading music, viewing a list of songs, and controlling playback.

#### Table of Contents

1. Installation
2. Components
   1. TopBar
   2. SongList
   3. SongRow
   4. MusicUploadForm
3. Testing
4. Contributing
5. License

#### Installation

To run the Music Player app locally, follow these steps:

1. Clone the repository:

   `git clone https://github.com/lusine-dev/music-player-app.git`

2. Install dependencies:

   `cd music-player-app`
   `npm install`

3. Start the development server:

`npm start`

#### The app will be accessible at http://localhost:3000.

#### Components

1.  TopBar
    The TopBar component is responsible for displaying navigation links, a search input, and filter/sort controls.

        Usage:

            import TopBar from './components/TopBar';

            // Render the TopBar component
            <TopBar />;

2.  SongList
    The SongList component displays a table of songs, including details like song name, artist name, and track number.

        Usage:

            import SongList from './components/SongList';

            // Render the SongList component
            <SongList songs={songsArray} />;

3.  SongRow
    The SongRow component renders a single row within the SongList, displaying information about an individual song.

        Usage:

            import SongRow from './components/SongRow';

            // Render the SongRow component
            <SongRow song={songObject} />;

4.  MusicUploadForm
    The MusicUploadForm component allows users to upload music files, displaying a form for song details and a mock progress indicator.

        Usage:

            import MusicUploadForm from './components/MusicUploadForm';

            // Render the MusicUploadForm component
            <MusicUploadForm onUpload={onUploadFunction} />;

#### Testing

The project includes unit tests for components using Jest and React Testing Library. To run tests, use the following command:

    `npm test`

#### License

    This project has no license becouse it's test project
