1️⃣ Why did you reference Songs in the Playlist instead of embedding them?

Songs were referenced in the Playlist instead of embedded to avoid data duplication and to support scalability.

A single song can belong to multiple playlists created by different users. If songs were embedded inside playlists, the same song data would be duplicated across many documents. Any update to song information (such as title or duration) would then require updating every playlist containing that song.

By referencing songs, the system maintains a single source of truth, keeps playlist documents lightweight, and allows efficient updates and reuse of song data across multiple playlists.

⸻

2️⃣ Why did you reference the Artist in the Song model?

The Artist was referenced in the Song model to maintain a clear and normalized relationship between songs and artists.

An artist typically has many songs, and referencing allows all songs to point to the same artist document without duplicating artist details. This makes it easy to fetch all songs by a specific artist, update artist information in one place, and maintain consistency across the database.

Referencing also reflects real-world relationships and follows best practices for designing relational data in MongoDB.