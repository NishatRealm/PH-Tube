//console.log('vido script added');
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
//create displaycatagories
const displayCategories = (data) =>{
    const catagoryConatiner = document.getElementById('categories');
    data.forEach(element => {
        console.log(element)
        //create button
        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = element.category;
        //add button to catagory conatiner
        catagoryConatiner.appendChild(button)
    });

    }
loadCategories();