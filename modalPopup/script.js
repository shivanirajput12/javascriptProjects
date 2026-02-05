const openBtn = document.querySelector("#openBtn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector("#closeBtn");
const modalOverlay = document.querySelector("#modalOverlay");
const confirmBtn = document.querySelector("#confirmBtn");


//function to open modal

function openModal() {
    modalOverlay.classList.add("active");
    //prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
}

//function to close modal
function closeModal() {
    modalOverlay.classList.remove("active");
    //restore body scrolling
    document.body.style.overflow = "";
}

//open modal on button click
openBtn.addEventListener("click", openModal);

//close when close button or overlay is clicked
closeBtn.addEventListener("click", closeModal);

// close whne confirm button is clicked (for demo)
confirmBtn.addEventListener("click", () => {
    alert("Action confirmed!");
    closeModal();
});

// close when clicking outside modal content
modalOverlay.addEventListener("click", (e) => {
    //e.target = what was clicked
    //event.currentTarget = element with listener (modalOverlay)
    // only close if clicking directly on overlay, not inside modal
    if (e.target === modalOverlay) {
        closeModal();
    }
});

//close when excape key is pressed
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
        closeModal();
    }       
});

//alternative: stops on modal content click, but allows overlay click to close
// modal.addEventListener("click", (e) => {
//     e.stopPropagation();
// });  
//now anyclick on modal content won't trigger overlay click, but clicking outside will still work to close modal
