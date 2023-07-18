import React from "react";
import StoryDetail from "./StoryDetail";

function StoriesList({stories}) {
    const storyItems = stories.map((story) => {
        return (
            <StoryDetail key={story.id} story={story} />
        )
    })

    return (
        <>
            <ul>
                {storyItems}
            </ul>
        </>
    );
};

export default StoriesList;