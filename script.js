const giftsContainer = document.getElementById("gifts");
const pathLine = document.getElementById("pathLine");
const snowContainer = document.getElementById("snow");
const winterWorld = document.getElementById("winterWorld");

const giftDialog = document.getElementById("giftDialog");
const dialogDay = document.getElementById("dialogDay");
const dialogTitle = document.getElementById("dialogTitle");
const dialogText = document.getElementById("dialogText");
const closeDialog = document.getElementById("closeDialog");
const dialogOkay = document.getElementById("dialogOkay");

const giftCount = 24;
const giftSpacing = 208;
const firstGiftY = 120;

const positions = [
  50, 73, 32, 89, 30,
  61, 30, 86, 56, 30,
  76, 39, 12, 57, 99,
  75, 37, 83, 40, 64,
  92, 54, 13, 69
];

const giftContent = [
  {
    title: "A Little Joke",
    text: "I know several jokes in sign language. I guarantee nobody has ever heard them."
  },
  {
    title: "A Little Riddle",
    text: "What comes down but never goes up?",
    answer: "Rain."
  },
  {
    title: "A Little Fact",
    text: "The Moon drifts about 1.5 inches farther away from Earth every year. Days were shorter in the past, and in the distant future total solar eclipses will no longer be possible."
  },
  {
    title: "A Little Joke",
    text: "How many bones are in a human hand?",
    answer: "A handful."
  },
  {
    title: "A Little Quiz",
    text: "On average what is more expensive: a Stroopwafel or a Pão de Queijo?",
    answer: "It depends on where you buy them. Fresh and luxury/tourist stroopwafels are generally more expensive. In the supermarket, frozen pão de queijo can cost more per piece than a store-brand stroopwafel. But on average a stroopwafel is more expensive!"
  },
  {
    title: "A Black Story",
    text: "Tom and Bob spent a day with each other. One died because the other made a mistake. The other survived because the first one died."
  },
  {
    title: "A Little Riddle",
    text: "What is full of holes but still holds water?",
    answer: "A sponge."
  },
  {
    title: "A Little Poem",
    text: "My dearest lovely Patootie,\n I’m so glad to be your cutie\n\nTodays date is December 8,\n Our anniversary day of fate\n\nI’m so lucky to have met you,\n Being with you is like a dream come true\n\nI hope we will be together forever,\n Because I don’t want anyone else, ever\n\nThank you for all you do for me,\n Happy eighth to you lovely"
  },
  {
    title: "A Little Joke",
    text: "A big moron and a little moron are sitting on a fence and the big moron falls off. Why didn’t the little guy fall off?",
    answer: "Because he was a little more on."
  },
  {
    title: "Guess the Song",
    text: "Ik houd van glimmende dingen, maar ik zou met je trouwen met ringen van papier\n Uh-huh, precies zo\n Schat, jij bent degene die ik wil, en\n\n Ik haat ongelukjes, behalve toen we van vrienden veranderden in dit\n Uh-huh, precies zo\n Schat, jij bent degene die ik wil\n\n Met ringen van papier, in fotolijstjes, in ondeugende dromen\n Oh, jij bent degene die ik wil"
  },
  {
    title: "A Little Fact",
    text: "Humans replace only about 15% of the air in their lungs with fresh air with each breath. Dolphins can replace about 90%."
  },
  {
    title: "A Little Riddle",
    text: "It has keys, but no locks. It has space, but no room. You can enter, but can’t go inside. What is it?",
    answer: "A keyboard."
  },
  {
    title: "A Black Story",
    text: "He was unaware of having done anything wrong and had only done what his ancestors had done for thousands of years. Yet he was sentenced to death by hanging."
  },
  {
    title: "A Little Fact",
    text: "Searches for terms such as “porn,” “boobs,” “xxx” and “massage parlor” follow a six-month seasonal pattern, with peaks in early summer and around the winter holidays. Dating sites such as eHarmony and Match.com show similar seasonal peaks."
  },
  {
    title: "A Little Joke",
    text: "What kind of bees make milk?",
    answer: "Boo-bees."
  },
  {
    title: "Guess the Song",
    text: "Oh mijn god, oh mijn god, je maakt me gek, oh, als ik je te pakken krijg\n\n Oh, oh, als ik je te pakken krijg, heerlijk, heerlijk, je maakt me gek\n\n Oh, als ik je te pakken krijg, oh, oh, als ik je te pakken krijg"
  },
  {
    title: "A Little Fact",
    text: "The colour red can influence how attractive people are perceived to be. Research has linked it to increased perceived desirability and, in some situations, changes in heart rate."
  },
  {
    title: "A Little Riddle",
    text: "What kind of room has no walls, door or windows?",
    answer: "A mushroom."
  },
  {
    title: "A Little Fact",
    text: "Brazil is nearly 205 times larger than the Netherlands, but has only about 12 times its population."
  },
  {
    title: "A Little Quiz",
    text: "Which country has a place nicknamed the “Venice” of its region, where boats are part of everyday life: the Netherlands or Brazil?",
    answer: "Both! Giethoorn in the Netherlands is often called the “Venice of the North”, while Recife in Brazil is sometimes called the “Brazilian Venice”."
  },
  {
    title: "A Black Story",
    text: "When the light began to flicker, Stefan knew he was too late."
  },
  {
    title: "Guess the Song",
    text: "Ik word nat bij de gedachte aan jou\n Hoe je je als een verantwoordelijke man gedraagt\n En me behandelt zoals het hoort\n Tranen stromen langs mijn dijen"
  },
  {
    title: "A Little Fact",
    text: " 'Stewardesses' is the longest word that is typed with only the left hand.",
  },
  {
    title: "A Black Story",
    text: "In the sauna, a dead man was found with a thermos flask beside him."
  }
];

function closeGiftDialog() {
  if (giftDialog.open) {
    giftDialog.close();
  }
}

