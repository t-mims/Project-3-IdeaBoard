import React, { Fragment, useEffect, useState } from "react";
import PhotoComp from "../resBody";
import API from "../../utils/API"

function Results() {
    const [data, setPhotosResponse] = useState(null);
    useEffect(() => {
        API.search
            .getPhotos({ query: "nature", orientation: "landscape" })
            .then(result => {
                setPhotosResponse(result);
            })
            .catch(() => {
                console.log("something went wrong!");
            });
    }, []);

    if (data === null) {
        return <div>Loading...</div>;
    } else if (data.errors) {
        return (
            <div>
                <div>{data.errors[0]}</div>
            </div>
        );
    }
    else {
        return (
            <div>
                <ul>
                    {data.response.results.map(photo => (
                        <li key={photo.id} className="li">
                            <PhotoComp photo={photo} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default Results;