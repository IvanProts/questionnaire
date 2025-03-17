# Questionnaire App (Next.js + TypeScript + Redux)

This project implements a dynamic questionnaire application built with Next.js, TypeScript, and Redux. Questions and logic flows are entirely configurable via JSON.

## 📦 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Redux Toolkit** (for state management)
- **Tailwind CSS**
- **ESLint & Prettier** (code quality & formatting)

## 🚀 Features

- Fully dynamic questionnaire generation from JSON configuration.
- Conditional question flows based on user answers.
- Responsive UI optimized for mobile and desktop.
- Answers are stored using Redux.
- Dynamic placeholders based on previous answers.

## 🗂️ Project Structure

```bash
app/
├── page.tsx                 # Homepage
├── layout.tsx               # App layout (Redux provider etc.)
├── surveys/
│   └── [surveyId]/
│       ├── question/
│       │   └── [id]/
│       │       └── page.tsx  # Dynamic question pages
│       └── summary/
│           └── page.tsx     # Summary page
components/
├── Button/
│   └── index.tsx            # Reusable button component
├── Header/
│   └── index.tsx            # Common header component
├── Providers/
│   └── index.tsx            # Redux providers
├── Question/
│   └── index.tsx            # Question component
constants/
├── enum.ts                  # Enum constants
├── routes.ts                # Route paths constants
data/
└── surveys/
    └── relationshipSurvey.json # Questionnaire configuration
public/
├── BackArrow.svg            # Assets/icons
└── Logo.svg                 # Assets/icons
store/
├── store.ts                 # Redux store configuration
└── questionnaireSlice.ts    # Redux slice for questionnaire answers
types/
├── button.d.ts              # Button component types
├── header.d.ts              # Header component types
├── store.d.ts               # Store-related types
└── survey.d.ts              # Survey/questionnaire types
utils/
├── helpers/
│   └── getSurveyQuestions.ts     # Get survey questions helper
└── formatters/
    └── replacePlaceholders.ts    # Replace dynamic placeholders


```

## 🚀 Installation

Clone the repository:

```bash
git clone <repository_url>
cd project-name
npm install
```

## ⚙️ Commands

### Development

Run development server:

```bash
npm run dev
```

### Production

Build and run the production version:

```bash
npm run build && npm start
```

## 🛠️ Configuration

Questionnaires are configured via JSON files located in:

```bash
src/data/surveys
```

JSON Structure example:

```json
{
  "survey-name": [
    {
      "id": "1",
      "question": "Your question?",
      "screenType": "single-choice",
      "options": ["Option1", "Option2"],
      "next": "2",
      "placeholderKey": "example"
    }
]
```

## ✅ ESLint & Prettier

Run lint checks:

```bash
npm run lint
```

Format code:

```bash
npm run format
```

## 🚀 Deployment

You can deploy the app easily using [Vercel](https://vercel.com/):

- Create a new project at [Vercel](https://vercel.com).
- Connect your repository.
- Deploy your app.

---

## Author

**Ivan Prots** — [ivanprotss@gmail.com](mailto:ivanprotss@gmail.com)

---

Feel free to contribute or report issues via GitHub issues.