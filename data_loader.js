const container = document.getElementById("projects-container")

// a function for filtering records
function filterRecords(turnedOnButtons, recordElements){
    recordElements.forEach(record => {
        record.classList.remove("active-record")
    })
    
    selectedRecords = recordElements.filter(recordElement => {
        
        for (let tag of turnedOnButtons){
            if (!records[recordElement.getAttribute("data-index")].tags.has(tag)){
                return false;
            }
            
        }
        return true;
    })
    
    selectedRecords.forEach(record =>{
        record.classList.add("active-record")
    })
}

// collect all tags
all_tags = new Set()
records.forEach(record => {
    tags = record.tags
    tags.forEach(tag => {
        all_tags.add(tag);
    })
})

// add filter container to DOM
const filtersContainer = document.getElementById("filters-container");
all_tags.forEach(tag => {
    const button = document.createElement('button');
    
    button.className = 'filter-button';
    button.setAttribute('data-tag', tag);
    button.textContent = tag; // Set the button's text
    
    
    filtersContainer.appendChild(button);
})


// add records to DOM
current_id = 0  // assignn unique id to each project
recordElements = []
records.forEach(record => {
    const recordDiv = document.createElement("div");
    recordDiv.classList.add("record");
    recordDiv.classList.add("active-record");
    recordDiv.setAttribute("data-index", current_id);
    recordElements.push(recordDiv);
    current_id++;

    recordDiv.innerHTML = `
    <a href=${record.link} class="clickable-div">
        <h3>${record.name}</h3>
        <p>${record.date}</p>
        <p>${record.description}</p>
        
    </a>
    `

    container.appendChild(recordDiv)
})




// FOR FILTERING
// event listener to the filter container (uses delegation)
const turnedOnButtons = new Set();
filtersContainer.addEventListener("click", (event) => {
    if (!(event.target && event.target.classList.contains("filter-button"))){
        return;
    }

    // if a filter is clicked
    const button = event.target;
    const tag = button.getAttribute("data-tag");

    if (turnedOnButtons.has(tag)) {
        turnedOnButtons.delete(tag);
        button.classList.remove("active-filter");
    }else {
        turnedOnButtons.add(tag);
        button.classList.add("active-filter");
    }

    filterRecords(turnedOnButtons, recordElements);

})

// hide/open the filter tool pane
const filterPane = document.getElementById("filters-pane-opener");
filterPane.addEventListener("click", (event) => {
    // if user clicks the filter -> don't close the pane
    if ((event.target && event.target.classList.contains("filter-button"))){
        return;
    }

    const filtersContainer = document.getElementById("filters-pane");

    const current_block_type = filtersContainer.style.display
    if (current_block_type === "none"){
        filtersContainer.style.display = "block";
    }else{
        filtersContainer.style.display = "none";
    }
})