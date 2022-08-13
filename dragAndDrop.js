const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let file;

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
    alert('This file is not an image format')
}


//    console.log('The file is dropped in drag area')
});



/* Missions:

    javaScript:
        1. Picture size dosnt fit
        2. Browse dos't work
        3. Finish the video


    css:
        Order Now:
            1. add signs
            2. arrange tables and images not in absulute
            3. add PriceTag | Countitiy | Add to Cart
            4. change the toolBar colors (??)

        Home:
            1. fix the ToolBar (too small)
            2. center the images in the middle (with proportional from both sids)
            3. put the images in a darker color box
            4. add more pictures

        contact us:

        about us:

            */         