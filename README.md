# 🎵 GitBeat

### **Your Code Has a Sound. Let's Hear It.**

Ever wondered what your GitHub repository would sound like? GitBeat transforms code into music using AI - analyzing your repo's architecture, contributors, and development patterns to generate a unique beat that represents your project's vibe.

**🎧 [Try it Live](https://gitbeat.zeabur.app)** | **⭐ Star this repo if you love it!**

---

## 🔥 What Makes GitBeat Special?

GitBeat isn't just another GitHub stats tool - it's a **creative AI experience** that bridges code and music:

- 🤖 **Triple AI Power**: Combines Dust.tt, Groq, and Suno AI for deep analysis and music generation
- 🎼 **Unique Beats**: Every repository gets its own custom song with vocals about the code
- 👥 **Contributor Roasts**: AI-powered personality profiles (fun mode gets savage!)
- 🏆 **Community Leaderboard**: Vote for your favorite beats and see what's trending
- ⚡ **Lightning Fast**: Groq's Llama 3.3 70B delivers insights in 2-3 seconds

**Built for the [Zeabur Ship It Hackathon 2026](https://zeabur.com/hackathon)** 🚀

## ✨ Features

### 🎵 **Beats Generation**
Transform any GitHub repo into a custom AI-generated song. The AI analyzes your code structure, tech stack, and development patterns, then creates music that captures your project's essence.

### 📊 **Repository Analysis**
Get deep insights powered by Groq's Llama 3.3 70B:
- **Team Dynamics**: How contributors work together
- **Project Health**: Stars, forks, activity metrics
- **Contributor Personalities**: AI-generated profiles (try "Fun" mode for hilarious roasts!)
- **Language Breakdown**: Tech stack visualization

### 🏆 **Interactive Leaderboard**
- Vote for your favorite beats
- Real-time ranking animations
- Play songs directly in the browser
- View AI-generated lyrics for each track

### 🎨 **Beautiful UI**
- Responsive design (works on mobile!)
- Smooth animations and transitions
- Dark mode optimized
- Built with Tailwind CSS v4 and shadcn/ui

## 🛠️ Technology Stack

**Frontend & API:**
- ⚡ Next.js 15 with React 19 & TypeScript
- 🎨 Tailwind CSS v4 + shadcn/ui components
- 🚀 Deployed on Zeabur (serverless)

**Database & Storage:**
- 🗄️ Supabase PostgreSQL (songs, votes, repos)
- 📦 Supabase Object Storage (audio files & lyrics)

**AI Services:**
- 🧠 **Dust.tt** - Deep repository analysis with multi-step reasoning
- ⚡ **Groq** (Llama 3.3 70B) - Lightning-fast contributor insights (2-3s response!)
- 🎵 **Suno AI** - Professional music generation with vocals



### Data Flow

```
User Input (GitHub URL)
    ↓
Dust.tt AI Agent
    ├─ Analyzes repository structure
    ├─ Examines code patterns
    └─ Generates comprehensive analysis
    ↓
Suno AI
    ├─ Receives analysis as lyrics
    ├─ Generates music with vocals
    └─ Returns audio URL
    ↓
Supabase
    ├─ Stores song metadata
    ├─ Saves audio & lyrics to storage
    └─ Tracks upvotes
    ↓
Leaderboard (Real-time updates!)
```

### Key Components

- **Polling System**: Manages async music generation (checks status every 5s)
- **Rate Limiting**: Cookie-based voting limits (300/hour)
- **Real-time Updates**: Ranking animations on upvote changes
- **Smart Truncation**: Summarizes long analyses for Suno's character limit

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- API keys for: Supabase, Dust.tt, Suno AI, Groq

### Installation

```bash
# Clone the repo
git clone https://github.com/Nsuccess/gitbeat.git
cd gitbeat/frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your API keys to .env.local

# Run database migrations
# Go to Supabase dashboard → SQL Editor
# Run the contents of supabase-schema.sql

# Start the dev server
npm run dev
```

Open https://gitbeat.zeabur.app/ and start generating beats! 🎵

### Environment Variables

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_publishable_key
SUPABASE_SERVICE_ROLE_KEY=your_secret_key

# AI Services
DUST_API_KEY=your_dust_api_key
DUST_WORKSPACE_ID=your_workspace_id
SUNO_API_TOKEN=your_suno_token
GROQ_API_KEY=your_groq_api_key
```

## 🎮 How to Use

### Generate a Beat

1. Go to the **"Beats"** tab
2. Paste any GitHub repo URL (e.g., `https://github.com/facebook/react`)
3. Click **"Analyze & Generate Beat"**
4. Wait ~2 minutes while AI works its magic:
   - 🔍 Dust.tt analyzes the repository
   - 🎵 Suno AI generates custom music
   - 📝 Lyrics are created from the analysis
5. Your beat appears on the leaderboard - hit play! 🎧

### Analyze Contributors

1. Switch to **"Repository Analysis"** tab
2. Enter a GitHub repo URL
3. Choose your vibe:
   - **Professional**: Serious insights and metrics
   - **Fun**: Hilarious roasts and savage commentary 😂
4. Get instant results in 2-3 seconds (thanks Groq!)

### Vote & Discover

- Browse the leaderboard to hear other repos' beats
- Upvote your favorites (300 votes/hour limit)
- Watch real-time ranking changes
- Click "View Lyrics" to see the full AI analysis

## 🎯 API Endpoints

### Music Generation
- `POST /api/suno/generate` - Generate music from analysis
- `GET /api/suno/status/[taskId]` - Check generation progress
- `POST /api/suno/callback` - Webhook for completion

### Repository Analysis
- `POST /api/dust/conversation` - Deep repo analysis (Dust.tt)
- `POST /api/analyze-contributors` - Contributor insights (Groq)

### Songs & Voting
- `GET /api/songs` - Fetch all songs with upvote counts
- `POST /api/songs/ai-generated` - Save generated song
- `POST /api/songs/[id]/upvote` - Upvote a song (rate limited)

## 📁 Project Structure

```
frontend/
├── app/
│   ├── api/              # API routes (Next.js)
│   │   ├── dust/         # Dust.tt integration
│   │   ├── suno/         # Suno AI integration
│   │   ├── songs/        # Database operations
│   │   └── analyze-contributors/  # Groq integration
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── BeatsAnalysis.tsx
│   ├── Leaderboard.tsx
│   ├── RepositoryAnalysis.tsx
│   └── SongCard.tsx
├── lib/
│   ├── hooks/            # Custom React hooks
│   │   └── useSunoPolling.ts
│   ├── supabase.ts       # Database client
│   └── github-analysis.ts
└── public/               # Static assets
```

## 🤝 Contributing

We love contributions! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 💻 Make your changes
4. ✅ Test thoroughly
5. 📝 Commit (`git commit -m 'Add amazing feature'`)
6. 🚀 Push (`git push origin feature/amazing-feature`)
7. 🎉 Open a Pull Request

**Ideas for contributions:**
- 🎨 UI/UX improvements
- 🎵 New music generation features
- 📊 Additional analysis metrics
- 🐛 Bug fixes
- 📖 Documentation improvements

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Zeabur** for hosting and the amazing hackathon
- **Dust.tt** for powerful repository analysis
- **Groq** for lightning-fast LLM inference
- **Suno AI** for incredible music generation
- **Supabase** for seamless database & storage
- All the amazing open-source projects that made this possible!

## 📞 Contact & Links

- 🌐 **Live Demo**: [gitbeat.zeabur.app](https://gitbeat.zeabur.app)
- 🐙 **GitHub**: [@Nsuccess](https://github.com/Nsuccess)
- 🏆 **Hackathon**: [Zeabur Ship It 2026](https://zeabur.com/hackathon)

---

<div align="center">

**Made with ❤️ and AI for the Zeabur Ship It Hackathon 2026**

⭐ **Star this repo if you love it!** ⭐

[Report Bug](https://github.com/Nsuccess/gitbeat/issues) · [Request Feature](https://github.com/Nsuccess/gitbeat/issues)

</div>
