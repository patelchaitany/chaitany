export const personal = {
  name: "Chaitany Patel",
  role: "SWE Intern | ML & Software Engineer",
  tagline: "Building intelligent ML systems with measurable outcomes",
  email: "patelchaitany93@gmail.com",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/patelchaitany",
  githubHandle: "patelchaitany",
  linkedin: "https://www.linkedin.com/in/chaitany-patel-7936aa252/",
  linkedinHandle: "chaitany-patel",
  avatar: "https://avatars.githubusercontent.com/patelchaitany",
  college: "IIIT Vadodara",
  degree: "B.Tech Computer Science",
  gradYear: "2026",
  status: "Open to Opportunities",
  currentWork: "ML, NLP, Computer Vision, XAI, RAG",
};

export const aboutText = [
  "I'm a Computer Science student at IIIT Vadodara, passionate about Machine Learning, Deep Learning, NLP, and Computer Vision. I enjoy exploring how AI models can be made interpretable, scalable, and impactful across real-world applications.",
  "My technical strengths include Python, PyTorch, TensorFlow, FastAPI, Docker, and Linux, along with a strong foundation in data preprocessing, model deployment, and distributed systems. I'm also active in open-source collaboration and competitive programming.",
  "I've built neural network libraries from scratch in C++ for embedded devices, trained vision transformers for low-resource translation, achieved 1194x GPU speedups with custom CUDA kernels, and contributed to major open-source projects like Feast, sktime/skpro, and Cognee.",
];

export const whatIDo = [
  {
    icon: "🧠",
    color: "orange",
    title: "Machine Learning & AI",
    desc: "CNN interpretability, vision transformers, NLP, generative AI, XAI, and probabilistic ML.",
  },
  {
    icon: "👁",
    color: "green",
    title: "Computer Vision",
    desc: "CUDA-accelerated image processing with 1194x speedups, deepfake detection, and feature extraction.",
  },
  {
    icon: "⚡",
    color: "blue",
    title: "High-Performance C++",
    desc: "Neural network libraries (TensorGrad, MicroTensor), auto-differentiation, embedded ML on ESP32.",
  },
  {
    icon: "🔧",
    color: "yellow",
    title: "Backend Engineering",
    desc: "FastAPI, Docker, CI/CD pipelines, REST APIs, and scalable backend design.",
  },
  {
    icon: "🌐",
    color: "teal",
    title: "Open Source",
    desc: "33+ PRs across feast-dev/feast, sktime/skpro, cognee, and more.",
  },
  {
    icon: "🔴",
    color: "red",
    title: "MLOps & Feature Stores",
    desc: "MCP server architecture, vector stores, CVE fixes, and Kubernetes operator work.",
  },
];

export const experience = [
  {
    role: "SWE Intern",
    type: "Current",
    period: "2026 — Present",
    content: [
      "Working on an open-source feature store for ML used in production worldwide.",
      "Migrated the MCP server from fastapi_mcp to the MCP Python SDK, eliminating RecursionError on recursive Pydantic schemas and adding LLM-friendly flat tool schemas.",
      "Built OpenAI-compatible vector store search API with typed filters, value_num columns, and 480+ lines of unit/integration tests.",
      "Exposed registry endpoints on the feature server for MCP access, enabling AI agents to introspect feature views, entities, and data sources.",
      "Built DocEmbedder — end-to-end document ingestion pipeline for RAG workflows (merged to main).",
    ],
    technologies: ["Python", "Feast", "MCP", "FastAPI", "Go", "Kubernetes", "Docker"],
    prs: [
      { title: "Migrate MCP server to MCP Python SDK", url: "https://github.com/feast-dev/feast/pull/6258", status: "open" },
      { title: "OpenAI-compatible vector store API", url: "https://github.com/feast-dev/feast/pull/6121", status: "open" },
      { title: "Expose registry endpoints for MCP", url: "https://github.com/feast-dev/feast/pull/6304", status: "open" },
      { title: "DocEmbedder documentation", url: "https://github.com/feast-dev/feast/pull/6201", status: "merged" },
    ],
  },
  {
    role: "Research Intern",
    type: "Internship",
    period: "Apr 2025 — Jun 2025",
    content: [
      "Implemented Saliency as Schedule (SaS) in TorchRay, improving CNN interpretability by ~20% vs Grad-CAM and Integrated Gradients.",
      "Extended SaS to RoBERTa, enabling token-level saliency for sentiment analysis.",
      "Conducted CNN channel-level analysis, achieving >90% IoU alignment to support interpretability-driven pruning.",
      "Optimized GPU workflows (RTX 3090) and streamlined collaborative debugging using Linux tools (tmux, SSH).",
    ],
    technologies: ["Model Interpretability", "Saliency Maps", "CNN", "RoBERTa", "XAI", "GPU Optimization"],
    prs: [],
  },
  {
    role: "Back End Developer",
    type: "Internship",
    period: "Jul 2025 — Aug 2025",
    content: [
      "Built and integrated backend APIs using Python + FastAPI, resolving cross-platform data inconsistencies.",
      "Refactored CI/CD workflows with GitHub Actions and containerized services with Docker for reliable deployments.",
      "Developed a native Android-based scraping system to automate device actions and distribute workloads — increased reliability by 50%.",
    ],
    technologies: ["FastAPI", "Python", "REST APIs", "CI/CD", "Docker", "GitHub Actions", "Android", "Web Scraping"],
    prs: [],
  },
  {
    role: "Open-Source Contributor",
    type: "Open Source",
    period: "Sept 2025 — Present",
    content: [
      "Built a Lexical Chunk Retriever for Cognee, improving semantic retrieval accuracy and speed (merged).",
      "Fixed critical graph query bug in Cognee, improving memory-node retrieval reliability (merged).",
      "Added distribution fitters framework, OnlineBatchMixture regression, and truncated_mean to sktime/skpro.",
      "Extended KernelMixture to support 2D per-instance weights, fixed NGBoostRegressor bug, added Cauchy distribution (all merged to skpro).",
    ],
    technologies: ["Python", "Probabilistic ML", "Semantic Retrieval", "Graph Databases", "scikit-learn"],
    prs: [
      { title: "Distribution fitters framework", url: "https://github.com/sktime/skpro/pull/924", status: "open" },
      { title: "OnlineBatchMixture regression", url: "https://github.com/sktime/skpro/pull/900", status: "open" },
      { title: "truncated_mean for BaseDistribution", url: "https://github.com/sktime/skpro/pull/995", status: "open" },
    ],
  },
];

