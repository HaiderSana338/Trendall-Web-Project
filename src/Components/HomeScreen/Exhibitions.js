import React from 'react';

const exhibitions = [
    {
        id: 'ex1',
        name:'Timeless Treasures',
        description: 'a journey through art history',
        type: 'Exhibition',
        date: '1 Apr 2024 - 30 Apr 2024',
        image: "assets/images/exhibition1.jpg",
    },
    {
        id: 'ex2',
        name:'Ancient Marvels',
        description: 'unveilin the Artistic Legacy',
        type: 'Exhibition',
        date: '16 May 2024 - 25 Jun 2024',
        image: "assets/images/exhibition2.jpg",
    }
];
//UI component
const Exhibition = ({exhibition, index, onClick}) => {
    let color = 'blue';
    if(index % 2 ==0){color ='yellow'}
    return (
        <div className="grid__column-two">
            <div href="#" className="exhibition">
                <div className={`exhibition exhibition-border background--${color}`}></div>
                <div className="exhibition-container">
                    <div className="exhibition-info">
                        <div className="exhibition-body">
{/* logic nghiệp vụ */}
                            <h1 onClick={() => onClick(exhibition)} className={`exhibition__heading exhibition__heading--${color}`}>{exhibition.name}</h1>
                            <h3 className="exhibition__description">{exhibition.description}</h3>
                        </div>
                        <div className="exhibition-footer">
                            <div className="exhibition-time">
                                <span className="exhibition__type">{exhibition.type}</span>
                                <br/>
                                <span className="exhibition__date">{exhibition.date}</span>
                            </div>
                            <a href="#" className={`exhibition__link background-link--${color}`}>Book Now</a>
                        </div>
                    </div>
                    <div className="exhibition__image-container">
                        <img src={exhibition.image} alt="" className="exhibition__image"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
//Container
function Exhibitions() {
    const handleClick = (exhibition) => {
        console.log(exhibition.name)
    }
    return (
        <div className="container-section exhibition-section" id="exhibition">
            <div className="container__header">
                <h1 className="container__heading">Exhibitions and Events</h1>
                <a href="#" className="container__link">See all exhibitions and events
                    <i className="container__link-icon fa-solid fa-circle-arrow-right"></i>
                </a>
            </div>
            <div className="exhibition-section__body">
                
                    <div className="grid__row">
                        {exhibitions.map((exhibition, index) => 
                            <Exhibition 
                                key={exhibition.id}
                                index={index}
                                exhibition = {exhibition}
                                // onClick = {() => handleClick(exhibition)}
                                onClick = {handleClick}
                            />
                        )}
                    </div>
                
            </div>
        </div>
  );
}

export default Exhibitions;
