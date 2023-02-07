import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../../styles/index.css";

const cards = [
    "Article 1",
    "Article 2",
    "Article 3",
    "Article 4",
    "Article 5",
    "Article 6",
    "Article 7",
    "Article 8",
    "Article 9",
    "Article 10",
    "Article 11",
    "Article 12",
];

const Blogs = () => {
    return (
        <>
            <div className="container-fluid w-100">
                <h1 className="h1 text-center mt-5 fs-1">Enjoy our articles</h1>
                <div className="row d-flex justify-content-between mx-auto w-75">
                    {cards.map((articleName, i) => (
                        <div key={i} className="my-card my-3 mx-3">
                            <img
                                className="card-img-top"
                                src="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title h5 mt-3">
                                    {articleName}
                                </h5>
                                <p className="card-text mt-3">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Accusantium, ducimus
                                    accusamus. Aut similique atque, neque nobis
                                    officia eligendi tempore dolore, laboriosam
                                    maiores assumenda debitis ex beatae animi
                                    placeat cumque aliquid!
                                </p>
                                <a
                                    href={`/blog/${i + 1}`}
                                    className="btn btn-primary mt-3"
                                >
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blogs;