function openGiftDialog(day, title, text, answer = null) {
  dialogDay.textContent = `· DAY ${day} · `;
  dialogTitle.textContent = title;
  dialogText.textContent = text;

  dialogOkay.textContent = answer ? "Reveal the answer" : "Close";

  dialogOkay.onclick = () => {
    if (answer && dialogOkay.textContent === "Reveal the answer") {
      dialogText.innerHTML = `${text}<br><br><span class="revealed-answer">Answer: ${answer}</span>`;
      dialogOkay.textContent = "Close";
    } else {
      closeGiftDialog();
    }
  };

  if (!giftDialog.open && typeof giftDialog.showModal === "function") {
    giftDialog.showModal();
  }
}

function createGifts() {
  const points = [];

  for (let i = 0; i < giftCount; i++) {
    const x = positions[i] * 10;
    const y = firstGiftY + i * giftSpacing;
    points.push({ x, y });

    const gift = document.createElement("button");
    gift.type = "button";
    gift.className = i === 0 ? "gift first-gift" : "gift";
    gift.style.left = `${positions[i]}%`;
    gift.style.top = `${y}px`;

    gift.setAttribute(
      "aria-label",
      `Open day ${i + 1}: ${giftContent[i].title}`
    );

    gift.innerHTML = `
      <span class="gift-box" aria-hidden="true">
        <span class="gift-ribbon"></span>
      </span>
      <span class="gift-day">DAY ${i + 1}</span>
      <span class="gift-label">${giftContent[i].title}</span>
    `;

    gift.addEventListener("click", () => {
      const item = giftContent[i];
      openGiftDialog(
        i + 1,
        item.title,
        item.text,
        item.answer || null
      );
    });

    giftsContainer.appendChild(gift);
  }

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1];
    const b = points[i];
    const middle = (a.y + b.y) / 2;

    path += ` C ${a.x} ${middle}, ${b.x} ${middle}, ${b.x} ${b.y}`;
  }

  pathLine.setAttribute("d", path);
}

function createFinalGift() {
  const gift = document.createElement("button");
  gift.type = "button";
  gift.className = "gift final-gift";
  gift.style.left = "42%";
  gift.style.top = `${firstGiftY + 24 * giftSpacing + 60}px`;

  gift.setAttribute("aria-label", "Open day 25: The Final Surprise");

  gift.innerHTML = `
    <span class="gift-box" aria-hidden="true">
      <span class="gift-ribbon"></span>
    </span>
    <span class="gift-day">DAY 25</span>
    <span class="gift-label">The Final Surprise</span>
  `;

  gift.addEventListener("click", () => {
    openGiftDialog(
      25,
      "The Final Surprise",
      "I love you <3"
    );
  });

  giftsContainer.appendChild(gift);
}

function animateSleigh(egg) {
  // Prevent the sleigh from starting another flight mid-animation.
  if (egg.dataset.flying === "true") return;
  egg.dataset.flying = "true";

  const flight = egg.querySelector(".sleigh-flight");
  if (!flight) {
    delete egg.dataset.flying;
    return;
  }

  // Add a trail of little golden stars.
  const sparkles = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );

  sparkles.setAttribute("class", "sleigh-sparkles");
  sparkles.setAttribute("pointer-events", "none");

  const starPositions = [
    [-65, -45], [-125, -100], [-195, -155],
    [-265, -205], [-335, -250], [-405, -285]
  ];

  starPositions.forEach(([x, y], i) => {
    const star = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );

    star.setAttribute("x", x);
    star.setAttribute("y", y);
    star.setAttribute("font-size", i % 2 === 0 ? "19" : "13");
    star.setAttribute("text-anchor", "middle");
    star.setAttribute("fill", "#f7d58c");
    star.textContent = "✦";

    sparkles.appendChild(star);

    star.animate(
      [
        { opacity: 0, transform: "scale(0.4)" },
        { opacity: 1, transform: "scale(1)" },
        { opacity: 0, transform: "scale(0.5)" }
      ],
      {
        duration: 1100,
        delay: i * 180,
        iterations: 2,
        easing: "ease-in-out"
      }
    );
  });

  egg.appendChild(sparkles);

  // Fly away in a smooth arc, then return to the starting point.
   const flightAnimation = flight.animate(
  [
    {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    {
      transform: "translate(-100px, -170px) rotate(-20deg) scale(1.05)",
      offset: 0.16
    },
    {
      transform: "translate(-260px, -260px) rotate(-45deg) scale(1.1)",
      offset: 0.32
    },
    {
      transform: "translate(-420px, -170px) rotate(-90deg) scale(1.12)",
      offset: 0.50
    },
    {
      transform: "translate(-370px, 30px) rotate(-150deg) scale(1.1)",
      offset: 0.68
    },
    {
      transform: "translate(-180px, 100px) rotate(-220deg) scale(1.05)",
      offset: 0.84
    },
    {
      transform: "translate(0px, 0px) rotate(-360deg) scale(1)"
    }
  ],
  {
    duration: 4000,
    easing: "ease-in-out",
    fill: "forwards"
  }
);

  flightAnimation.onfinish = () => {
    flightAnimation.cancel();
    sparkles.remove();
    delete egg.dataset.flying;
  };
}

function animateSnowman(egg) {
  if (egg.dataset.throwing === "true") return;
  egg.dataset.throwing = "true";

  const rect = egg.getBoundingClientRect();

  // Create the snowball.
  const snowball = document.createElement("div");
  snowball.className = "snowman-snowball";
  snowball.style.left = `${rect.left + rect.width / 2}px`;
  snowball.style.top = `${rect.top + rect.height / 2}px`;
  document.body.appendChild(snowball);

  // The snowball flies towards the screen.
  const ballAnimation = snowball.animate(
    [
      {
        transform: "translate(-50%, -50%) scale(0.3)",
        opacity: 0
      },
      {
        transform: "translate(-50%, -50%) scale(1)",
        opacity: 1,
        offset: 0.15
      },
      {
        transform: "translate(-50%, -50%) scale(8)",
        opacity: 1,
        offset: 0.75
      },
      {
  transform: `translate(-50%, -50%) scale(${Math.max(window.innerWidth, window.innerHeight) / 8})`,
  opacity: 1
}
    ],
    {
      duration: 1100,
      easing: "ease-in",
      fill: "forwards"
    }
  );

  ballAnimation.onfinish = () => {
    snowball.remove();

    // A white flash covers the screen.
    const whiteScreen = document.createElement("div");
    whiteScreen.className = "snowman-white-screen";
    document.body.appendChild(whiteScreen);

    
 whiteScreen.animate(
  [
    { opacity: 0 },
    { opacity: 1, offset: 0.0 },
    { opacity: 1, offset: 0.78 },
    { opacity: 0, offset: 1 }
  ],
  {
    duration: 5000,
    easing: "ease-out",
    fill: "forwards"
  }
).onfinish = () => {
  whiteScreen.remove();
  delete egg.dataset.throwing;
};
  };
}


