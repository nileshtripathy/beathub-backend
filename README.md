# BeatHub Backend – Data Layer

This repository contains the backend data layer for the **BeatHub** application.  
It demonstrates how individual Mongoose models are assembled into a functioning MongoDB-backed system with relationships between entities.

---

## 📁 Project Structure

- `models/` – Mongoose schemas for core entities (Artist, Album, Song, User, Playlist)
- `scripts/` – Utility scripts (database seeding)
- `docs/` – Architecture and design documentation
- `.env` – Environment variables (not committed)
- `.gitignore` – Prevents sensitive files from being pushed

---

## ⚙️ Setup Instructions

### 1. Install Dependencies
```bash
npm install


---

## ✅ 4. docs/DESIGN.md (Paste This Exactly)

```md
# BeatHub Data Layer – Design Decisions

## 1. Why did you reference Songs in the Playlist instead of embedding them?

Songs are referenced in the Playlist rather than embedded to avoid data duplication and improve scalability.

A single song can exist in multiple playlists across different users. If songs were embedded, updating song metadata (such as title or duration) would require updating every playlist containing that song. Referencing allows a single source of truth while keeping playlists lightweight.

This approach also keeps playlist documents small and improves performance as the application scales.

---

## 2. Why did you reference the Artist in the Song model?

The Artist is referenced in the Song model to maintain clear ownership and efficient querying.

Multiple songs belong to the same artist, and referencing allows us to:
- Fetch all songs by a specific artist easily
- Avoid duplicating artist information in every song document
- Update artist details in one place without affecting song data

This follows normalization principles and mirrors real-world relationships in music platforms.