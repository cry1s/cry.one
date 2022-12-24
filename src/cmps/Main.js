import React, { useState, useEffect } from 'react';

export function Main() {
    const [backUrl, setBackUrl] = useState('back.jpg');
    const [myWorks, setMyWorks] = useState([]);

    useEffect(() => {
        const backUrl = new URL(
            '../back.jpg',
            import.meta.url
        );
        setBackUrl(backUrl);

        const myWorks = [
            {
                title: 'My first work',
                desc: 'This is my first work',
                url: 'https://google.com'
            },
            {
                title: 'My second work',
                desc: 'This is my second work',
                url: 'https://google.com'
            },
        ];
        setMyWorks(myWorks);
    }, []);

    return <div className='intro'>
        <div className="intro__media">
            <img src={backUrl} alt="" className='intro__media' />
        </div>
        <div className="introContent">
            <div className="introContentInner">
                <h1>cry1s</h1>
            </div>
            <div className="introContentInner">
                <h1>Мои работы</h1>
                <ul>
                    {myWorks.map((work, idx) => <li key={idx}> <a href={work.url}>{work.title}</a> </li>)}
                </ul>
            </div>
            <div className="introContentInner">
                <h1>Мои контакты</h1>
            </div>
        </div>
    </div>
}