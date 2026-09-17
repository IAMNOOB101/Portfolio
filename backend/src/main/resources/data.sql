-- Seed initial portfolio projects (loaded on every fresh startup)
INSERT INTO projects (title, description, tech_stack, live_url, repo_url) VALUES
(
  'Wanderlust',
  'Full-stack Destination Review platform built with React and Node.js backend. Features session-based authentication for secure user sessions and a rich review system with ratings and photos.',
  'React, JavaScript, Node.js, Express, MongoDB, JWT',
  '#',
  'https://github.com/IAMNOOB101/Wanderlust.git'
),
(
  'Interview AI',
  'AI-powered interview preparation platform with real-time NLP feedback. Features JWT-based authentication, role-based authorization, confidence scoring, and live transcript analysis.',
  'React, Python, Django, NLP, Machine Learning, REST APIs',
  '#',
  'https://github.com/IAMNOOB101/Mini-Project.git'
),
(
  'Stock Trading Platform',
  'Full-stack trading platform with real-time market data and analytics. A functional clone of Zerodha Kite featuring live candlestick charts, portfolio tracking, and order placement.',
  'React, JavaScript, Node.js, WebSockets',
  '#',
  '#'
),
(
  'Monopoly',
  'Full-stack digital Monopoly game with real-time multiplayer. Features JWT-based authentication, game state persistence, property management, and live multiplayer sessions via WebSockets.',
  'React, Python, Flask, Tkinter, WebSockets',
  '#',
  '#'
);
