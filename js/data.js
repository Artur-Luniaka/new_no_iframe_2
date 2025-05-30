const websiteContent = {
  header: {
    logo: "domain.com",
    navigation: [
      { name: "Mission Briefing", url: "./" },
      { name: "Battle Reports", url: "battle-reports.html" },
      { name: "Combat Briefing", url: "./#combat-briefing" },
      { name: "Call for Backup", url: "call-for-backup.html" },
      { name: "Terms of Engagement", url: "terms-of-engagement.html" },
    ],
  },
  footer: {
    contact: {
      email: "commander@domain.com",
      address: "23 Franklin Street, Melbourne VIC 3000, Australia",
      phone: "+61 3 9016 3122",
    },
    links: [
      { name: "Cookie Terms", url: "data-protocol.html" },
      { name: "Policy Terms", url: "command-rules.html" },
    ],
    copyright: "© 2025 domain.com. All rights reserved.",
  },
  homePage: {
    operationKickoff: {
      title: "Operation Kickoff",
      description:
        "Welcome to the ultimate stick figure combat simulation. Your mission, should you choose to accept it, begins now.",
      features: [
        "Dynamic combat system",
        "Realistic physics engine",
        "Multiple mission types",
        "Progressive difficulty levels",
      ],
    },
    missionIntel: {
      title: "Mission Intel",
      description:
        "Stickman Shooter is an intense combat simulation where precision meets strategy. Navigate through challenging levels, eliminate targets, and complete objectives with style.",
      gameModes: [
        {
          name: "Campaign Mode",
          description:
            "Follow the story of a lone stick figure warrior through 30+ challenging missions",
        },
        {
          name: "Survival Mode",
          description: "Test your skills against endless waves of enemies",
        },
        {
          name: "Challenge Mode",
          description:
            "Complete special missions with unique objectives and restrictions",
        },
      ],
    },
    arsenalBriefing: {
      title: "Arsenal Briefing",
      description:
        "Access a vast arsenal of weapons, customize your loadout, and upgrade your abilities. Each mission requires different tactical approaches and equipment selection.",
      weaponCategories: [
        {
          name: "Primary Weapons",
          items: ["Assault Rifles", "Shotguns", "Sniper Rifles"],
        },
        {
          name: "Secondary Weapons",
          items: ["Pistols", "SMGs", "Melee Weapons"],
        },
        {
          name: "Special Equipment",
          items: ["Grenades", "Tactical Gear", "Support Items"],
        },
      ],
    },
    reconGallery: {
      title: "Recon Gallery",
      images: [
        { url: "images/img-1.png", caption: "Urban Combat Zone" },
        { url: "images/img-2.png", caption: "Desert Operations" },
        { url: "images/img-3.png", caption: "Night Infiltration" },
      ],
    },
    debriefingRoom: {
      title: "Debriefing Room",
      reviews: [
        {
          author: "Agent Smith",
          text: "Best stick figure combat game I've ever played. The physics are incredibly satisfying!",
          rating: 5,
        },
        {
          author: "Commander Jane",
          text: "The variety of weapons and missions keeps me coming back for more.",
          rating: 4,
        },
        {
          author: "Specialist Mike",
          text: "Addictive gameplay with perfect difficulty progression.",
          rating: 5,
        },
      ],
    },
    combatBriefing: {
      title: "Combat Briefing",
      subtitle: "Essential Combat Information",
      sections: [
        {
          title: "Tactical Overview",
          content:
            "Master the art of stick figure warfare through strategic positioning and precise attacks. Use cover effectively and maintain situational awareness.",
        },
        {
          title: "Weapon Systems",
          content:
            "Access a diverse arsenal including assault rifles, shotguns, sniper rifles, and special weapons. Each weapon has unique characteristics and optimal engagement ranges.",
        },
        {
          title: "Combat Zones",
          content:
            "Battle across various environments from urban landscapes to desert terrains. Adapt your tactics based on the battlefield conditions and available cover.",
        },
        {
          title: "Mission Types",
          content:
            "Engage in different mission types including elimination, capture points, and survival scenarios. Each mission requires specific strategies and loadouts.",
        },
      ],
    },
    developmentTeam: {
      title: "Behind the Mission",
      description: "Meet the elite team behind Stickman Shooter",
      team: [
        {
          role: "Lead Developer",
          description:
            "Veteran game developer with 10+ years of combat simulation experience",
        },
        {
          role: "Art Director",
          description:
            "Specialist in stick figure animation and dynamic combat visuals",
        },
        {
          role: "Sound Engineer",
          description: "Expert in creating immersive battlefield atmospheres",
        },
      ],
    },
    faq: {
      title: "Field Manual",
      questions: [
        {
          question: "What are the minimum system requirements?",
          answer:
            "The game runs smoothly on most modern devices with basic graphics capabilities.",
        },
        {
          question: "Is multiplayer available?",
          answer:
            "Multiplayer features are currently in development and will be deployed soon.",
        },
        {
          question: "How often do you release new content?",
          answer:
            "We deploy new missions and weapons monthly, with major updates every quarter.",
        },
        {
          question: "Are there in-game purchases?",
          answer:
            "The game is completely free to play, with optional cosmetic items available.",
        },
      ],
    },
  },
  battleReports: {
    tacticalUpdates: {
      title: "Tactical Updates",
      subtitle: "Latest Intelligence from the Battlefield",
      updates: [
        {
          version: "v2.5.0",
          date: "2025-03-15",
          description:
            "New weapon customization system deployed. Agents can now modify their arsenal with advanced attachments and unique combat modifications.",
        },
        {
          version: "v2.4.2",
          date: "2025-02-28",
          description:
            "Enhanced physics engine implementation. Experience more realistic stick figure combat mechanics and improved hit detection.",
        },
        {
          version: "v2.4.0",
          date: "2025-02-10",
          description:
            "Introducing new mission type: Stealth Operations. Master the art of silent takedowns and covert infiltration.",
        },
      ],
    },
    combatLogs: {
      title: "Combat Logs",
      subtitle: "Field Operations Archive",
      reports: [
        {
          title: "Operation Shadow Strike",
          date: "2025-03-10",
          location: "Urban District Alpha",
          type: "Stealth Mission",
          image: "images/img-4.png",
          description:
            "Elite stick operatives successfully infiltrated enemy stronghold using new stealth mechanics. Zero casualties reported.",
        },
        {
          title: "Desert Storm Protocol",
          date: "2025-03-05",
          location: "Sector Gamma",
          type: "Assault Operation",
          image: "images/img-5.png",
          description:
            "Massive battlefield engagement utilizing the new physics engine. Multiple objectives secured.",
        },
        {
          title: "Cyber Grid Takeover",
          date: "2025-02-25",
          location: "Digital Zone",
          type: "Technical Operation",
          image: "images/img-6.png",
          description:
            "Strategic mission showcasing new hacking mechanics and electronic warfare capabilities.",
        },
        {
          title: "Night Hawk Initiative",
          date: "2025-02-15",
          location: "Mountain Base",
          type: "Recon Mission",
          image: "images/img-7.png",
          description:
            "Successful reconnaissance operation testing advanced night vision equipment and stealth tactics.",
        },
      ],
    },
  },
  contactPage: {
    title: "Call for Backup",
    subtitle: "Join forces with our elite squad",
    form: {
      title: "Send Transmission",
      fields: {
        name: {
          label: "Operative Name",
          placeholder: "Enter your name",
        },
        email: {
          label: "Communication Channel",
          placeholder: "Enter your email",
        },
        message: {
          label: "Mission Details",
          placeholder: "Enter your message",
        },
      },
      submitButton: "Send Transmission",
      successMessage: "Your message has been successfully sent.",
      errorMessage: "Something went wrong. Please try again later.",
    },
    contactInfo: {
      title: "Command Center Location",
      address: {
        label: "Base Location",
        value: "23 Franklin Street, Melbourne VIC 3000, Australia",
      },
      phone: {
        label: "Direct Line",
        value: "+61 3 9016 3122",
      },
      email: {
        label: "Secure Channel",
        value: "commander@domain.com",
      },
    },
    map: {
      title: "Base Coordinates",
      url: "https://www.google.com/maps?q=23+Franklin+Street,+Melbourne+VIC+3000,+Australia&output=embed",
    },
  },
  termsPage: {
    title: "Terms of Engagement",
    subtitle: "Legal Framework and Operational Guidelines",
    sections: [
      {
        title: "Disclaimer",
        content:
          "The information provided in Stickman Shooter ('the Game') is for general entertainment purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the Game or the information, products, services, or related graphics contained in the Game for any purpose.",
      },
      {
        title: "Acceptance of Terms",
        content:
          "By accessing and playing Stickman Shooter, you acknowledge that you have read, understood, and agree to be bound by these Terms of Engagement. If you do not agree with any part of these terms, you must not use the Game.",
      },
      {
        title: "Intellectual Property",
        content:
          "All intellectual property rights in relation to Stickman Shooter, including but not limited to copyrights, trademarks, trade names, and game content, are owned by or licensed to us. Any unauthorized use, reproduction, modification, distribution, or republication of game materials without our prior written consent is strictly prohibited.",
      },
      {
        title: "Limitation of Liability",
        content:
          "To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of the Game.",
      },
      {
        title: "User Conduct",
        content:
          "You agree to use the Game in accordance with all applicable laws and regulations. You must not engage in any activity that interferes with or disrupts the Game or servers and networks connected to the Game. Any attempt to gain unauthorized access to the Game's systems or networks is strictly prohibited.",
      },
      {
        title: "Modifications to Terms",
        content:
          "We reserve the right to modify or replace these Terms of Engagement at any time without prior notice. Your continued use of the Game after any such changes constitutes your acceptance of the new Terms of Engagement.",
      },
      {
        title: "Governing Law",
        content:
          "These Terms of Engagement shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.",
      },
      {
        title: "Severability",
        content:
          "If any provision of these Terms of Engagement is found to be invalid, illegal, or unenforceable, the remaining provisions shall nevertheless continue in full force and effect.",
      },
    ],
  },
  cookiePolicyPage: {
    title: "Data Protocol",
    subtitle: "Cookie Policy and Data Management",
    sections: [
      {
        title: "What Are Cookies",
        content:
          "Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better gaming experience by remembering your preferences and game progress. These files are completely safe and don't contain any sensitive information.",
      },
      {
        title: "Why We Use Cookies",
        content:
          "We use cookies to enhance your gaming experience in Stickman Shooter. They help us remember your game settings, maintain your session security, analyze game performance, and provide you with personalized content. This allows us to continuously improve our service and deliver a more engaging combat experience.",
      },
      {
        title: "Types of Cookies We Use",
        subsections: [
          {
            title: "Essential Cookies",
            content:
              "These cookies are necessary for the game to function properly. They enable core features like game save states, secure login, and session management. You cannot opt out of these cookies as they are essential for the game's operation.",
          },
          {
            title: "Performance Cookies",
            content:
              "These cookies collect information about how you interact with our game, helping us improve its functionality. They track metrics like loading times, game performance, and feature usage patterns.",
          },
          {
            title: "Functionality Cookies",
            content:
              "These cookies remember your preferences and settings, such as your chosen difficulty level, control configurations, and audio settings, making your gaming experience more personalized.",
          },
          {
            title: "Analytics Cookies",
            content:
              "We use these cookies to understand how players interact with different game features. This helps us make data-driven decisions about game improvements and new features.",
          },
        ],
      },
      {
        title: "Cookie Management",
        content:
          "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your device and set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our game, and some services and functionalities may not work.",
      },
      {
        title: "Browser Settings",
        content:
          "Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The following links provide information on how to modify your cookie settings on the most popular browsers:",
      },
      {
        title: "Updates to This Policy",
        content:
          "We may update our Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to periodically review this page to stay informed about how we are using cookies.",
      },
      {
        title: "Contact Us",
        content:
          "If you have any questions about our use of cookies, please contact us through our Command Center communication channels. Our support team is ready to assist you with any concerns regarding data privacy and cookie management.",
      },
    ],
  },
  privacyPolicyPage: {
    title: "Command Rules",
    subtitle: "Privacy Policy and Data Protection Guidelines",
    sections: [
      {
        title: "Introduction",
        content:
          "At Stickman Shooter, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our game. Please read this policy carefully. If you disagree with its terms, please discontinue using the game immediately.",
      },
      {
        title: "Information We Collect",
        subsections: [
          {
            title: "Game Data",
            content:
              "We collect information about your game progress, including levels completed, scores achieved, and in-game preferences. This helps us provide a seamless gaming experience and save your progress.",
          },
          {
            title: "Device Information",
            content:
              "We automatically collect certain information about your device, including your operating system, device type, and unique device identifiers. This helps us optimize game performance and troubleshoot technical issues.",
          },
          {
            title: "Usage Data",
            content:
              "We gather data about how you interact with our game, including features used, time spent playing, and gameplay patterns. This information helps us improve the game experience and develop new features.",
          },
        ],
      },
      {
        title: "How We Use Your Information",
        subsections: [
          {
            title: "Game Improvement",
            content:
              "We analyze gameplay data to enhance game features, fix bugs, and optimize performance for a better gaming experience.",
          },
          {
            title: "Personalization",
            content:
              "We use your preferences and gameplay history to customize your gaming experience and provide relevant content.",
          },
          {
            title: "Communication",
            content:
              "With your consent, we may send you game updates, news, and promotional materials. You can opt out of these communications at any time.",
          },
        ],
      },
      {
        title: "Data Security",
        content:
          "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.",
      },
      {
        title: "Data Sharing",
        content:
          "We do not sell, trade, or rent your personal information to third parties. We may share anonymous, aggregated data with our partners for game analytics and improvement purposes. Any shared data is stripped of personally identifiable information.",
      },
      {
        title: "Your Rights",
        subsections: [
          {
            title: "Access",
            content:
              "You have the right to access the personal information we hold about you and request a copy of your data.",
          },
          {
            title: "Correction",
            content:
              "You can request corrections to your personal information if it is inaccurate or incomplete.",
          },
          {
            title: "Deletion",
            content:
              "You can request the deletion of your personal information, subject to certain exceptions required by law.",
          },
          {
            title: "Opt-Out",
            content:
              "You can opt out of non-essential data collection and marketing communications at any time.",
          },
        ],
      },
      {
        title: "Children's Privacy",
        content:
          "We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.",
      },
      {
        title: "Changes to This Policy",
        content:
          "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. Continued use of the game after such modifications constitutes your acknowledgment of the modified Privacy Policy.",
      },
      {
        title: "Contact Us",
        content:
          "If you have any questions about this Privacy Policy or our data practices, please contact us through our Command Center communication channels. We will respond to your inquiry as soon as possible.",
      },
    ],
  },
};
