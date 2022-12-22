import React from "react";

function Card({slug, title, image, shortdesc}) {
    return (
        <>
            <div className="grid col-span-1">
                <a className="cursor-pointer" href={'/'+slug} >
                    <img src={image} alt="image" className="rounded-t-3xl aspect-video" />
                        <div className="bg-white p-4 rounded-b-3xl shadow-lg">
                            <h3 className="text-lg text-teal font-bold">
                                {title}
                            </h3>
                            <p className="py-2" style={{color: "black"}} >
                                {shortdesc}
                            </p>
                            <div className="grid grid-cols-2 font-bold" >
                                <p style={{color: "black"}}>
                                    By: ScoreMe
                                </p>
                                <p className="text-right" style={{color: "black"}}>
                                    13 Sep 2022
                                </p>
                            </div>
                        </div>
                </a>
            </div>
        </>
    )
}

export default Card;