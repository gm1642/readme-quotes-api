// api/quote.js

// api/quote.js

export default function handler(req, res) {
  const quotes = [
    "Turns out the timeout wasn't a bug — it was a missing pull-up resistor and my ego.",
    "It's not a memory leak. It's an unscheduled hardware reset feature.",
    "Edge AI: Where your neural network has to survive on 256KB of RAM.",
    "Step 1: add a 100nF decoupling cap. Step 2: pray. Step 3: there is no step 3.",
    "If it compiles on the first try, you definitely flashed the wrong board.",
    "90% of embedded engineering is just blaming the I2C bus.",
    "Yes, I have a favorite ground pin. No, I will not be taking questions.",
    "My code doesn't have bugs, it has undocumented hardware-software collaboration.",
    "Sensor fusion: where two unreliable sensors team up to produce one confidently wrong answer.",
    "Power optimization is just removing things until the battery stops apologizing.",
    "The bootloader worked on Tuesday. It is no longer Tuesday.",
    "I've debugged enough race conditions to know the race condition always wins.",
    "'It works on my breadboard' — final words of every embedded engineer, ever.",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Create an SVG image string
  // Note: We use standard <text> elements because GitHub's image proxy blocks complex HTML/foreignObjects
  const svg = `
  <svg width="700" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#0d1117" rx="8" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#c9d1d9" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-style="italic">
      "${randomQuote}"
    </text>
  </svg>
  `;

  // CRITICAL: Tell GitHub this is an image, and absolutely forbid caching
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0, s-maxage=0');

  // Send the image
  res.status(200).send(svg);
}

// git add . git commit -m "Describe what you changed here"  git push origin main  