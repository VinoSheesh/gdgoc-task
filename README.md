# Google Developer Groups on Campus — Universitas Gadjah Mada (GDGoC UGM)

<p align="center">
  <img src="public/GDGoC%20UGM%20identity.png" alt="GDGoC Universitas Gadjah Mada" width="560" />
</p>

<p align="center">
  Official community website for <strong>Google Developer Groups on Campus Universitas Gadjah Mada</strong>. Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Lenis smooth scrolling.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.4.5-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.3.0-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Lenis-Smooth_Scroll-1a73e8?style=for-the-badge" alt="Lenis" />
</p>

---

## 📖 Overview

The **GDGoC UGM** web platform connects university students with technology, design, and research opportunities. It serves as a comprehensive hub for discovering learning tracks, participating in community programs, reading curated FAQs, and reaching out to community leads.

The project strictly follows Google's design language—featuring signature pastel tones, authentic brand colors (`#1a73e8` Blue, `#ea4335` Red, `#fbbc04` Yellow, `#34a853` Green), custom 3D isometric assets, and accessible, responsive typography.

---

## ✨ Features & Pages

### 1. Home Page (`/`)
* **Hero Section**: High-impact introduction highlighting *"Built by students. For what's next."* with custom 3D visuals.
* **Discover Section**: Emphasizes *"Curiosity is the only prerequisite"*.
* **Track Discovery Section**: Dynamically fetches community tracks from the API with interactive cards, ambient glowing borders, and categorized skills.
* **Learning Formats**: Highlights peer study groups, hands-on workshops, and project circles on Google Gray (`#f1f3f4`).
* **Build & Belong Section**: Showcases collaborative community projects.
* **Getting Started (01–04)**: Progressive 4-step onboarding timeline.
* **Belonging Statement**: Reassuring commitment to inclusivity on soft green tint (`#eaf5ed`).
* **Interactive FAQ Section**: Accordion powered directly by the GDGoC API with smooth expandable transitions.
* **Community Invitation**: Call-to-action banner linking directly to getting involved.

### 2. About Page (`/about`)
* **About Hero**: *"A bridge from 'I wonder' to 'I made this.'"* accompanied by isometric 3D illustrations.
* **Our Purpose**: Explains the core mission of learning and building together.
* **Community Values**: 4 pillars (*Stay curious*, *Make room*, *Learn by building*, *Give something back*) accented by Google brand top borders.
* **Ways to Belong**: Three distinct paths for learners, collaborators, and contributors.
* **Community Commitment**: Warm yellow cream banner (`#fff7df`) highlighting psychological safety and constructive collaboration.

### 3. Overview Page (`/overview`)
* **Overview Introduction**: *"Find your spark. Build your own path."* with full-width screen divider and anchor jump navigation.
* **Learning Tracks Overview (`#learning-tracks`)**: Live-fetched pathways with direct URL query detection (`?track=research-discovery`) and visual spotlight.
* **Learning Outcomes Matrix**: Responsive table comparing pathways, practical skills, and concrete deliverable outcomes.
* **Program Formats (`#learning-formats`)**: 2×2 grid displaying format badges and *"Best for"* recommendations.
* **Learning Journey (`#learning-journey`)**: Step-by-step roadmap (`01 Discover`, `02 Practice`, `03 Build`, `04 Share`).
* **Starting Point Guidance (`#starting-point`)**: Welcoming section for beginners with precision word-wrapping.

### 4. Contact Page (`/contact`)
* **Contact the Community**: *"Good things start with hello."*
* **Two-Way Synchronized Topic Cards**: Selecting any of the 4 topic cards (*Joining & learning*, *Collaboration*, *Speaking & sharing*, *General inquiry*) automatically updates the form category dropdown (and vice-versa).
* **Interactive Message Form**: Responsive input fields, category selector, agreement checkbox, and validation feedback.
* **Community Updates Card**: Soft cream card with direct link to the `@gdgoc.ugm` Instagram channel.
* **Before You Send Section**: Three-tier guidance separated by subtle dividers helping users frame questions and collaboration proposals.

---

## 🌐 API Integrations

The application connects to official GDGoC UGM API endpoints with Incremental Static Regeneration (ISR) and automated offline fallbacks:

| Endpoint | Method | Purpose |
| :--- | :---: | :--- |
| `https://gdgoc-ugm-api.vercel.app/api/navigation` | `GET` | Powers dynamic navigation links across the Navbar & Footer |
| `https://gdgoc-ugm-api.vercel.app/api/tracks` | `GET` | Fetches all learning tracks dynamically |
| `https://gdgoc-ugm-api.vercel.app/api/tracks/:id` | `GET` | Fetches detailed track data (e.g. `research-discovery`) |
| `https://gdgoc-ugm-api.vercel.app/api/faqs` | `GET` | Fetches community FAQs with optional category query parameters |
| `https://gdgoc-ugm-api.vercel.app/api/values` | `GET` | Fetches core community values dynamically on the About page |
| `https://gdgoc-ugm-api.vercel.app/api/formats` | `GET` | Fetches learning program formats dynamically on the Overview page |

> **Resilience Guarantee**: All API helpers in `app/lib/` include full TypeScript schemas and pre-configured fallback records (`FALLBACK_TRACKS`, `FALLBACK_FAQS`, `DEFAULT_NAV_LINKS`). If an endpoint experiences latency or downtime, the application gracefully falls back without any downtime or broken layouts.

---

## 🛠️ Tech Stack