export const projects = [
  {
    name: "AI Manga Generator Agent",
    year: 2025,
    githubUrl: "https://github.com/patelchaitany/MANGA_GEN",
    description: "Built an AI pipeline generating manga from prompts by combining transformer-based text generation, diffusion models, and 10,000+ style references scraped with Selenium.",
    technologies: ["Python", "LangGraph", "PyTorch", "Hugging Face", "Selenium"],
  },
  {
    name: "BitTorrent Client",
    year: 2025,
    githubUrl: "https://github.com/patelchaitany",
    description: "Lightweight BitTorrent client with tracker discovery (HTTP/UDP), DHT-based peer discovery (BEP 5), peer exchange (PEX), parallel block requests, magnet metadata fetching, and automatic peer replenishment.",
    technologies: ["Python", "Networking", "DHT", "UDP", "BitTorrent Protocol"],
  },
  {
    name: "LOWRESTIT",
    year: 2025,
    githubUrl: "https://github.com/patelchaitany/Guj_eng",
    demoUrl: "https://guj-eng-translator.vercel.app/",
    description: "OCR-free text image translation for Gujarati using a CLIP-based Vision Transformer encoder. Trained on 100k real OCR-English pairs and synthetic datasets, achieving 0.57 BLEU.",
    technologies: ["Python", "CLIP", "Vision Transformer", "Deep Learning"],
  },
  {
    name: "Neural Network on ESP32",
    year: 2025,
    githubUrl: "https://github.com/patelchaitany/MicroTensor",
    description: "Implemented a lightweight neural network in C++ with quantization, weight compression, and reduced depth for ESP32. Deployed audio classification in TensorFlow Lite achieving 90% accuracy on real-time detection of sirens, gunshots, child cries, and door sounds.",
    technologies: ["C++", "TensorFlow Lite", "ESP32", "Embedded ML", "Quantization"],
  },
  {
    name: "GPU-Accelerated CV Library",
    year: 2025,
    description: "CUDA + PyTorch image processing library with shared-memory kernels (Sobel, Blur, RGB2GRAY, Morphology). Achieved up to 1194x speedup over OpenCV CPU on 4096x4096 images.",
    technologies: ["CUDA", "C++", "PyTorch", "HPC"],
  },
  {
    name: "TensorGrad",
    year: 2025,
    githubUrl: "https://github.com/patelchaitany/TensorGrad",
    description: "High-performance C++ tensor library with automatic gradient computation, matrix multiplication, element-wise ops, and activation functions for training neural networks.",
    technologies: ["C++", "Boost", "Auto-Diff", "Neural Networks"],
  },
  {
    name: "SHI — Deepfake Detection",
    year: 2024,
    githubUrl: "https://github.com/patelchaitany/SHI",
    description: "Deep fake detection system combining lip forgery detection and face anomaly analysis for Smart India Hackathon 2024.",
    technologies: ["Python", "TensorFlow", "Computer Vision", "VGG16"],
  },
];