function showLetterEnvelope(mailbox) {
  if (mailbox.dataset.envelopeShown === "true") return;
  mailbox.dataset.envelopeShown = "true";

  const rect = mailbox.getBoundingClientRect();

  const envelope = document.createElement("button");
  envelope.type = "button";
  envelope.className = "christmas-envelope";
  envelope.setAttribute("aria-label", "Open the Christmas letter");

  envelope.style.left = `${rect.left + rect.width / 2}px`;
  envelope.style.top = `${rect.top + rect.height / 2}px`;

  document.body.appendChild(envelope);

  envelope.animate(
    [
      {
        transform: "translate(-50%, 0) scale(0.3)",
        opacity: 0
      },
      {
        transform: "translate(-50%, -100px) scale(1.15)",
        opacity: 1,
        offset: 0.75
      },
      {
        transform: "translate(-50%, -90px) scale(1)",
        opacity: 1
      }
    ],
    {
      duration: 1000,
      easing: "ease-out",
      fill: "forwards"
    }
  );

  envelope.addEventListener("click", () => {
    envelope.remove();
    openPersonalLetter(mailbox);
  });
}


function openPersonalLetter(mailbox) {
  const overlay = document.createElement("div");
  overlay.className = "letter-overlay";

  const paper = document.createElement("div");
  paper.className = "letter-paper";

  const heading = document.createElement("h2");
  heading.textContent = "A Little Letter for You";

  const message = document.createElement("p");

  // WRITE YOUR PERSONAL MESSAGE BETWEEN THESE QUOTES:
  message.textContent = "Dear Juan,\n\n Thank you for everything that you do for me. I'm so grateful to have spent this year with you. I wish you a Merry Christmas and the happiest and healhtiest 2027!\n\n Love,\n Carmen";

  const closeButton = document.createElement("button");
  closeButton.className = "letter-close";
  closeButton.textContent = "Close";

  closeButton.addEventListener("click", () => {
    overlay.remove();
    delete mailbox.dataset.envelopeShown;
  });

  paper.appendChild(heading);
  paper.appendChild(message);
  paper.appendChild(closeButton);
  overlay.appendChild(paper);
  document.body.appendChild(overlay);

  paper.animate(
    [
      { opacity: 0, transform: "translateY(35px) scale(0.8)" },
      { opacity: 1, transform: "translateY(0) scale(1)" }
    ],
    {
      duration: 550,
      easing: "ease-out",
      fill: "forwards"
    }
  );
}


function showHotChocolate(egg) {
  if (egg.dataset.cupShown === "true") return;
  egg.dataset.cupShown = "true";

  const cup = document.createElement("div");
  cup.className = "hot-chocolate-cup";
  cup.innerHTML = `
    <div class="chocolate-steam steam-one"></div>
    <div class="chocolate-steam steam-two"></div>
    <div class="cup-handle"></div>
    <div class="cup-body">
      <div class="chocolate-liquid"></div>
      <div class="cup-marshmallow"></div>
      <div class="cup-marshmallow second"></div>
    </div>
    <div class="cup-base"></div>
  `;

  document.body.appendChild(cup);

  
    cup.animate(
  [
    { opacity: 0, transform: "translate(-50%, 30px) scale(0.8)" },
    { opacity: 1, transform: "translate(-50%, -100px) scale(1.8)", offset: 0.75 },
    { opacity: 1, transform: "translate(-50%, -90px) scale(1.8)" }
  ],
    {
      duration: 700,
      easing: "ease-out",
      fill: "forwards"
    }
  );

  let emptied = false;

  cup.addEventListener("click", () => {
    if (!emptied) {
      emptied = true;
      cup.classList.add("cup-empty");
    } else {
      cup.animate(
        [
          { opacity: 1, transform: "translate(-50%, 0) scale(1)" },
          { opacity: 0, transform: "translate(-50%, 25px) scale(0.7)" }
        ],
        {
          duration: 450,
          easing: "ease-in",
          fill: "forwards"
        }
      ).onfinish = () => {
        cup.remove();
        delete egg.dataset.cupShown;
      };
    }
  });
}


function showHiddenGift(egg) {
  if (egg.dataset.giftShown === "true") return;
  egg.dataset.giftShown = "true";

  const gift = document.createElement("button");
  gift.type = "button";
  gift.className = "hidden-gift-box";
  gift.setAttribute("aria-label", "Open the hidden gift");

  gift.innerHTML = `
  <span class="gift-box hidden-gift-design" aria-hidden="true">
    <span class="gift-ribbon"></span>
  </span>
`;

  document.body.appendChild(gift);

  gift.animate(
    [
      { opacity: 0, transform: "translate(-50%, 30px) scale(0.5)" },
      { opacity: 1, transform: "translate(-50%, -10px) scale(1.1)", offset: 0.75 },
      { opacity: 1, transform: "translate(-50%, 0) scale(1)" }
    ],
    {
      duration: 800,
      easing: "ease-out",
      fill: "forwards"
    }
  );

  gift.addEventListener("click", () => {
    gift.remove();
    openHiddenGiftImage(egg);
  });
}


