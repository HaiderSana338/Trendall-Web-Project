import React, {
    useEffect,
    useState
} from "react";
import { Link } from "react-router-dom";
import {scrollToTop} from '../../index.js';
import ReactPaginate from 'react-paginate';
const articlesPerPage = 3;
export const articles = [
    {
        id: 11,
        image: 'https://i.pinimg.com/474x/8c/c2/31/8cc231e03834eee79ab49e0cfa66f660.jpg',
        heading: "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean",
        description:'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.',
        content: 'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.',
        date: '05 Apr 2024'
    },
    
    {
        id: 12,
        image: "https://i.pinimg.com/474x/44/e0/ee/44e0ee527d4f96cc7d0634204acf76c9.jpg",
        heading: "Digging Deep: Insights from Archaeological Expeditions",
        description:'Delve into the captivating narrative of "Lost Cities Rediscovered: Tales from the Ancient Mediterranean" as it unravels the mysteries veiled by time in the vibrant tapestry of the Mediterranean region. This compelling exploration embarks on a journey through the annals of history, resurrecting ancient civilizations and their enigmatic urban landscapes that have long been obscured beneath layers of antiquity.',
        content: 'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.',
        date: '06 Apr 2024'
    },
    {
        id: 13,
        image: 'https://i.pinimg.com/474x/91/1d/cb/911dcb1825258a9db43bf846b238c961.jpg',
        heading: "Echoes of the Past: Unraveling History through Archaeological Finds",
        description:'Embark on a voyage of rediscovery with "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores." This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Embark on a voyage of rediscovery with "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores." This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        date: '07 Apr 2024'
    },
    {
        id: 14,
        image: 'https://i.pinimg.com/474x/fc/d0/8f/fcd08f49a1bb2a18f7bad2e395c69eca.jpg',
        heading: "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm",
        description:'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. " This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. ',
        date: '02 Apr 2024'
    },
    {
        id: 15,
        image: 'https://i.pinimg.com/474x/d1/38/0f/d1380fca9d94ca1262c5da8ddf06c709.jpg',
        heading: "Lost Cities Rediscovered: Tales from the Ancient Mediterranean",
        description:'Delve into the captivating narrative of "Lost Cities Rediscovered: Tales from the Ancient Mediterranean" as it unravels the mysteries veiled by time in the vibrant tapestry of the Mediterranean region. This compelling exploration embarks on a journey through the annals of history, resurrecting ancient civilizations and their enigmatic urban landscapes that have long been obscured beneath layers of antiquity.',
        content: 'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.',
        date: '04 Apr 2024'
    },
    {
        id: 16,
        image: "https://i.pinimg.com/474x/72/a9/3e/72a93ef95e586eb9b9fd581799b3fb08.jpg",
        heading: "Unearthing the Mysteries: Recent Discoveries in Archaeology",
        description:'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.',
        content: 'Step into the realm of ancient wonders with "Echoes of Antiquity: Unveiling Lost Civilizations in the Ancient Mediterranean." This immersive journey transcends the confines of time, guiding readers through the forgotten realms of antiquity scattered across the Mediterranean. From the majestic ruins of Alexandria to the sunken glory of Atlantis, each chapter of this exploration breathes life into the buried legacies of civilizations long past. Through vivid narratives and expert analysis, rediscover the allure of lost cities and the profound tales they hold, echoing through the corridors of history.',
        date: '06 Apr 2024'
    },
    
    {
        id: 17,
        image: 'https://i.pinimg.com/474x/27/56/3f/27563fc902a12a12b8edb4ce09c20785.jpg',
        heading: "Beyond the Ruins: Exploring Ancient Sites Around the Globe",
        description:'Embark on a voyage of rediscovery with "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores." This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Embark on a voyage of rediscovery with "Forgotten Splendors: Resurrecting Ancient Marvels Along the Mediterranean Shores." This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        date: '08 Apr 2024'
    },
    {
        id: 18,
        image: 'https://i.pinimg.com/474x/05/34/c9/0534c9f0e8826828d8ace1ea9f714719.jpg',
        heading: "The Artifacts Speak: Stories from the Archaeological Record",
        description:'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. " This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. ',
        date: '09 Apr 2024'
    },
    {
        id: 19,
        image: 'https://i.pinimg.com/564x/7c/be/4d/7cbe4df2c45b388fa05f128d6847518c.jpg',
        heading: "Beneath the Surface: Secrets Revealed by Archaeological Surveys",
        description:'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. " This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. ',
        date: '10 Apr 2024'
    },
    {
        id: 20,
        image: 'https://i.pinimg.com/474x/6a/41/ba/6a41ba7016e1baa7e7e96a6fb67870c3.jpg',
        heading: "From Pyramids to Palaces: Discoveries in Architectural Archaeology",
        description:'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. " This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. ',
        date: '12 Apr 2024'
    },
    {
        id: 21,
        image: 'https://i.pinimg.com/474x/c7/4a/d5/c74ad55abe3e5a9e787c93cbcd2b3394.jpg',
        heading: "Unlocking the Past: Advances in Archaeological Science",
        description:'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. " This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. ',
        date: '13 Apr 2024'
    },
    {
        id: 22,
        image: 'https://i.pinimg.com/736x/34/a3/93/34a39340b5712976b57d44bef1691464.jpg',
        heading: "Tracing Human Origins: Clues from Archaeological Digs",
        description:'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. " This enchanting odyssey unveils the hidden treasures of antiquity, scattered like jewels along the storied coastline. From the majesty of Minoan Crete to the glory of Phoenician Tyre, each chapter of this expedition delves into the heart of lost civilizations, revealing their triumphs and tragedies.',
        content: 'Discover the enigmatic allure of the past with "Lost Horizons: Exploring Ancient Mysteries Across the Mediterranean Realm." This captivating journey transcends the boundaries of time and space, leading readers through the labyrinthine corridors of history. From the opulent streets of Byzantium to the sun-scorched ruins of Carthage, each chapter of this expedition unveils the secrets of lost civilizations, shrouded in the mists of time. ',
        date: '15 Apr 2024'
    }

    
]
const Article = ({ heading, image, description, date, id }) => (
    <Link to={`/article/${id}`} onClick={scrollToTop} className="information">
        <div className="information-container">
            <div className="information__image-container">
                <img src={image} alt="" className="information__image" />
            </div>
            <div className="information-info">
                <div className="information-info__wrapper-heading">
                    <h3 className="information__heading">{heading}</h3>
                    <span className="information__date">{date}</span>
                </div>
                <p className="information__description">{description}</p>
            </div>
        </div>
    </Link>
);

function Information() {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const slicedArticles = articles.slice(currentPage * articlesPerPage, (currentPage + 1) * articlesPerPage);

    return (
        <div className="information-section">
        {
            slicedArticles.map(article => (
                <Article
                    key={article.id}
                    heading={article.heading}
                    image={article.image}
                    description={article.description}
                    date={article.date}
                    id={article.id}
                />
            ))
        }
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={Math.ceil(articles.length / articlesPerPage)}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active--yellow"
                renderOnZeroPageCount={null}
            />
        </div>
        
    );
}
export function getArticleHeadings() {
    // Lấy ra tất cả các tiêu đề
    const allHeadings = articles.map(article => article.heading);
    
    // Sử dụng Set để loại bỏ các giá trị trùng lặp
    const uniqueHeadings = [...new Set(allHeadings)];
    
    return uniqueHeadings;
}

export default Information;