export const openSourcePRs = [
  {
    repo: "feast-dev/feast",
    repoUrl: "https://github.com/feast-dev/feast",
    prs: [
      { number: 6258, title: "Migrate MCP server from fastapi_mcp to MCP Python SDK", url: "https://github.com/feast-dev/feast/pull/6258", status: "open", date: "Apr 2026" },
      { number: 6304, title: "Expose registry endpoints on feature server for MCP access", url: "https://github.com/feast-dev/feast/pull/6304", status: "open", date: "Apr 2026" },
      { number: 6121, title: "Making feast vector store with OpenAI search API compatible", url: "https://github.com/feast-dev/feast/pull/6121", status: "open", date: "Mar 2026" },
      { number: 6201, title: "Add DocEmbedder documentation", url: "https://github.com/feast-dev/feast/pull/6201", status: "merged", date: "Apr 2026" },
      { number: 6098, title: "DocEmbedder — end-to-end doc ingestion for RAG", url: "https://github.com/feast-dev/feast/pull/6098", status: "merged", date: "Mar 2026" },
      { number: 6007, title: "Added Agent skills for AI Agents", url: "https://github.com/feast-dev/feast/pull/6007", status: "merged", date: "Mar 2026" },
    ],
  },
  {
    repo: "sktime/skpro",
    repoUrl: "https://github.com/sktime/skpro",
    prs: [
      { number: 924, title: "Added distribution fitters — framework and first examples", url: "https://github.com/sktime/skpro/pull/924", status: "open", date: "Mar 2026" },
      { number: 900, title: "Add OnlineBatchMixture online regression", url: "https://github.com/sktime/skpro/pull/900", status: "open", date: "Mar 2026" },
      { number: 995, title: "Add truncated_mean interface to BaseDistribution", url: "https://github.com/sktime/skpro/pull/995", status: "open", date: "Mar 2026" },
      { number: 841, title: "Extend KernelMixture to support 2D per-instance weights", url: "https://github.com/sktime/skpro/pull/841", status: "merged", date: "Mar 2026" },
      { number: 789, title: "Fix NGBoostRegressor ignoring user-set natural_gradient", url: "https://github.com/sktime/skpro/pull/789", status: "merged", date: "Mar 2026" },
      { number: 754, title: "Cauchy probability distribution", url: "https://github.com/sktime/skpro/pull/754", status: "merged", date: "Mar 2026" },
    ],
  },
  {
    repo: "topoteretes/cognee",
    repoUrl: "https://github.com/topoteretes/cognee",
    prs: [
      { number: 1392, title: "Lexical chunk retriever", url: "https://github.com/topoteretes/cognee/pull/1392", status: "merged", date: "Sep 2025" },
      { number: 1437, title: "Fix Kuzu adapter graph data output format", url: "https://github.com/topoteretes/cognee/pull/1437", status: "merged", date: "Sep 2025" },
    ],
  },
  {
    repo: "aniketpalu/kubeflow-feast-workshop",
    repoUrl: "https://github.com/aniketpalu/kubeflow-feast-workshop",
    prs: [
      { number: 1, title: "Attendee self-service setup script + fix PVC permissions", url: "https://github.com/aniketpalu/kubeflow-feast-workshop/pull/1", status: "merged", date: "Mar 2026" },
    ],
  },
  {
    repo: "sktime/sktime",
    repoUrl: "https://github.com/sktime/sktime",
    prs: [
      { number: 9418, title: "Minimal episode length smoother for segmentations", url: "https://github.com/sktime/sktime/pull/9418", status: "open", date: "Feb 2026" },
    ],
  },
];

export const skills = {
  languages: ["Python", "C++", "C", "Go", "JavaScript", "SQL", "Bash"],
  frameworks: ["PyTorch", "TensorFlow", "FastAPI", "React", "OpenCV", "LangGraph", "Feast", "MCP SDK"],
  tools: ["Docker", "Kubernetes", "OpenShift", "Git", "Linux", "AWS", "CUDA", "GitHub Actions", "Neovim"],
  subjects: ["Machine Learning", "Deep Learning", "Computer Vision", "MLOps", "Data Structures", "Algorithms", "Operating Systems"],
};

export const education = [
  {
    institution: "Indian Institute of Information Technology, Vadodara",
    degree: "B.Tech in Computer Science",
    period: "2022 — 2026",
    tags: ["Computer Science", "Data Structures", "Algorithms", "Machine Learning"],
  },
];

export const navItems = [
  { label: "About Me", path: "/", icon: "👤" },
  { label: "Experience", path: "/experience", icon: "💼" },
  { label: "Projects", path: "/projects", icon: "📁" },
  { label: "Skills", path: "/skills", icon: "⚡" },
  { label: "Profiles", path: "/coding-profiles", icon: "🏆" },
  { label: "Education", path: "/education", icon: "🎓" },
  { label: "Contact", path: "/contact", icon: "📬" },
];
