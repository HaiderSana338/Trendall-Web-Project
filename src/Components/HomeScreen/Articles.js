import React from 'react';
import{Link} from 'react-router-dom'
import {scrollToTop} from '../../index.js';
import News from './News.js'
const news = [
    {
      id: 1,
      image: "https://media.licdn.com/dms/image/D4E12AQF5Xz_U4ZNo1Q/article-cover_image-shrink_720_1280/0/1660512333896?e=2147483647&v=beta&t=gsr5_AJ-KGQnIafh3ATHLhA-C3CLpuBBc8h-sBZCzTs",
      heading: "Lost Cities Rediscovered: Tales from the Ancient Mediterranean",
      description: 'Delve into the captivating narrative of "Lost Cities Rediscovered: Tales from the Ancient Mediterranean" as it unravels the mysteries veiled by time in the vibrant tapestry of the Mediterranean region. This compelling exploration embarks on a journey through the annals of history, resurrecting ancient civilizations and their enigmatic urban landscapes that have long been obscured beneath layers of antiquity.',
      content: `
        <p>Delve into the captivating narrative of "Lost Cities Rediscovered: Tales from the Ancient Mediterranean" as it unravels the mysteries veiled by time in the vibrant tapestry of the Mediterranean region. This compelling exploration embarks on a journey through the annals of history, resurrecting ancient civilizations and their enigmatic urban landscapes that have long been obscured beneath layers of antiquity. The first part of our journey takes us to the ruins of Alexandria, where the great library once stood as a beacon of knowledge and learning. Here, we uncover the stories of scholars and explorers who sought to understand the world and share their wisdom. As we walk through the ancient streets, we imagine the bustling marketplaces and grand temples that were once the heart of this vibrant city. Alexandria's legacy is not just in its physical remains, but in the ideas and discoveries that continue to influence us today.</p>
  
        <p>The second part of our journey leads us to the sunken city of Atlantis, a place of legend and mystery. According to ancient texts, Atlantis was a powerful and advanced civilization that was lost to the sea in a single day and night of misfortune. Despite the lack of concrete evidence, the story of Atlantis has captivated the imagination of many for centuries. Through underwater archaeology and modern technology, we attempt to piece together the clues left behind by this elusive city. What we discover is a rich tapestry of myths and legends that speak to the human desire for exploration and discovery. The search for Atlantis is not just about finding a lost city, but about understanding the human spirit and its unending quest for knowledge and adventure.</p>
  
        <p>Our final destination is the ancient city of Pompeii, frozen in time by the eruption of Mount Vesuvius in 79 AD. As we explore the well-preserved ruins, we gain insight into the daily lives of the people who lived there. From the opulent villas of the wealthy to the modest homes of the common folk, Pompeii offers a unique glimpse into the past. We see the art, the architecture, and the everyday objects that tell the story of a thriving community abruptly cut off from history. The preservation of Pompeii provides a stark reminder of the power of nature and the fragility of human life. As we reflect on these lost cities, we are reminded of the importance of preserving our history and learning from the past. Each city holds a lesson, a story, and a piece of our collective heritage that continues to inspire and inform us.</p>
      `
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/474x/eb/83/4a/eb834a32d23d8c3e2337b3b293c553ed.jpg',
      heading: "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean",
      description: 'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.',
      content: `
        <p>Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Our journey begins in the heart of Alexandria, where the remnants of the once-great library offer a glimpse into a world of knowledge and enlightenment. As we explore the ruins, we uncover the stories of scholars who dedicated their lives to the pursuit of wisdom. The legacy of Alexandria is not only in its ruins but in the impact it had on the intellectual landscape of the ancient world.</p>
  
        <p>Next, we venture to the fabled city of Atlantis, a place shrouded in mystery and myth. Described by Plato as a powerful and advanced civilization, Atlantis has fascinated historians and explorers for centuries. Despite its elusive nature, the search for Atlantis has led to numerous discoveries and theories about ancient civilizations. Through the use of modern technology and underwater archaeology, we piece together the fragments of this lost city. The story of Atlantis is more than just a tale of a sunken city; it is a reflection of our enduring curiosity and the human drive to uncover the unknown. As we delve deeper into the legend of Atlantis, we uncover insights into the beliefs and values of ancient societies, and the lessons they hold for us today.</p>
  
        <p>Our final stop is the ancient city of Pompeii, a place preserved in time by the catastrophic eruption of Mount Vesuvius. Walking through the streets of Pompeii, we are transported back to a moment in history, witnessing the daily lives of its inhabitants. The well-preserved buildings, frescoes, and artifacts provide a unique window into the past, revealing the social structure, customs, and culture of a Roman city. The tragedy of Pompeii serves as a powerful reminder of the fragility of life and the impact of natural disasters. As we reflect on the stories of these lost civilizations, we gain a deeper understanding of our own history and the forces that have shaped the world we live in today.</p>
      `
    },
    {
      id: 3,
      image: 'https://greekcitytimes.com/wp-content/uploads/2021/03/image001-1-3.jpg',
      heading: "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores",
      description: 'Embark on a voyage of rediscovery with "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores." This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
      content: `
        <p>Embark on a voyage of rediscovery with "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores." This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. Our journey begins on the island of Crete, home to the ancient Minoan civilization. Known for their advanced architecture, art, and commerce, the Minoans left behind a legacy that continues to fascinate historians and archaeologists. We explore the ruins of Knossos, the largest Bronze Age archaeological site on Crete, uncovering the mysteries of the palace complex and its labyrinthine structure. The frescoes and artifacts found here provide a glimpse into the daily lives, religious practices, and societal structure of the Minoans, shedding light on a civilization that thrived for centuries before its sudden decline.</p>
  
        <p>Next, we sail to the ancient city of Tyre, a major Phoenician port and trading hub. The Phoenicians were renowned for their seafaring skills, commerce, and the spread of the alphabet. As we delve into the history of Tyre, we uncover the city's strategic importance and its role in the ancient Mediterranean economy. The ruins of Tyre, including its impressive harbor and city walls, tell the story of a civilization that was both resilient and innovative. Through detailed analysis of archaeological findings and historical records, we piece together the rich cultural tapestry of Tyre, exploring its contributions to art, trade, and technology. The legacy of the Phoenicians extends far beyond their own shores, influencing subsequent civilizations and leaving an indelible mark on history.</p>
  
        <p>Our final destination is the ancient city of Ephesus, located on the western coast of modern-day Turkey. Once a major center of trade and culture, Ephesus is best known for its Temple of Artemis, one of the Seven Wonders of the Ancient World. As we walk through the marble-paved streets of Ephesus, we encounter the remnants of grand temples, theaters, and public spaces that reflect the city's former glory. The Library of Celsus, with its stunning facade, stands as a testament to the importance of knowledge and learning in ancient Ephesus. The city's well-preserved ruins provide a vivid picture of daily life in the ancient world, from bustling marketplaces to grand religious ceremonies. Through our exploration of Ephesus, we gain a deeper appreciation for the achievements and legacy of ancient civilizations along the Mediterranean shores.</p>
      `
    },
    {
      id: 4,
      image: 'https://r4.wallpaperflare.com/wallpaper/839/138/327/greek-mythology-poseidon-neptune-temple-wallpaper-c0e93b323bf36352e20ad35d1a99f5b5.jpg',
      heading: "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm",
      description: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time.',
      content: `
        <p>Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. Our adventure begins in the heart of Byzantium, where the opulent streets and grand architecture reflect the city's importance as a cultural and economic hub. As we explore the remnants of this ancient metropolis, we uncover stories of emperors, traders, and scholars who shaped the destiny of Byzantium. The Hagia Sophia, with its magnificent dome and intricate mosaics, stands as a symbol of the city's enduring legacy. Through detailed historical analysis and vivid descriptions, we bring to life the grandeur and complexity of Byzantine civilization.</p>
  
        <p>Next, we travel to the sun-scorched ruins of Carthage, a city that once rivaled Rome in power and influence. Founded by Phoenician settlers, Carthage became a dominant force in the Mediterranean, known for its formidable navy and strategic location. The Punic Wars, a series of conflicts between Carthage and Rome, ultimately led to the city's downfall and destruction. As we walk through the ruins, we uncover the remnants of Carthage's impressive architecture, including its harbors, fortifications, and public buildings. The story of Carthage is one of resilience and determination, as the city rose from the ashes to rebuild and leave a lasting legacy. Through archaeological findings and historical records, we piece together the rich cultural heritage of Carthage and its impact on the ancient world.</p>
  
        <p>Our final stop is the mysterious island of Thera, also known as Santorini. Famous for its dramatic volcanic eruption in the second millennium BCE, Thera's archaeological site of Akrotiri offers a glimpse into a well-preserved Minoan city. The frescoes, pottery, and buildings uncovered here provide valuable insights into the daily lives and artistic achievements of the Minoans. The eruption of Thera is believed to have had a significant impact on the surrounding civilizations, including the decline of the Minoan culture. As we explore the ruins of Akrotiri, we reflect on the interplay between natural disasters and human resilience. The stories of Thera, Carthage, and Byzantium remind us of the ever-changing nature of history and the enduring quest to uncover the mysteries of our past.</p>
      `
    },
    {
      id: 5,
      image: "https://i.pinimg.com/474x/fc/d0/8f/fcd08f49a1bb2a18f7bad2e395c69eca.jpg",
      heading: "Ancient Maritime Routes: Trade and Cultural Exchange in the Mediterranean",
      description: 'Explore the intricate web of ancient maritime routes that facilitated trade and cultural exchange across the Mediterranean. This article dives into the history of seafaring civilizations and their impact on the development of commerce, art, and society.',
      content: `
        <p>Explore the intricate web of ancient maritime routes that facilitated trade and cultural exchange across the Mediterranean. This article dives into the history of seafaring civilizations and their impact on the development of commerce, art, and society. The ancient Mediterranean was a hub of maritime activity, with numerous civilizations establishing trade networks that spanned vast distances. From the Phoenicians, known for their seafaring prowess, to the Greeks and Romans, who expanded their empires through naval dominance, the sea was a vital conduit for the exchange of goods, ideas, and cultures. The routes these ancient mariners took were not just paths for commerce, but channels through which art, religion, and technology spread, shaping the civilizations that interacted along these watery highways.</p>
  
        <p>One of the most significant trade routes in the ancient Mediterranean was the Phoenician network, which connected the cities of Tyre, Sidon, and Byblos with distant lands. The Phoenicians traded commodities such as timber, glass, and purple dye, which were highly prized in the ancient world. Their mastery of navigation and shipbuilding allowed them to establish colonies and trading posts throughout the Mediterranean, from Carthage in North Africa to Gades in Spain. This extensive network facilitated the exchange of goods and cultural practices, influencing the development of the civilizations they interacted with. The Phoenicians' contributions to maritime trade and cultural exchange were instrumental in shaping the ancient Mediterranean world.</p>
  
        <p>The Greeks also played a crucial role in the development of maritime trade in the Mediterranean. Their colonies, spread across the Aegean Sea, Asia Minor, and Italy, became important centers of commerce and cultural exchange. The Greek city-states, such as Athens and Corinth, established powerful navies that protected their trade interests and expanded their influence. Greek merchants traded olive oil, wine, pottery, and other goods, while also spreading Greek culture, language, and art. The interactions between Greek and other Mediterranean civilizations led to the exchange of ideas and technologies, contributing to the rich tapestry of the ancient world. The maritime routes of the Greeks not only facilitated trade but also served as pathways for the dissemination of Hellenistic culture, which left a lasting legacy on the Mediterranean region.</p>
      `
    },
    {
      id: 6,
      image: 'https://i.pinimg.com/564x/66/06/a7/6606a7c454f5a0edbf921803f93e45d9.jpg',
      heading: "The Art of Mosaics: Crafting Beauty in the Ancient Mediterranean",
      description: 'Delve into the art of mosaic-making in the ancient Mediterranean. This article explores the techniques, materials, and artistic traditions that made mosaics a prominent form of artistic expression in ancient Greece and Rome.',
      content: `
        <p>Delve into the art of mosaic-making in the ancient Mediterranean. This article explores the techniques, materials, and artistic traditions that made mosaics a prominent form of artistic expression in ancient Greece and Rome. The art of mosaics dates back to the early civilizations of Mesopotamia, but it reached its zenith in the Mediterranean region during the Greco-Roman period. Mosaics were used to decorate floors, walls, and ceilings of public buildings, private homes, and religious structures. The intricate designs and vibrant colors of mosaics showcased the skill and creativity of the artisans who created them. By examining the process of mosaic-making, we gain insight into the cultural and artistic values of the ancient Mediterranean world.</p>
  
        <p>The process of creating a mosaic began with the selection of materials, which included colored stones, glass, ceramics, and precious metals. These materials were cut into small pieces, called tesserae, which were then arranged into patterns and images. The tesserae were set into a bed of mortar, which held them in place and allowed for the creation of durable and long-lasting artworks. The designs ranged from geometric patterns and floral motifs to intricate scenes depicting mythology, daily life, and historical events. The attention to detail and the use of shading and perspective in mosaics demonstrated the advanced artistic techniques of the time. The mosaics of ancient Greece and Rome not only served decorative purposes but also conveyed messages of power, wealth, and cultural identity.</p>
  
        <p>One of the most famous examples of ancient mosaics is the Alexander Mosaic, which was discovered in the House of the Faun in Pompeii. This masterpiece depicts the Battle of Issus, where Alexander the Great defeated the Persian king Darius III. The mosaic is notable for its dynamic composition, realistic portrayal of figures, and use of color to create depth and movement. Another remarkable example is the mosaics of the Villa Romana del Casale in Sicily, which feature elaborate hunting scenes, mythological subjects, and detailed representations of animals and landscapes. These mosaics provide a window into the artistic achievements and cultural expressions of the ancient Mediterranean. By studying these works of art, we gain a deeper appreciation for the craftsmanship and creativity that defined this ancient art form.</p>
      `
    },
    {
      id: 7,
      image: 'https://i.pinimg.com/564x/0d/e6/d3/0de6d392f2feaac6edc286ce9ea942df.jpg',
      heading: "The Rise and Fall of Carthage: A Mediterranean Powerhouse",
      description: 'Journey through the history of Carthage, from its rise as a dominant Mediterranean power to its eventual downfall. This article provides a comprehensive overview of Carthaginian culture, politics, and military prowess.',
      content: `
        <p>Journey through the history of Carthage, from its rise as a dominant Mediterranean power to its eventual downfall. This article provides a comprehensive overview of Carthaginian culture, politics, and military prowess. Founded by Phoenician settlers in the 9th century BCE, Carthage grew to become one of the most influential cities in the ancient Mediterranean. Its strategic location on the coast of North Africa allowed it to control key trade routes and establish a vast commercial empire. The city's wealth and power were built on its extensive trade networks, which connected it to various regions including Europe, Africa, and the Near East. Carthage's influence extended through its colonies and trading posts, creating a complex web of economic and cultural exchange.</p>
  
        <p>Carthage's military might was a crucial factor in its rise to power. The city-state boasted a formidable navy, which dominated the Mediterranean Sea and protected its commercial interests. Carthaginian ships were renowned for their speed and maneuverability, and their naval tactics were highly effective in battle. On land, Carthage employed a diverse army composed of mercenaries from various regions, including Iberians, Numidians, and Greeks. The Carthaginian military was led by skilled generals, the most famous of whom was Hannibal Barca. Hannibal's daring crossing of the Alps with his army, including war elephants, to invade Italy during the Second Punic War remains one of the most celebrated military feats in history. Despite his successes, Hannibal ultimately could not prevent Carthage's defeat by Rome.</p>
  
        <p>The fall of Carthage was marked by a series of conflicts with the Roman Republic, known as the Punic Wars. The First Punic War resulted in Carthage losing control of Sicily, while the Second Punic War saw Hannibal's invasion of Italy but ultimately ended with Roman victory at the Battle of Zama. The Third Punic War culminated in the complete destruction of Carthage in 146 BCE. The city was razed, its inhabitants were sold into slavery, and the territory became a Roman province. Despite its downfall, Carthage's legacy endured through its contributions to trade, culture, and military strategy. The story of Carthage is a testament to the rise and fall of great powers and the enduring impact of their achievements and failures on the course of history.</p>
      `
    },
    {
      id: 8,
      image: 'https://i.pinimg.com/474x/ce/0a/98/ce0a98403ee79200a0cbb1b62cc3bb4c.jpg',
      heading: "The Influence of Greek Philosophy on Roman Thought",
      description: 'Explore the profound impact of Greek philosophy on Roman intellectual life. This article examines how Greek philosophical traditions were adopted and adapted by Roman thinkers, shaping the intellectual landscape of the ancient world.',
      content: `
        <p>Explore the profound impact of Greek philosophy on Roman intellectual life. This article examines how Greek philosophical traditions were adopted and adapted by Roman thinkers, shaping the intellectual landscape of the ancient world. The influence of Greek philosophy on Rome began during the Hellenistic period, following the conquests of Alexander the Great. Greek philosophical schools, such as the Academy, Lyceum, and Stoic school, attracted Roman students and thinkers who sought to learn from the intellectual heritage of Greece. The teachings of prominent Greek philosophers, including Socrates, Plato, and Aristotle, were integrated into Roman education and thought, profoundly affecting various aspects of Roman society.</p>
  
        <p>One of the most significant areas of Greek influence was in the realm of ethics and politics. Roman philosophers like Cicero and Seneca were deeply influenced by the ethical teachings of the Stoics and Epicureans. Cicero's works, such as "De Officiis" (On Duties), reflect the Stoic emphasis on virtue, duty, and the importance of living in accordance with nature. Seneca, a Stoic philosopher and advisor to Emperor Nero, wrote extensively on ethics, emphasizing the importance of rationality and self-control. The integration of Greek philosophical concepts into Roman political thought helped shape the moral and ethical framework of Roman leadership and governance, promoting ideals such as justice, duty, and the common good.</p>
  
        <p>Greek philosophy also influenced Roman approaches to science and natural philosophy. The works of Aristotle, in particular, had a profound impact on Roman thought. Roman scholars, such as Pliny the Elder and Galen, built upon Aristotle's observations and classifications in fields like natural history and medicine. The scientific methods and empirical investigations of the Greeks provided a foundation for Roman advancements in various disciplines. Additionally, Greek philosophical debates about the nature of the cosmos, the principles of logic, and the pursuit of knowledge were integrated into Roman intellectual culture. The enduring legacy of Greek philosophy in Rome is evident in the continued study and appreciation of these ancient ideas, which have shaped the course of Western intellectual history.</p>
      `
    }
  ];
  

function Articles() {
  return (
    <div className="container-section articles-section" id="article">
        <div className="container__header articles-section__header">
            <h1 className="container__heading articles-section__heading">Articles</h1>
            <Link to="/news" onClick={scrollToTop} className="container__link articles-section__link">
                See all Articles
                <i className="container__link-icon fa-solid fa-circle-arrow-right"></i>
            </Link>
        </div>
        <div className="articles-section__body">
            <div className="articles-container">
                <div className="grid__row--no-wrap">
                    {news.map(article => (
                        <News
                            key={article.id}
                            heading={article.heading}
                            image={article.image}
                            description={article.description}
                            id={article.id}
                        />
                    ))             
                    }
                </div>
            </div>
        </div>
    </div>
  );
}

export default Articles;