* **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server & Client Components)
* **Library**: [React 19](https://react.dev/)
* **Language**: [TypeScript 5](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Bundler & Engine**: [Turbopack](https://turbo.build/pack)

---

## 📂 Project Structure

```text
gdgoc-task/
├── app/
│   ├── about/
│   │   └── page.tsx                     # About Page
│   ├── components/
│   │   ├── ui/
│   │   │   ├── ArrowLink.tsx            # Animated arrow text link
│   │   │   ├── Container.tsx            # Max-width layout container
│   │   │   ├── FAQItem.tsx              # Accordion item with chevron
│   │   │   ├── LearningFormatCard.tsx   # Format card on Home
│   │   │   ├── ProgramFormatCard.tsx    # Format card on Overview
│   │   │   ├── SectionBadge.tsx         # Google Blue dot + uppercase label
│   │   │   ├── SectionDivider.tsx       # Subtle horizontal border
│   │   │   ├── StepCard.tsx             # Numbered step card (01-04)
│   │   │   ├── TrackCard.tsx            # 3D illustration track card
│   │   │   └── ValueCard.tsx            # 4-accent community value card
│   │   ├── AboutHeroSection.tsx         # Hero on About page
│   │   ├── BeforeYouSendSection.tsx     # Guidance on Contact page
│   │   ├── BelongingStatementSection.tsx# Soft green statement banner
│   │   ├── BuildAndBelongSection.tsx    # Collaborative showcase
│   │   ├── CommunityCommitmentSection.tsx # Code of conduct / care section
│   │   ├── CommunityInvitationSection.tsx # Reusable CTA banner
│   │   ├── CommunityValuesSection.tsx   # 4 core values
│   │   ├── ContactCommunitySection.tsx  # Interactive contact form
│   │   ├── DiscoverSection.tsx          # Curiosity discovery
│   │   ├── FAQSection.tsx               # Dynamic FAQ accordion
│   │   ├── Footer.tsx                   # Multi-column Google-styled footer
│   │   ├── GettingStartedSection.tsx    # 4-step journey on Home
│   │   ├── HeroSection.tsx              # Main homepage hero
│   │   ├── LearningFormatSection.tsx    # Learning formats on Home
│   │   ├── LearningJourneySection.tsx   # Step-by-step on Overview
│   │   ├── LearningOutcomesSection.tsx  # Outcomes matrix table
│   │   ├── LearningTrackOverviewSection.tsx # Track overview section
│   │   ├── Navbar.tsx                   # Responsive sticky navbar
│   │   ├── OurPurposeSection.tsx        # Purpose statement on About
│   │   ├── OverviewIntroSection.tsx     # Overview hero & anchor bar
│   │   ├── ProgramFormatsSection.tsx    # 2x2 grid on Overview
│   │   ├── SmoothScroll.tsx             # Lenis smooth scroll provider
│   │   ├── StartingPointGuidanceSection.tsx # Guidance for beginners
│   │   ├── TrackDiscoverySection.tsx    # Live track discovery on Home
│   │   └── WaysToBelongSection.tsx      # Contribution paths
│   ├── contact/
│   │   └── page.tsx                     # Contact Page
│   ├── lib/
│   │   ├── faqs.ts                      # FAQ API service & types
│   │   ├── navigation.ts                # Navigation API service & types
│   │   └── tracks.ts                    # Tracks API service & types
│   ├── overview/
│   │   └── page.tsx                     # Overview Page
│   ├── favicon.ico
│   ├── globals.css                      # Global Tailwind CSS styles
│   ├── layout.tsx                       # Root layout with Lenis & metadata
│   └── page.tsx                         # Home Page
├── public/                              # Static images, 3D assets, logos
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
* **Node.js**: `v18.18.0` or higher (Node 20+ recommended)
* **npm**, **pnpm**, or **yarn**

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/gdgoc-task.git
cd gdgoc-task
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The application will hot-reload as you edit code.

### 4. Build for Production

```bash
npm run build
npm run start
```

### 5. Linting & Type Checking

Ensure code quality and strict typing:

```bash
# Type check without emitting files
npx tsc --noEmit

# Run ESLint
npm run lint
```

---

## 🎨 Design Tokens & Palette

| Token Name | Hex Code | Usage |
| :--- | :---: | :--- |
| **Google Blue** | `#1a73e8` | Primary brand color, CTA buttons, active states, badges |
| **Google Blue Dark** | `#1557b0` | Hover state for buttons and links |
| **Google Blue Light** | `#eaf2ff` | Background tint for invitation cards & active topic pill |
| **Google Red** | `#ea4335` | Value card accent line & Google logo element |
| **Google Yellow** | `#fbbc04` | Value card accent line & Google logo element |
| **Google Yellow Cream** | `#fff7df` | Background for Community Commitment & Updates cards |
| **Google Green** | `#34a853` | Value card accent line & Development track glow |
| **Google Green Light** | `#eaf5ed` | Background for Belonging Statement |
| **Google Gray** | `#f1f3f4` | Background for Program Formats, Form Card, and Footer |
| **Text Primary** | `#111827` | Headings and titles |
| **Text Muted** | `#6b7280` / `#9ca3af` | Secondary body text and taglines |

---

## 👥 Community & Social Links

* **Institution**: Universitas Gadjah Mada (UGM)
* **Instagram**: [@gdgoc.ugm](https://instagram.com/gdgoc.ugm)
* **Community Chapter**: [Google Developer Groups on Campus UGM](https://gdg.community.dev)

---

<p align="center">
  Developed with ❤️ for the Google Developer Groups on Campus UGM Community.
</p>
