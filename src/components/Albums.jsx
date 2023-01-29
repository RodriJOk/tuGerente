import React from 'react'
import { useState, useEffect, useRef, Fragment} from 'react'
import Loader from './Loader'


function Albums(){
    const API = "https://jsonplaceholder.typicode.com/albums"
    const [data, setData] = useState([]);
    const [newdata, setNewData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        const response = await fetch(API);
        const json = await response.json();
        setData(json);
    };

    const fetchMoreData = async () => {
        const response = await fetch(API);
        const json = await response.json();
        setNewData(json);
    };
    const elementRef = useRef(null);

    useEffect(() => {
        const onChange = (entries, observer) => {
            const target = entries[0];
            if(target.isIntersecting){
                setLoading(true);
                fetchMoreData();
                setLoading(false);
                observer.disconnect();
            }
        }
        
        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        });

        observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <Fragment>
            <div className="albums">
                {data.map((item) => (
                    <div className="post" key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.username}</p>
                    </div>
                ))}
            </div>
            <div ref={elementRef}></div>
            {loading && <Loader />}
            {newdata && (
                <div className="albums">
                    {newdata.map((item) => (
                        <div className="post" key={item.id}>
                            <h2>{item.title}</h2>
                        </div>
                    ))}
                </div>
            )}
        </Fragment>
    )


}

export default Albums;