function openHiddenGiftImage(egg) {
  const overlay = document.createElement("div");
  overlay.className = "hidden-gift-overlay";

  const imageFrame = document.createElement("div");
  imageFrame.className = "hidden-gift-image-frame";

  const image = document.createElement("img");

  // We add your actual image here later.
  image.src = "Afbeelding.png";
  image.alt = "A special Christmas surprise";

  const closeButton = document.createElement("button");
  closeButton.className = "hidden-gift-close";
  closeButton.textContent = "Close";

  closeButton.addEventListener("click", () => {
    overlay.remove();
    delete egg.dataset.giftShown;
  });

  imageFrame.appendChild(image);
  imageFrame.appendChild(closeButton);
  overlay.appendChild(imageFrame);
  document.body.appendChild(overlay);

  imageFrame.animate(
    [
      { opacity: 0, transform: "scale(0.8) translateY(20px)" },
      { opacity: 1, transform: "scale(1) translateY(0)" }
    ],
    {
      duration: 500,
      easing: "ease-out",
      fill: "forwards"
    }
  );
}


function enableChristmasEasterEggs() {
  document.addEventListener("click", (event) => {
    if (event.target.closest(".gift")) return;
    if (giftDialog.open) return;

    const eggs = winterWorld.querySelectorAll(".easter-egg");

    for (const egg of eggs) {
      const rect = egg.getBoundingClientRect();

      const clickedOnEgg =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (clickedOnEgg) {

        if (egg.dataset.title === "A Hidden Gift") {
          showHiddenGift(egg);
          return;
        }

        if (egg.dataset.title === "A Little Warmth") {
          showHotChocolate(egg);
          return;
        }

        if (egg.dataset.title === "A Letter Just for You") {
          showLetterEnvelope(egg);
          return;
        }

        // The snowman throws a snowball at the screen.
        if (egg.dataset.title === "A Snowy Little Secret") {
          animateSnowman(egg);
          return;
        }

          if (clickedOnEgg) {

        // The sleigh flies away and returns without opening a popup.
        if (egg.dataset.title === "A Magical Ride") {
          animateSleigh(egg);
          return;
        }

        // Santa plays his own sound.
        if (egg.dataset.title === "A Message from Santa") {
          const santaSound = new Audio("santa-ho-ho-ho.mp3");
          santaSound.volume = 1;
          santaSound.play();
          return;
        }

        // All other Easter eggs keep their normal surprise.
        dialogDay.textContent = "✨ A SECRET SURPRISE";
        dialogTitle.textContent = egg.dataset.title;
        dialogText.textContent = egg.dataset.message;
        dialogOkay.textContent = "Close";
        dialogOkay.onclick = closeGiftDialog;
        giftDialog.showModal();

        return;
      }

        // All other Easter eggs keep their normal surprise.
        dialogDay.textContent = "✨ A SECRET SURPRISE";
        dialogTitle.textContent = egg.dataset.title;
        dialogText.textContent = egg.dataset.message;
        dialogOkay.textContent = "Close";
        dialogOkay.onclick = closeGiftDialog;
        giftDialog.showModal();

        return;
      }
    }
  });
}

function openChristmasSurprise(event) {
  const egg = event.currentTarget;

  dialogDay.textContent = "✨ A SECRET SURPRISE";
  dialogTitle.textContent = egg.dataset.title;
  dialogText.textContent = egg.dataset.message;
  dialogOkay.textContent = "Close";
  dialogOkay.onclick = closeGiftDialog;

  if (!giftDialog.open) {
    giftDialog.showModal();
  }
}

/* SVG helpers: all scenery is drawn with code, not photos. */

function tree(x, y, scale, variant = 0) {
const colors = [
  ["#173c32", "#285644", "#3d7056"],
  ["#1d4037", "#315b49", "#47785b"],
  ["#23483b", "#37674e", "#548363"]
][variant % 3];


  return `
    <g transform="translate(${x} ${y}) scale(${scale})">
      <ellipse cx="0" cy="7" rx="46" ry="10"
        fill="#1b2631" opacity=".25"/>

      <path d="M0 -118 L-37 -60 L-20 -60 L-48 -20
        L-27 -20 L-58 24 L58 24 L27 -20 L48 -20
        L20 -60 L37 -60 Z" fill="${colors[0]}"/>

      <path d="M0 -118 L-37 -60 L-20 -60 L-48 -20
        L-27 -20 L-58 24 L0 24 Z"
        fill="${colors[1]}" opacity=".8"/>

      <path d="M0 -96 L-28 -58 L-14 -58 L-39 -23
        L-19 -23 L-45 13 L-18 13 L0 1 Z"
        fill="${colors[2]}" opacity=".45"/>

     

      <path d="M-4 24 L-4 46 L5 46 L5 24"
        fill="#694536"/>

      <path d="M-28 -53 Q0 -32 28 -53
        M-42 -12 Q0 12 42 -12"
        fill="none" stroke="#f7d58c" stroke-width="2.5"
        stroke-linecap="round" stroke-dasharray="2 8"/>

      <circle cx="-17" cy="-48" r="4" fill="#f8c0d6"/>
      <circle cx="15" cy="-35" r="4" fill="#f7d58c"/>
      <circle cx="-30" cy="-4" r="4" fill="#f7d58c"/>
      <circle cx="26" cy="0" r="4" fill="#f8c0d6"/>
      <circle cx="4" cy="-72" r="4" fill="#fff1c8"/>

      <circle cx="-17" cy="-48" r="9" fill="#f8c0d6" opacity=".14"/>
      <circle cx="15" cy="-35" r="9" fill="#f7d58c" opacity=".18"/>
      <circle cx="-30" cy="-4" r="9" fill="#f7d58c" opacity=".16"/>
      <circle cx="26" cy="0" r="9" fill="#f8c0d6" opacity=".16"/>
    </g>
  `;
}

