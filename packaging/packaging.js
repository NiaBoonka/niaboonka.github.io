// PHOTOES FOR DARKER TALES PROJECT
const projects = [
    {
        image: "cups-three-pink-closeup.jpg", // Original image path
        size: "half",  

    },

     {
        image: "cups-illustration.jpg", // Original image path
        size: "half",  

    },


    {
        image: "wands-cups-concrete.jpg", // Original image path
        size: "large",
    },

  
    {
        image: "wands-with-plants.jpg", // Original image path
        size: "half",
    },

    {
        image: "wands-illustration.jpg",
        size: "half", 
    },
    // Add more projects as needed...
];

// Function to create and append tiles to the grid
function createTiles() {
    const gridContainer = document.getElementById("grid-container"); 

    projects.forEach(project => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item", project.size); // Add size class
        
        // Create image element
        const img = document.createElement("img"); 
        img.src = project.image; // Original image
        img.loading = "lazy"; // Add lazy loading
         

        // Append image, title, and tags to the grid item
     
        gridItem.appendChild(img);
        gridContainer.appendChild(gridItem);
    });
}

// Call the function to create tiles
createTiles();
