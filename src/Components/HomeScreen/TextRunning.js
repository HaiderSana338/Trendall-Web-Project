import React from "react";

function TextRunning({ direction, text, image}) {
    const repeatCount = 1000; // Số lần lặp lại
    const textWithIcon = `             ${text}             <img className='icon-running' src=${image}></img>`.repeat(repeatCount); 

    return (
        <div className={`container-text-running scroll-${direction}`}>
            <marquee behavior="scroll" direction={`${direction}`} scrollamount="15">
                <span dangerouslySetInnerHTML={{ __html: textWithIcon }}></span>
            </marquee>
        </div>
    );
}

export default TextRunning;
