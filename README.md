# QuizMe! 🎯

A sleek, timed quiz app with 30 questions across five knowledge domains, built entirely on a smartphone using HTML, CSS, and JavaScript.

![QuizMe!](https://img.shields.io/badge/App-QuizMe!%20-ff69b4?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

## 🖼️ Screenshots
![image](https://github.com/user-attachments/assets/faa8a500-e35e-4d30-b98f-16cb52a41cf4)

## 🌟 Why I Built This

Late one night, armed with my Realme C15 and a burst of inspiration, I set out to create something fun and educational. I’ve always loved quizzes—they’re a great way to test knowledge and learn something new. As a budding developer, I wanted to challenge myself to build a fully functional web app on my phone, proving that big ideas don’t need a big screen. My goal? A fast-paced, mobile-friendly quiz that feels professional, looks great, and keeps you hooked without needing extra taps or waiting around.

Using **Acode**, a powerful Android code editor, I crafted every line of this app on my 720x1600 screen. It wasn’t always easy—thumb-typing JavaScript and debugging CSS animations on a 6-inch display tested my patience—but it taught me to write clean, efficient code and prioritize user experience. This project is my proof that creativity thrives under constraints, and I’m excited to share it!

## ✨ Features

### 🎮 Engaging Gameplay
- **30 Diverse Questions** spanning Geography, Science, History, Literature, and Nature.
- **10-Second Timer** with a visual countdown for each question.
- **Auto-Advance**: Answer right or wrong, see feedback for 1.5 seconds, and move to the next question automatically.
- **Timer Penalty**: Run out of time? It’s marked wrong, and you move on without seeing the correct answer, keeping the challenge fair.
- **No Manual Taps**: Seamless flow—no need to tap “Next” after answering.

### 🎨 Stunning Design
- **Pastel Aesthetics**: A soothing color palette that’s easy on the eyes.
- **Smooth Animations**: Slide-ins, pulses, and shakes enhance the experience.
- **Floating Particles**: Subtle ambient effects add charm.
- **Mobile-Optimized**: Responsive design shines on all devices, especially phones.

### 📊 Detailed Results
- **Score Breakdown**: See correct, incorrect, and percentage stats.
- **Personalized Feedback**: Motivational messages based on your performance.
- **Progress Tracking**: Monitor improvement with each attempt.

### ♿ Accessibility
- **Keyboard Navigation**: Use keys 1-4 to select answers.
- **Focus Indicators**: Clear outlines for touch and keyboard users.
- **Semantic HTML**: Structured for accessibility (screen reader support not fully tested).

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge).
- No server needed—runs locally in the browser.

### Installation
1. Clone or download the project files.
2. Place `index.html`, `styles.css`, and `script.js` in a folder.
3. Open `index.html` in your browser.
4. Start quizzing!

```bash
git clone https://github.com/jstnpbl/interactive-quiz-app.git
cd interactive-quiz-app
# Open in browser
open index.html
```

## 🎯 How to Play
1. **Start**: Click “Begin Challenge” on the welcome screen.
2. **Answer**: Pick one of four options within 10 seconds.
3. **Feedback**: See if you’re right (green) or wrong (red) for 1.5 seconds.
4. **Auto-Move**: The quiz advances to the next question or results screen.
5. **Time’s Up**: If you don’t answer, it’s marked wrong, and you move on instantly.
6. **Results**: Review your score, stats, and a motivational message.
7. **Replay**: Try again to beat your score!

## 🏗️ Technical Details

### Built With
- **HTML5**: Semantic structure for clarity and accessibility.
- **CSS3**: Gradient backgrounds, animations, and responsive layouts.
- **Vanilla JavaScript**: No dependencies, pure JS for logic.

### Key Features
- **Separated Files**: `index.html` (structure), `styles.css` (styling), `script.js` (logic) for maintainability.
- **Auto-Advance Logic**: Moves to the next question after 1.5 seconds of feedback.
- **Timer Management**: Precise 10-second countdown, with unanswered questions marked wrong.
- **Responsive Grid**: Adapts to any screen, tested on Realme C15 (720x1600).
- **Event-Driven**: Click and keyboard events for seamless interaction.

### File Structure
```
quiz-master-pro/
│
├── index.html      # HTML structure
├── styles.css      # CSS styling and animations
├── script.js       # JavaScript logic and quiz data
├── README.md       # This documentation
└── LICENSE         # MIT License
```

## 🎨 Design Choices

### Colors
- **Pastel Palette**: Soft purples, pinks, and blues reduce eye strain and create a calm vibe.
- **Gradients**: Used in buttons, headers, and backgrounds for a modern look.
- **Contrast**: Ensured readability on mobile screens.

### Animations
- **Feedback**: Bounce for correct answers, shake for incorrect.
- **Transitions**: Slide-ins for questions and answers keep it dynamic.
- **Ambient**: Floating particles and background shifts add subtle flair.

## 📱 Mobile-First Journey

Built entirely on my Realme C15 using Acode, this app was shaped by mobile constraints:
- **Touch-Friendly**: Large buttons and tap targets for easy interaction.
- **Optimized**: Lightweight code for fast loading on mobile networks.
- **Tested on Device**: Iteratively debugged using Chrome DevTools and cache clearing.
- **Challenges**: Small screen, thumb-typing, and battery drain pushed me to simplify and optimize.
- **Wins**: Mobile-first mindset ensured a smooth experience on phones and beyond.

## 🧠 Educational Value

### Categories
- **Geography** (6 questions): Capitals, continents, rivers.
- **Science** (6 questions): Planets, chemistry, biology.
- **History** (6 questions): Wars, explorers, art.
- **Literature & Arts** (6 questions): Books, music, paintings.
- **Nature & Animals** (6 questions): Wildlife, ecosystems.

### Benefits
- **Quick Recall**: Timed questions sharpen memory.
- **Broad Knowledge**: Covers diverse topics for well-rounded learning.
- **Feedback Loop**: Instant correct/incorrect feedback aids retention.

## 🔧 Customization

### Add Questions
Edit the `quizData` array in `script.js`:
```javascript
{
    question: "New question?",
    options: ["A", "B", "C", "D"],
    correct: 2 // 0-based index of correct answer
}
```

### Change Timer
Adjust `timeLeft` in `script.js`:
```javascript
let timeLeft = 10; // Set to desired seconds
```

### Tweak Colors
Modify CSS in `styles.css`:
```css
.quiz-header {
    background: linear-gradient(135deg, #aa96da, #fcbad3);
}
```

## 🤝 Contributing

This is a personal project, but I’m open to ideas! To contribute:
1. Fork or download the code.
2. Make changes locally.
3. Share feedback or suggestions via [your contact method, e.g., email or GitHub].

### Ideas
- Add new question categories.
- Implement sound effects.
- Create a question randomizer.

## 📊 Browser Support
| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 60+     | ✅ Full |
| Firefox | 55+     | ✅ Full |
| Safari  | 12+     | ✅ Full |
| Edge    | 79+     | ✅ Full |

## 🐛 Known Issues
- Rare timer skips on low-end devices.
- Animations may lag on older phones.
- Accessibility (e.g., screen readers) needs further testing.

## 🔮 Future Plans
- Expand question bank.
- Add favicon
- Enable offline mode (PWA).
- Include sound effects for feedback.

## 📞 Support
Questions or issues? Reach out:
- **Email**: justinpabale896@gmail.com
- **GitHub**: jstnpbl

## 🙏 Acknowledgments
- **Acode**: For an awesome mobile coding experience.
- **My Realme C15**: For surviving late-night coding sessions.

## 📝 Notes
- **Lesson Learned**: Mobile coding tests your patience and focus.
- **Tip**: Clear browser cache often when testing on mobile.
- **Proud Moment**: Getting auto-advance to feel just right after multiple tweaks.

---

**Built with ❤️ on a Realme C15 using Acode**

*Proof that a phone, an editor, and a late-night idea can create something cool.*
```