function cabin(x, y, scale) {
  return `
    <g transform="translate(${x} ${y}) scale(${scale})">
      <ellipse cx="0" cy="48" rx="70" ry="13"
        fill="#17242d" opacity=".25"/>
      <path d="M-58 0 L0 -54 L58 0 V44 H-58 Z"
        fill="#795064" stroke="#fbe2e9" stroke-width="3"/>
      <path d="M-70 2 L0 -64 L70 2 L58 9 L0 -45 L-58 9 Z"
        fill="#fff1f4"/>
      <path d="M-47 5 L0 -39 L47 5"
        fill="none" stroke="#e8b8cd" stroke-width="4"/>
      <rect x="-38" y="9" width="19" height="23" rx="2"
        fill="#ffd88f"/>
      <rect x="20" y="9" width="19" height="23" rx="2"
        fill="#ffd88f"/>
      <path d="M-28 9 V32 M-38 20 H-19 M29 9 V32 M20 20 H39"
        stroke="#a66e7f" stroke-width="2"/>
      <rect x="-8" y="12" width="17" height="32" rx="7"
        fill="#473443"/>
      <path d="M30 -42 V-70 H45 V-28"
        fill="#a77880" stroke="#fff0f4" stroke-width="3"/>
      <circle cx="37" cy="-79" r="7" fill="#fff0c8" opacity=".8"/>
    </g>
  `;
}

function lantern(x, y, scale) {
  return `
    <g transform="translate(${x} ${y}) scale(${scale})">
      <ellipse cx="0" cy="22" rx="28" ry="10"
        fill="#ffd98d" opacity=".25"/>
      <path d="M0 18 V-10" stroke="#513d4a" stroke-width="4"/>
      <path d="M-12 -10 L-9 -29 H9 L12 -10 Z"
        fill="#503a49" stroke="#f8d99d" stroke-width="2"/>
      <rect x="-7" y="-24" width="14" height="12" rx="2"
        fill="#fff0b8"/>
      <path d="M-8 -29 Q0 -40 8 -29"
        fill="none" stroke="#f8d99d" stroke-width="3"/>
      <circle cx="0" cy="-17" r="20" fill="#ffe2a1" opacity=".16"/>
    </g>
  `;
}

function mountain(x, y, width, height, color) {
  return `
    <path d="M${x - width / 2} ${y}
      L${x - width * .25} ${y - height * .66}
      L${x - width * .12} ${y - height * .55}
      L${x} ${y - height}
      L${x + width * .14} ${y - height * .56}
      L${x + width * .27} ${y - height * .7}
      L${x + width / 2} ${y} Z"
      fill="${color}"/>
    <path d="M${x - width * .25} ${y - height * .66}
      L${x - width * .12} ${y - height * .55}
      L${x} ${y - height}
      L${x + width * .14} ${y - height * .56}
      L${x + width * .02} ${y - height * .66}
      L${x - width * .04} ${y - height * .72}
      L${x - width * .12} ${y - height * .6} Z"
      fill="#fff0f4" opacity=".95"/>
  `;
}


