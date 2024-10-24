//console.log('vido script added');
function getIntString (time){
    const hour = parseInt(time/3600);
    const remainingTime = time%3600;
    const minute = parseInt(remainingTime/60);
    const second = remainingTime%60;
    return `${hour}hr ${minute}m ${second}s`;
}
//fetch ,load and show catagories on html
//create loadCatagories
const loadCategories = () =>{
//console.log('load catagories ctreated');
//fetch the data
fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
.then(res => res.json())
//.then(data => console.log(data.categories))
.then(data => displayCategories(data.categories))
.catch(error => console.log(error))
}

const loadCategoryVideos =(id) =>{
// alert(id);

fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
.then(res => res.json())
.then(data => displayVideos(data.category))
.catch(error => console.log(error));
};
// load video cards
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(error => console.log(error));
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    videoContainer.innerHTML ="";
    videos.forEach(video => {
        console.log(video);
        // Creating the card
        const card = document.createElement('div');
        card.classList = "card card-compact";

        // Fixing image container and image sizing
        card.innerHTML = `
            <figure class="w-full h-[200px] relative">
                <img
                  src="${video.thumbnail}"
                  class="w-full h-full object-cover"
                  alt="Shoes"/>
                  ${
                    video.others.posted_date?.length == 0 
                    ? "" : `<span class="absolute right-2 bottom-2 bg-black text-white">${getIntString (video.others.posted_date)}</span>`
                  }
                 
            </figure>
            <div class="px-0 py-2 flex gap-2">
               <div>
               <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}>
               
               </div>
               <div>
               <h2 class="font-bold">${video.title}</h2>
             
             <div class="flex items-center gap-2">
               <p class="text-gray-400">${video.authors[0].profile_name}</p>
               ${video.authors[0].verified == true ?
                 ` <img class="w-5" src=" https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000" />` : ""
                }
               
             <div>
               <p></p>
               
               </div>
            </div>
        `;
        // Append the card to the container
        videoContainer.append(card);
    });
}




//create displaycatagories
const displayCategories = (data) =>{
    const catagoryConatiner = document.getElementById('categories');
    data.forEach(element => {
        console.log(element)
        //create button
        const buttonContainer = document.createElement('div');
        // button.classList = 'btn';
        // button.innerText = element.category;
        buttonContainer.innerHTML = 
        `
        <button onclick="loadCategoryVideos(${element.category_id})" class="btn">
        ${element.category}
        </button>
        `;
        //add button to catagory conatiner
        catagoryConatiner.append(buttonContainer)
    });

    };
loadCategories();
loadVideos();