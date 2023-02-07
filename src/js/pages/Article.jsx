import React from "react";
import { useParams } from "react-router";

const Article = () => {
    const { articleID } = useParams();
    console.log(articleID);

    return (
        <div>
            <h1>Otra cosa :-)</h1>
        </div>
    );
};

export default Article;