function createWinterWorld() {
  let art = `
    <svg viewBox="0 283 1002 6400"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg">

      <defs>
        <linearGradient id="snowGround" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fce5ec"/>
          <stop offset="50%" stop-color="#f8dce8"/>
          <stop offset="100%" stop-color="#efc3d8"/>
        </linearGradient>

        <radialGradient id="pinkMoon">
          <stop offset="0%" stop-color="#fff9f5"/>
          <stop offset="65%" stop-color="#ffd7e5"/>
          <stop offset="100%" stop-color="#f2aac8" stop-opacity="0"/>
        </radialGradient>

        <linearGradient id="frozenLake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f8d6e5" stop-opacity=".9"/>
          <stop offset="100%" stop-color="#a9c5d4" stop-opacity=".2"/>
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="8"/>
        </filter>
      </defs>

      <!-- Pink moon -->
      <circle cx="500" cy="230" r="190" fill="url(#pinkMoon)"/>
      <circle cx="500" cy="230" r="53" fill="#fff0dc"/>
      <circle cx="520" cy="212" r="48" fill="#f5cfdf"/>

      <!-- Snowflakes -->
      <g fill="#fff7f6">
        ${Array.from({ length: 90 }, (_, i) => {
          const x = (i * 173 + 31) % 1000;
          const y = (i * 137 + 60) % 1450;
          const r = 1 + (i % 4);
          return `<circle cx="${x}" cy="${y}" r="${r}" opacity="${.25 + (i % 6) * .1}"/>`;
        }).join("")}
      </g>

      <!-- Soft pink winter clouds -->
      <g fill="#fff0f4" opacity=".28">
        <ellipse cx="160" cy="310" rx="180" ry="40"/>
        <ellipse cx="780" cy="400" rx="230" ry="50"/>
        <ellipse cx="500" cy="540" rx="300" ry="45"/>
      </g>

      <!-- Snowy ground -->
      <path d="M0 1270 Q150 1180 310 1320 T650 1290 T1000 1230
        V6800 H0 Z" fill="url(#snowGround)"/>

      <!-- Wide winding path: soft pink shadow -->
      <path d="M-60 1420
        C280 1530 760 1550 970 1780
        C1080 1920 730 2080 340 2250
        C80 2370 130 2590 450 2710
        C760 2840 940 3020 610 3180
        C280 3350 60 3510 390 3710
        C730 3910 920 4070 580 4260
        C240 4450 100 4620 450 4810
        C770 4980 900 5220 550 5410
        C300 5550 310 5760 500 6050"
        fill="none" stroke="#cda3c6" stroke-width="310"
        stroke-linecap="round" opacity=".65"/>

      <!-- Main snowy path -->
      <path d="M-60 1390
        C280 1500 760 1520 970 1750
        C1080 1890 730 2050 340 2220
        C80 2340 130 2560 450 2680
        C760 2810 940 2990 610 3150
        C280 3320 60 3480 390 3680
        C730 3880 920 4040 580 4230
        C240 4420 100 4590 450 4780
        C770 4950 900 5190 550 5380
        C300 5520 310 5730 500 6020"
        fill="none" stroke="#fff1f6" stroke-width="230"
        stroke-linecap="round" opacity=".95"/>

      <!-- Dotted decorative line along the path: kept! -->
      <path d="M-60 1390
        C280 1500 760 1520 970 1750
        C1080 1890 730 2050 340 2220
        C80 2340 130 2560 450 2680
        C760 2810 940 2990 610 3150
        C280 3320 60 3480 390 3680
        C730 3880 920 4040 580 4230
        C240 4420 100 4590 450 4780
        C770 4950 900 5190 550 5380
        C300 5520 310 5730 500 6020"
        fill="none" stroke="#f7dbe8" stroke-width="7"
        stroke-dasharray="2 30" stroke-linecap="round"/>
  `;

 
  // Evergreen trees: a continuous pink Christmas forest
  // from the very top to the very bottom of the page.
  for (let y = 500; y < 6710; y += 230) {
    const variation = Math.sin(y * 0.035);

    // Large trees along the far left and right edges.
    art += tree(
      25 + variation * 8,
      y,
      1.25,
      Math.floor(y / 190) % 3
    );

    art += tree(
      975 - variation * 8,
      y + 35,
      1.3,
      Math.floor(y / 190 + 1) % 3
    );

    // Smaller trees between the large ones.
    art += tree(
      85 + variation * 8,
      y + 90,
      0.76,
      1
    );

    art += tree(
      915 - variation * 8,
      y + 125,
      0.8,
      2
    );
  }


  // Small houses placed on alternating sides of the path.
  art += cabin(270, 1120, 0.60);
  art += cabin(755, 1460, 0.55);
  art += cabin(210, 2760, 0.50);
  art += cabin(770, 3370, 0.50);
  art += cabin(750, 4430, 0.55);
  art += cabin(190, 5200, 0.55);

  // Santa Claus: red suit, white beard, hat and black boots.
  art += `
   <g class="easter-egg" tabindex="0" role="button"
   aria-label="Secret Santa surprise"
   data-title="A Message from Santa"
   data-message="Ho ho ho! Someone very special made this little Christmas world just for you. ❤️"
   transform="translate(290 1930) scale(1.05)">
      <ellipse cx="0" cy="55" rx="38" ry="8"
        fill="#b985ad" opacity=".22"/>

      <!-- Boots -->
      <path d="M-18 38 L-22 51 L-8 51 L0 40
               M10 40 L17 51 L31 51 L25 36"
        fill="#342d3b" stroke="#342d3b" stroke-width="5"
        stroke-linecap="round" stroke-linejoin="round"/>

      <!-- Suit -->
      <path d="M-23 8 Q-25 -1 -18 -5 L18 -5
               Q26 0 23 10 L19 41
               Q0 48 -19 41 Z"
        fill="#c93451"/>
      <path d="M-20 9 L20 9"
        stroke="#fff4f5" stroke-width="7"/>
      <rect x="-5" y="7" width="10" height="31" rx="2"
        fill="#e8bd68"/>
      <rect x="-20" y="5" width="40" height="6" rx="2"
        fill="#493542"/>

      <!-- Arms and mittens -->
      <path d="M-19 0 Q-35 8 -31 25
               M19 0 Q35 8 31 24"
        fill="none" stroke="#c93451" stroke-width="11"
        stroke-linecap="round"/>
      <circle cx="-31" cy="26" r="7" fill="#f0b59f"/>
      <circle cx="31" cy="25" r="7" fill="#f0b59f"/>
      <path d="M-24 -3 L-15 -7 M15 -7 L24 -3"
        stroke="#fff4f5" stroke-width="7" stroke-linecap="round"/>

      <!-- Face -->
      <circle cx="0" cy="-20" r="22" fill="#f3c0a9"/>
      <circle cx="-8" cy="-22" r="2.3" fill="#443342"/>
      <circle cx="8" cy="-22" r="2.3" fill="#443342"/>
      <circle cx="-14" cy="-13" r="5" fill="#e99caa" opacity=".8"/>
      <circle cx="14" cy="-13" r="5" fill="#e99caa" opacity=".8"/>
      <path d="M-6 -12 Q0 -7 6 -12"
        fill="none" stroke="#9e4c56" stroke-width="2.5"
        stroke-linecap="round"/>

      <!-- White beard -->
      <path d="M-17 -12 Q-27 -9 -22 7
               L-14 15 L-8 11 L0 20 L8 11
               L14 15 L22 7 Q27 -9 17 -12
               Q10 -5 0 -7 Q-10 -5 -17 -12 Z"
        fill="#fff9f4" stroke="#eadce3" stroke-width="1.5"/>

      <!-- Santa hat -->
      <path d="M-22 -29 Q-16 -48 5 -48
               Q15 -48 23 -35 L9 -29 Z"
        fill="#c93451"/>
      <path d="M-22 -31 Q0 -37 24 -31"
        fill="none" stroke="#fff9f4" stroke-width="8"
        stroke-linecap="round"/>
      <circle cx="6" cy="-49" r="6" fill="#fff9f4"/>
    </g>
  `;

    // A little sleigh and reindeer.
  art += `
    <g class="easter-egg sleigh-egg" tabindex="0" role="button"
      aria-label="Secret flying sleigh"
      data-title="A Magical Ride"
      transform="translate(715 2330)">

      <g class="sleigh-flight">
        <ellipse cx="0" cy="43" rx="70" ry="10"
          fill="#b985ad" opacity=".22"/>
        <path d="M-51 8 Q-35 42 16 30 Q37 26 43 9
                 L27 9 Q21 25 -10 24 Q-35 24 -40 8 Z"
          fill="#b52f52"/>
        <path d="M-51 35 Q-18 51 28 37"
          fill="none" stroke="#c18b54" stroke-width="5"
          stroke-linecap="round"/>
        <path d="M-24 7 L-17 -12 L-2 5
                 M-15 -11 L-25 -21 M-15 -11 L-5 -24"
          fill="none" stroke="#98633f" stroke-width="4"
          stroke-linecap="round"/>
        <ellipse cx="-7" cy="0" rx="16" ry="10" fill="#b9825c"/>
        <circle cx="7" cy="-8" r="9" fill="#c99770"/>
        <circle cx="12" cy="-10" r="2" fill="#4b3740"/>
        <circle cx="17" cy="-4" r="3" fill="#c84b58"/>
        <path d="M4 -16 L0 -24 L10 -20" fill="#c99770"/>
        <path d="M-15 7 L-18 21 M-2 8 L1 21 M17 8 L22 19"
          stroke="#98633f" stroke-width="3" stroke-linecap="round"/>
        <path d="M-33 1 Q-48 -5 -51 -15"
          fill="none" stroke="#98633f" stroke-width="3"/>
        <path d="M-32 3 L-22 -7"
          stroke="#f3d9e5" stroke-width="4"/>
        <circle cx="-32" cy="3" r="4" fill="#f1cb75"/>
      </g>
    </g>
  `;

  // Hot chocolate stand, on the left side of the path.
  art += `
    <g class="easter-egg" tabindex="0" role="button"
   aria-label="Secret hot chocolate surprise"
   data-title="A Little Warmth"
   data-message="Imagine us sharing a warm drink together. No snow needed — just you, me, and a cosy moment. ☕"
   transform="translate(220 2940)">
      <ellipse cx="0" cy="57" rx="56" ry="10"
        fill="#b985ad" opacity=".22"/>
      <path d="M-43 0 L-43 48 L43 48 L43 0 Z" fill="#b76b64"/>
      <path d="M-53 0 L0 -31 L53 0 Z" fill="#75465f"/>
      <path d="M-48 -1 L48 -1"
        stroke="#fff0f5" stroke-width="7"/>
      <path d="M-34 8 L-34 47 M0 8 L0 47 M34 8 L34 47"
        stroke="#f5c3d4" stroke-width="4"/>
      <rect x="-17" y="14" width="24" height="20" rx="4"
        fill="#fff0dc"/>
      <path d="M7 18 Q20 15 15 27 Q12 32 7 29"
        fill="none" stroke="#fff0dc" stroke-width="4"/>
      <path d="M-8 9 Q-16 1 -8 -5 M1 9 Q-7 0 1 -8"
        fill="none" stroke="#fff5f5" stroke-width="3"
        stroke-linecap="round"/>
      <circle cx="-33" cy="-7" r="4" fill="#f4d47f"/>
      <circle cx="0" cy="-18" r="4" fill="#f4d47f"/>
      <circle cx="33" cy="-7" r="4" fill="#f4d47f"/>
    </g>
  `;

  // Sack full of colourful presents, on the right side.
  art += `
    <g class="easter-egg" onclick="openChristmasSurprise(evt)" tabindex="0" role="button"
   aria-label="Secret present surprise"
   data-title="A Hidden Gift"
   data-message="Some of the best gifts cannot be wrapped. Like the time we share, the memories we make, and the love between us. 🎁"
   transform="translate(790 3650)">
      <ellipse cx="0" cy="48" rx="47" ry="9"
        fill="#b985ad" opacity=".22"/>
      <path d="M-28 -2 Q-40 13 -31 39
               Q0 59 31 39 Q40 13 28 -2
               Q0 12 -28 -2 Z" fill="#b92f52"/>
      <path d="M-18 0 Q-25 -13 -14 -23
               L7 -15 L21 -27 L34 -9 L22 5"
        fill="#e6b3d1"/>
      <rect x="-28" y="-19" width="19" height="18" rx="3"
        fill="#e9c56e" transform="rotate(-12 -18 -10)"/>
      <path d="M-19 -19 L-19 -1 M-28 -10 L-9 -10"
        stroke="#fff2db" stroke-width="3"/>
      <rect x="2" y="-24" width="23" height="22" rx="3"
        fill="#547b69" transform="rotate(10 13 -13)"/>
      <path d="M13 -24 L13 -2 M2 -13 L25 -13"
        stroke="#fff2db" stroke-width="3"/>
      <path d="M-8 0 Q0 -11 8 0 Q15 -12 22 -4
               Q22 5 8 6 L0 13 L-8 6
               Q-22 5 -22 -4 Q-15 -12 -8 0"
        fill="#fff0f5"/>
    </g>
  `;

  // A cheerful snowman on the left side.
  art += `
    <g class="easter-egg" tabindex="0" role="button"
   aria-label="Secret snowman surprise"
   data-title="A Snowy Little Secret"
   data-message="You found me! I may melt in the Brazilian sunshine, but this little surprise is here to stay. ⛄"
   transform="translate(230 4140)">
      <ellipse cx="0" cy="48" rx="35" ry="8"
        fill="#b985ad" opacity=".22"/>
      <circle cx="0" cy="22" r="22"
        fill="#fff9f8" stroke="#e8c6d8" stroke-width="2"/>
      <circle cx="0" cy="-7" r="15"
        fill="#fff9f8" stroke="#e8c6d8" stroke-width="2"/>
      <circle cx="-5" cy="-10" r="2" fill="#513c50"/>
      <circle cx="5" cy="-10" r="2" fill="#513c50"/>
      <path d="M-3 -3 L11 0 L-3 2 Z" fill="#e89a65"/>
      <path d="M-14 -21 L14 -21 L11 -39 L-10 -39 Z"
        fill="#4c5f70"/>
      <path d="M-17 -22 L17 -22"
        stroke="#b92f52" stroke-width="5" stroke-linecap="round"/>
      <path d="M-20 11 L-33 2 M20 11 L32 0"
        stroke="#98633f" stroke-width="4" stroke-linecap="round"/>
      <circle cx="-5" cy="16" r="2.5" fill="#d7a5c1"/>
      <circle cx="-5" cy="26" r="2.5" fill="#d7a5c1"/>
      <path d="M-10 2 Q0 8 10 2"
        fill="none" stroke="#d7a5c1" stroke-width="5"
        stroke-linecap="round"/>
    </g>
  `;

  // A mailbox for letters to Santa, away from the path.
  art += `
   <g class="easter-egg"  tabindex="0" role="button"
   aria-label="Secret letter surprise"
   data-title="A Letter Just for You"
   data-message="If I could put one thing in this mailbox, it would be a little reminder that you mean the world to me. 💌"
   transform="translate(285 4930)">
      <ellipse cx="0" cy="47" rx="29" ry="7"
        fill="#b985ad" opacity=".22"/>
      <path d="M0 10 L0 45"
        stroke="#98633f" stroke-width="6" stroke-linecap="round"/>
      <rect x="-23" y="-16" width="46" height="32" rx="7"
        fill="#b92f52"/>
      <path d="M-23 -1 L23 -1"
        stroke="#e9b6cb" stroke-width="3"/>
      <path d="M-11 -6 L11 -6"
        stroke="#fff4f6" stroke-width="3" stroke-linecap="round"/>
      <path d="M-7 -24 Q0 -32 7 -24"
        fill="none" stroke="#e9b6cb" stroke-width="3"/>
      <circle cx="15" cy="8" r="3" fill="#f4d47f"/>
    </g>
  `;

    // Random lanterns scattered across the pink snow,
  // avoiding the central winding road.
  const lanternSpots = [
    [115, 1700], [700, 1850],
    [120, 2150], [855, 2400], [120, 2790],
    [820, 2750], [155, 3150], [845, 3200],
    [140, 3750], [900, 3800], [120, 4100],
    [835, 4550], [85, 4790], [890, 4930],
    [120, 5200], [875, 5450], [170, 5750], [840, 6000]
  ];

  lanternSpots.forEach(([x, y], i) => {
    art += lantern(x, y, i % 3 === 0 ? 0.7 : 0.58);
  });

  // Sparkling warm lights among the trees.
  for (let i = 0; i < 180; i++) {
    const x = (i * 193 + 47) % 1000;
    const y = 700 + ((i * 271) % 5550);
    const r = i % 4 === 0 ? 4 : 2;

    art += `
      <circle cx="${x}" cy="${y}" r="${r * 2.8}"
        fill="#ffd98c" opacity=".17"/>
      <circle cx="${x}" cy="${y}" r="${r}"
        fill="${i % 3 === 0 ? "#ffc5dd" : "#ffe7a9"}"
        opacity=".9"/>
    `;
  }


  // Tiny romantic hearts hidden among the Christmas lights.
  const heartSpots = [
    [165, 850], [830, 1250],
    [130, 2000], [870, 2500],
    [175, 3300], [830, 3900],
    [130, 4500], [855, 5100],
    [205, 5650], [790, 6000]
  ];

  heartSpots.forEach(([x, y], i) => {
    const size = i % 3 === 0 ? 17 : 13;
    const color = i % 4 === 0 ? "#f5dba6" : "#f6b8d2";

    art += `
      <g
        transform="translate(${x} ${y})"
        opacity="0.8"
        pointer-events="none"
      >
        <text
          x="0"
          y="0"
          text-anchor="middle"
          font-size="${size}"
          font-family="Georgia, serif"
          fill="${color}"
          stroke="#fff0f6"
          stroke-width="0.5"
        >♥</text>
      </g>
    `;
  });



  art += `</svg>`;
  winterWorld.innerHTML = art;
}



