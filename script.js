document.addEventListener("DOMContentLoaded", async function() {
    try {
        const response = await fetch('news.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        const latestStoriesElement = document.getElementById("latest-stories");
        data.forEach(story => {
            const storyElement = document.createElement("div");
            storyElement.classList.add("story");

            const titleLink = document.createElement("a"); 
            titleLink.classList.add("title-link"); 
            titleLink.textContent = story.title; 
            titleLink.href = story.link; 
            titleLink.target = "_blank"; 

            storyElement.appendChild(titleLink); 

            latestStoriesElement.appendChild(storyElement); 
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
