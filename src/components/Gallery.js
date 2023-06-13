import React from "react";

let Image = () => {
    return (
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson"/>
    );
}

let Gallery = () => {
    return (
        <section>
            <h1>Image Gallery</h1>
            <Image />
            <Image />
            <Image />
        </section>
    );
}

export default Gallery