function createSnow() {
  for (let i = 0; i < 180; i++) {
    const flake = document.createElement("span");
    flake.className = "snowflake";

    // A mixture of tiny snowflakes and little sparkling stars
    flake.textContent = i % 4 === 0 ? "✦" : "•";

    flake.style.left = `${Math.random() * 100}%`;
    flake.style.fontSize = `${5 + Math.random() * 10}px`;

    // Different speeds make the snowfall feel more natural
    flake.style.animationDuration = `${12 + Math.random() * 24}s`;
    flake.style.animationDelay = `${-Math.random() * 30}s`;
    flake.style.opacity = `${0.35 + Math.random() * 0.65}`;

    snowContainer.appendChild(flake);
  }
}


function closeGiftDialog() {
  giftDialog.close();
}

closeDialog.addEventListener("click", closeGiftDialog);


giftDialog.addEventListener("click", (event) => {
  if (event.target === giftDialog) {
    closeGiftDialog();
  }
});

createWinterWorld();
console.log("Kerstfiguurtjes gevonden:", document.querySelectorAll(".easter-egg").length);
enableChristmasEasterEggs();
createGifts();
createFinalGift();
createSnow();


const musicButton = document.getElementById("musicToggle");
const christmasMusic = document.getElementById("christmasMusic");

