import React from 'react';

const ReferText = ({num, title, desc}) => {
    return (
        <li>
            <a href="/">
                <span>{num}</span>
                <span>{title}</span>
                <span>{desc}</span>
            </a>
        </li>
    );
};

const ReferCont = ({references}) => {
    console.log({references});

    return (
        <section className="cont__refer">
            <div className="container">
                <div className="refer__inner">
                    <h2>CSS</h2>
                    <ul className="refer__list">
                        {references.map((refer,idx) => (
                            <ReferText
                                key={idx}
                                num={refer.num}
                                title={refer.title}
                                desc={refer.desc}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ReferCont;