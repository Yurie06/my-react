import React, { useState, useEffect} from 'react';

function CityList(){
    const [citys, setCitys] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:3000/city')
        .then(response => response.json())
        .then(data => {
            setCitys(data);
        })
        .catch((err) => {
                console.log(err.message);
        });
    },[]);

    return (
        <div>
            <h1>List of Citys</h1>
            {citys.map((citys)=>{
                return (
                    <div className="card my-2 p-2">
                        <div>Name: {citys.Name}</div>
                        <div>zip_code: {citys.zip_code}</div>
                        <div>Region: {citys.Region}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default CityList;