# Harmain Birthday Surprise Website

A cinematic, midnight-themed birthday surprise experience built with React + Vite for Harmain Ghani.

## Local development

```bash
npm install
npm run dev
```

Open the local site in your browser at http://localhost:5173/.

## Replace gallery photos

Place Harmain's real photos in the project folder below:

```text
public/images/
```

Use your own images and keep the file names simple, such as:

```text
public/images/harmain-1.jpg
public/images/harmain-2.jpg
public/images/harmain-3.jpg
```

Then update the config file here:

```text
src/config/birthdayConfig.js
```

Change the array entries under `galleryImages` to match your real photos:

```js
galleryImages: [
  { src: '/images/harmain-1.jpg', alt: 'Harmain portrait', caption: 'A favorite moment' },
  { src: '/images/harmain-2.jpg', alt: 'Harmain smiling', caption: 'Another memory' },
]
```

## Edit the birthday letter

The main birthday message lives in:

```text
src/config/birthdayConfig.js
```

Update the `letterMessage` value to change the greeting text and personal note.

## Build for production

```bash
npm run build
```

The production files will be output to the `dist/` folder.

## Deploy to GitHub and Vercel

1. Create a new repository on GitHub.
2. In the project folder, run:

```bash
git init
git add .
git commit -m "Birthday surprise website"
git branch -M main
git remote add origin <your-github-url>
git push -u origin main
```

3. Sign in to Vercel and click "Add New Project".
4. Import the GitHub repository.
5. Use the default Vite settings.
6. Click "Deploy".
7. Vercel will generate a public URL.
8. Test the public link on your phone.
9. Push future changes with:

```bash
git add .
git commit -m "Update surprise website"
git push
```

## Notes

- The music file is optional and can be replaced in `public/audio/birthday-music.mp3`.
- If no music file is present, the website still works without errors.
- The gallery uses local placeholders by default so the page remains safe and fast.
