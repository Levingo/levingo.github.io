// ═══════════════════════════════════════════════════════════════
//  OFER LÖWINGER — WEBSITE CONTENT
//  Edit this file to update all text, videos, and contact details.
//  Never edit index.html directly.
// ═══════════════════════════════════════════════════════════════

const CONTENT = {

  site: {
    title: "Ofer Löwinger — Pianist & Violinist",
    logo:  "Ofer Löwinger"
  },

  hero: {
    eyebrow:    "Pianist & Violinist · Berlin",
    name_line1: "Ofer",
    name_line2: "Löwinger",
    tagline:    "Piano & Violin — Solo, Duo & Live Performance",
    description:"Available for restaurants, hotels, events, and accompaniment. Bringing warmth and elegance to every setting — from intimate background music to fully live performance.",
    photo:      "ofer.png",
    photo_alt:  "Ofer Löwinger at the piano",
    location:   "Berlin, Germany",

    // OFER - MOBILE PHOTO: on phones a different (cropped) image is used.
    // Place your cropped portrait as "ofer2.png" in the same folder.
    // It appears as a narrow strip on the RIGHT side of the screen.
    // photo_mobile_opacity: 0.0 = invisible, 1.0 = fully opaque. 0.75 is a good starting point.
    photo_mobile:         "ofer2.png",
    photo_mobile_opacity: "0.75"
  },

  portfolio: {
    section_label: "Portfolio",
    section_title: "Hear the music",

    // OFER - CATEGORIES: each object here becomes one tab.
    // To add a category: copy one block, give it a unique "id", fill in the fields.
    // To remove a category: delete the whole block including its { }.
    categories: [
      {
        id:          "piano-solo",
        tab_label:   "Piano Solo",
        description: "Ambient and background repertoire — classical, romantic music and original arrangements for restaurants, hotels, and private events.",
        gallery_link:"#",

        // OFER - VIDEOS PIANO SOLO:
        // To add a video: fill in the youtube_id (the part after ?v= in the YouTube URL).
        // Example: for https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  youtube_id: "dQw4w9WgXcQ"
        // To add more videos: copy one { } block and paste it after the last one (add a comma before it).
        // To remove a video: delete its { } block.
        // Leave youtube_id as "" to show a "Coming soon" placeholder.
        videos: [
          { youtube_id: "", title: "Piano Solo — Venue Set",    subtitle: "Gallery Performance"    },
          { youtube_id: "1XZL9HUONC0", title: "Chanson",            subtitle: "Background · Romantic music"         },
          { youtube_id: "pjvCj_-Y4Lc", title: "Live at Bahnhof Leisnig",      subtitle: "Background · Romantic music"       }
        ]
      },
      {
        id:          "accompaniment",
        tab_label:   "Piano Accompaniment",
        description: "Available for singers and instrumentalists — rehearsals, recordings, and live performance. Adaptable repertoire across classical, pop, and world music.",
        gallery_link:"#",

        // OFER - VIDEOS ACCOMPANIMENT
        videos: [
          { youtube_id: "k8c5qZ2u2KQ", title: "Piano & Violin Live",          subtitle: "Duo · Live Performance"    },
          { youtube_id: "lq-X5Wqo2Ro", title: "Piano & Trumpet",           subtitle: "Duo · Classical"           },
          { youtube_id: "", title: "Chamber Session",           subtitle: "Ensemble · Live"           }
        ]
      },
      {
        id:          "violin",
        tab_label:   "Violin Live",
        description: "Live violin performance with custom piano playbacks — from intimate street concerts to private events and stages across Berlin.",
        gallery_link:"#",

        // OFER - VIDEOS VIOLIN
        videos: [
          { youtube_id: "", title: "Violin Street Performance", subtitle: "Live · Berlin"             },
          { youtube_id: "", title: "Classical Violin",          subtitle: "Solo · Playback"           },
          { youtube_id: "", title: "Violin & Piano Set",        subtitle: "Live Event"                }
        ]
      }
    ]
  },

  about: {
    // OFER - ABOUT QUOTE: the italic pull-quote shown on the left
    quote: "Music that suits the room — and stays with the people in it.",

    // OFER - BIO: each string is one paragraph. Add or remove paragraphs as needed.
    bio: [
      "I'm <strong>Ofer Löwinger</strong>, a pianist and violinist based in <strong>Berlin</strong>. My work spans solo piano for restaurants and hotels, piano accompaniment for singers and instrumentalists, and live violin performance with custom orchestral playbacks.",
      "With a background rooted in classical training and broadened by folk, world music, and contemporary styles, I bring both technical depth and genuine musicality to every engagement. Whether the setting calls for soft background ambience or a full live act, I adapt to the room and the audience.",
      "Currently performing regularly in Berlin and available for bookings across Germany and Europe — including restaurants, cruise ships, private events, and concert stages."
    ],

    // OFER - TAGS: add or remove skill/style tags as needed
    tags: [
      "Piano Solo",
      "Piano Accompaniment",
      "Violin Live",
      "Classical",
      "Folk Music",
      "Background Music",
      "Available Europe-wide"
    ]
  },

  contact: {
    section_label: "Contact",
    section_title: "Let's work together",
    intro:         "Available for restaurant residencies, cruise ship engagements, private events, and accompaniment sessions. Based in Berlin — open to travel.",

    // OFER - CONTACT DETAILS: fill in your real info below
    email:         "lev240@gmail.com",
    phone_display: "+49 — 171 - 3125921",
    phone_href:    "tel:+491713125921",
    location:      "Berlin, Germany",
    location_sub:  "Available across Europe",

    // OFER - SOCIAL LINKS: replace the url values with your real links
    social: [
      { label: "YouTube",   url: "#" },
      { label: "Instagram", url: "https://www.instagram.com/ofer.loewinger" }
    ]
  },

  footer: {
    copyright: "© 2025 Ofer Löwinger"
  }

};
