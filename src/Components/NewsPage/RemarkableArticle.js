import React from "react";
import News from "./News"
const articles = [
    {
        id: 31,
        image: "https://i.pinimg.com/474x/32/8e/7b/328e7b515c6ea4909ae956bb6ef5f912.jpg",
        heading: "Lost Cities Rediscovered: Tales from the Ancient Mediterranean",
        description:'Delve into the captivating narrative of "Lost Cities Rediscovered: Tales from the Ancient Mediterranean" as it unravels the mysteries veiled by time in the vibrant tapestry of the Mediterranean region. This compelling exploration embarks on a journey through the annals of history, resurrecting ancient civilizations and their enigmatic urban landscapes that have long been obscured beneath layers of antiquity.',
        content: 'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.'
    },
    {
        id: 32,
        image: "https://i.pinimg.com/474x/10/5d/35/105d3559afd0074a10ce7072a9f017b7.jpg",
        heading: "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean",
        description:'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.',
        content: 'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.'
    },
    {
        id: 33,
        image: 'https://images8.alphacoders.com/846/thumb-1920-846874.jpg',
        heading: "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores",
        description:'Embark on a voyage of rediscovery with "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores." This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Embark on a voyage of rediscovery with "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores." This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.'
    },
    {
        id: 34,
        image: 'https://i.pinimg.com/474x/a9/9b/8b/a99b8bd2c9d0ed11f897a96bd3bdcd09.jpg',
        heading: "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm",
        description:'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. " This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. '
    },
    {
        id: 35,
        image: 'https://i.pinimg.com/474x/eb/83/4a/eb834a32d23d8c3e2337b3b293c553ed.jpg',
        heading: "Lost Cities Rediscovered: Tales from the Ancient Mediterranean",
        description:'Delve into the captivating narrative of "Lost Cities Rediscovered: Tales from the Ancient Mediterranean" as it unravels the mysteries veiled by time in the vibrant tapestry of the Mediterranean region. This compelling exploration embarks on a journey through the annals of history, resurrecting ancient civilizations and their enigmatic urban landscapes that have long been obscured beneath layers of antiquity.',
        content: 'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.'
    },
    {
        id: 36,
        image: 'assets/images/article2.jpg',
        heading: "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean",
        description:'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.',
        content: 'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.'
    },
    {
        id: 37,
        image: 'assets/images/article3.jpg',
        heading: "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores",
        description:'Embark on a voyage of rediscovery with "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores." This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Embark on a voyage of rediscovery with "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores." This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.'
    },
    {
        id: 38,
        image: 'assets/images/article4.jpg',
        heading: "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm",
        description:'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. " This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. '
    }
    
]
function Remarkable(){
    return(
        <div className="remarkable-section">
            <div className="news-column-1">
                {articles.slice(0, 2).map(article => (
                    <News  key={article.id} image={article.image} heading={article.heading} sideClass="side" id={article.id}/>
                ))}
            </div>
            <div className="news-middle">
                <News  key={articles[2].id} image={articles[2].image} heading={articles[2].heading} description={articles[2].description} sideClass="main" id={articles[2].id}/>
            </div>
            <div className="news-column-2">
            {articles.slice(3, 5).map(article => (
                    <News key={article.id} image={article.image} heading={article.heading} sideClass="side" id={article.id}/>
                ))}
            </div>
        </div>
    );
}
export default Remarkable;