musicButton.addEventListener("click", async () => {
  if (christmasMusic.paused) {
    try {
      await christmasMusic.play();
      musicButton.textContent = "♫ Pause Christmas Music";
      musicButton.setAttribute("aria-pressed", "true");
    } catch (error) {
      musicButton.textContent = "♫ Try Playing Again";
    }
  } else {
    christmasMusic.pause();
    musicButton.textContent = "♫ Play Christmas Music";
    musicButton.setAttribute("aria-pressed", "false");
  }
});

const volumeSlider = document.getElementById("musicVolume");

christmasMusic.volume = 0.2;

volumeSlider.addEventListener("input", () => {
  christmasMusic.volume = volumeSlider.value / 100;
});



/* 💗 A tiny magical trail for the Christmas cursor */
(() => {
  if (
    window.matchMedia("(hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  let lastX = 0;
  let lastY = 0;
  let lastTime = 0;
  let sparkleCount = 0;

  document.addEventListener("mousemove", (event) => {
    const now = performance.now();

    // Keep the trail short and very subtle.
    if (
      now - lastTime < 40 ||
      Math.hypot(event.clientX - lastX, event.clientY - lastY) < 10
    ) {
      return;
    }

    lastX = event.clientX;
    lastY = event.clientY;
    lastTime = now;

    const sparkle = document.createElement("span");
    sparkle.className = "cursor-sparkle";

    // Mostly tiny sparkles, with an occasional little heart.
    sparkle.textContent =
      ++sparkleCount % 9 === 0 ? "♥" : "✦" ;

    sparkle.style.left = `${event.clientX}px`;
    sparkle.style.top = `${event.clientY}px`;

    document.body.appendChild(sparkle);

    // Remove each sparkle quickly to keep the page lightweight.
    window.setTimeout(() => sparkle.remove(), 500);
  });
})();

