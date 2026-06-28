# Eurostar Timetable — Work Experience Project

Welcome! Over the next week you will be building and improving a live train timetable
for Eurostar departures from London St Pancras.

The project is split into small tasks called **tickets**. Each ticket describes one
thing to build or change. You will work through them one at a time, just like a real
software team.

---

## Before you start

You will need two things installed on your laptop. Ask a developer if you are unsure
whether these are already set up.

### 1. Node.js

Node.js lets your computer run JavaScript code outside of a browser (i.e. on the server).

Check if it is already installed by opening a terminal and running:

```
node --version
```

If you see a version number (e.g. `v20.11.0`) you are good to go. If not, ask a
developer to install it for you.

### 2. A code editor

We recommend **Visual Studio Code** (VS Code). Ask a developer if you need it installed.

---

## Getting the code onto your computer

You will work on your own copy of this repository so your changes do not affect anyone
else. This is called **forking**.

### Step 1 — Fork the repository

1. Open this repository on GitHub.
2. Click the **Fork** button in the top-right corner.
3. Choose your own GitHub account as the destination.

You now have your own copy of the project at `github.com/<your-username>/work-experience-exercise`.

### Step 2 — Clone your fork

Cloning downloads the code to your laptop.

1. On your forked repository page, click the green **Code** button.
2. Copy the URL shown (it should start with `https://`).
3. Open a terminal and run:

```
git clone PASTE_URL_HERE
```

4. Move into the project folder:

```
cd work-experience-exercise
```

---

## Installing dependencies

The project uses some code written by other people (called **packages** or
**dependencies**). You need to download them before the project will run.

In the terminal, inside the project folder, run:

```
npm install
```

You should see a `node_modules` folder appear. You only need to do this once.

---

## Running the project

Start the development server with:

```
npm run dev
```

You should see:

```
✅ Server running! Open http://localhost:3000 in your browser.
```

Open your browser and go to **http://localhost:3000** to see the timetable.

> To stop the server, press `Ctrl + C` in the terminal.

Every time you change a backend file (`src/index.ts`), stop the server and start it
again to see your changes. Frontend files (`public/`) refresh immediately — just
reload the browser tab.

---

## Project structure

```
work-experience-exercise/
├── src/
│   └── index.ts       The backend server — holds train data and API routes
├── public/
│   ├── index.html     The page structure
│   ├── style.css      All the styling (colours, fonts, layout)
│   └── app.js         Fetches trains from the server and draws the table
├── tickets/
│   └── *.md           Your tasks — read these to know what to do
└── README.md          This file
```

---

## Your tasks (tickets)

All your tasks are in the **[tickets/](tickets/)** folder. Start with
[tickets/README.md](tickets/README.md) for an overview, then open each ticket in order.

| Ticket | Title |
|--------|-------|
| [EURO-01](tickets/EURO-01.md) | Add a new train |
| [EURO-02](tickets/EURO-02.md) | Calculate journey duration |
| [EURO-03](tickets/EURO-03.md) | Sort trains by departure time |
| [EURO-04](tickets/EURO-04.md) | Filter trains by status |
| [EURO-05](tickets/EURO-05.md) | Replace the logo placeholder |
| [EURO-06](tickets/EURO-06.md) | Update the page colour scheme |
| [EURO-07](tickets/EURO-07.md) | Style the train status badges |
| [EURO-08](tickets/EURO-08.md) | Make it your own |

---

## How to submit your work (pull requests)

In real software teams, you do not push changes directly to the main codebase. Instead,
you create a **pull request** (PR) — a proposal for your changes to be reviewed and
approved by a colleague before they are merged in.

You will do the same here: **one pull request per ticket**.

### Step 1 — Create a branch for your ticket

A **branch** is your own separate workspace. It keeps your changes isolated until they
are reviewed.

Before starting each ticket, create a new branch named after the ticket:

```
git checkout -b EURO-01
```

### Step 2 — Make your changes

Work through the ticket. Save your files as you go.

### Step 3 — Commit your changes

A **commit** is a saved snapshot of your work. When you are happy with your changes, run:

```
git add .
git commit -m "EURO-01: add new Amsterdam train"
```

Write a short message that describes what you did.

### Step 4 — Push your branch to GitHub

```
git push origin EURO-01
```

### Step 5 — Open a pull request

1. Go to your forked repository on GitHub.
2. You should see a banner saying your branch was recently pushed — click
   **Compare & pull request**.
3. Give your PR a clear title (e.g. `EURO-01: add new Amsterdam train`).
4. In the description, briefly explain what you changed and why.
5. Click **Create pull request**.

### Step 6 — Ask for a review

Let a developer know your PR is ready. They will leave comments or approve it.

- If they leave comments, make the requested changes, commit them to the same branch,
  and push again — the PR will update automatically.
- Once approved, a developer will merge it in.

Then move on to the next ticket and repeat from Step 1.

---

## Useful terminal commands

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the development server |
| `git status` | Show which files you have changed |
| `git add .` | Stage all your changes ready to commit |
| `git commit -m "your message"` | Save a snapshot of your changes |
| `git push origin BRANCH-NAME` | Upload your branch to GitHub |
| `git checkout -b BRANCH-NAME` | Create and switch to a new branch |
| `git checkout main` | Switch back to the main branch |

---

## Getting help

If you are stuck, ask a developer. Some good questions to ask:

- "I am working on EURO-XX and I am not sure what this line of code does."
- "My changes are not showing up in the browser — can you help me debug?"
- "I got an error message I do not understand."

No question is too small. Asking for help is a normal and important part of being a
software developer.
