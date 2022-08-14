const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

 let button = document.querySelector('.button');
 let input = document.querySelector('input');

let file;

button.onclick = () => {
    input.click();
};

// when browse
input.addEventListener('change', function() {
    file = this.files[0];
    dragArea.classList.add('active');
    displayFile ();
}) 

// when file is inside the drag area
dragArea.addEventListener('dragover', (event) => {
//   console.log('File is inside the drag area');
    event.preventDefault();
    dragText.textContent = 'Release to upload';
    dragArea.classList.add('active');
});


// when file outside the drag area
dragArea.addEventListener('dragleave',() => {
//    console.log('File left the drag area');
    dragText.textContent = 'Drag & Drop';
    dragArea.classList.remove('active');
});


// when file droped in the drag area
dragArea.addEventListener("drop",(event) => {
    event.preventDefault();

    file = event.dataTransfer.files[0];
//      console.log(file);
    displayFile ();


});

function displayFile () {
    let fileType = file.type;
// console.log(fileType);

let validExtensions = ['image/jpeg', 'image/jpg', 'image/png' ]
if (validExtensions.includes(fileType)) {
    let fileReader = new FileReader();

    fileReader.onload = () => {
        let fileURL = fileReader.result;
    //        console.log(fileURL);
        let imgTag  = `<img src="${fileURL}" alt="">`;
        dragArea.innerHTML = imgTag;
    };
    fileReader.readAsDataURL(file);
} else {
    alert('This file is not an image format');
    dragArea.classList.remove('active');
}
//    console.log('The file is dropped in drag area')

};



/* Missions:

    javaScript:
        Drag and Drop:
            1. Picture size dosnt fit --------------------------------------------------- V
            2. Browse dosn't work ------------------------------------------------------- V
            3. Finish the video --------------------------------------------------------- V 


    css:
        Order Now:
            1. add signs
            2. arrange tables and images not in absulute
            3. add PriceTag | Countitiy | Add to Cart
            4. change the toolBar colors (??)

        Home:
            1. fix the ToolBar (too small)----------------------------------------------- V
            2. center the images in the middle (with proportional from both sids) ------- V
            3. put the images in a darker color box
            4. add more pictures
            5. Relatives paths ---------------------------------------------------------- V

        contact us:

        about us:

            */