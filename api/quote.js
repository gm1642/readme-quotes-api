// api/quote.js

export default function handler(req, res) {
  const quotes = [
    "Oh, that timeout is due to missing pullup resistors gosh!",
    "It’s not a memory leak, it’s a surprise hardware reset feature.",
    "Edge AI: Where your neural network has to survive on 256KB of RAM.",
    "Just add a 100nF decoupling capacitor and hope for the best.",
    "If it compiles on the first try, you definitely flashed the wrong board.",
    "90% of embedded engineering is just blaming the I2C bus.",
    "Yes, I do have a favorite ground pin."
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Create an SVG image string
  // Note: We use standard <text> elements because GitHub's image proxy blocks complex HTML/foreignObjects
  const svg = `
  <svg width="700" height="120" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#0d1117" rx="8" />
    <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" fill="#c9d1d9" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-style="italic">
      "${randomQuote}"
    </text>
    <text x="50%" y="75%" dominant-baseline="middle" text-anchor="middle" fill="#58a6ff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="12">
      — Daily Embedded Wisdom
    </text>
  </svg>
  `;

  // CRITICAL: Tell GitHub this is an image, and absolutely forbid caching
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0, s-maxage=0');

  // Send the image
  res.status(200).send(svg);
}