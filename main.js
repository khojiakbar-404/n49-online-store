// O'zgaruvchilar

// let firstname; //undefined | null

// int('a') // ValueError
// Number('a') // Nan - Not a Number
// typeof 1 // number

/*
const age = Number(prompt('Yoshingiz:'));

if (age > 18) {
    console.log('Siz kotta bolasiz...')
}
else if (age == 18) {
    console.log('Siz katta boldiz...')
}
else {
    console.log('Siz yoshsiz....')
}
*/


/*const numbers = [1,2,3,4,5]

/*for (let i = 0; i < numbers.length; i ++) {
    console.log(numbers[i])
}*/
/*
function printNumber(x) {
    console.log(x)
}


(x) => {
    console.log(x)
}*/

//numbers.forEach( printNumber )

//const friends = ['alex', 'john', 'sarah']

//friends.forEach( friend => console.log(`salom ${friend}`))
/*friends.forEach((friend) => {
    if (friend != 'alex') {
        console.log(`salom ${friend}`)
    }
})*/

// harakat1 if shart else harakat2

// Js - ternar opetor
//shart ? harakat1: harakat2
//age == 18 ? console.log(123):console.log(345)

//HTML - HYPER TEXT MARKUP LANGUAGE
// Dom - Document object model

// < input type ="text"  />
/*input = {
    type: 'text'
}*/
/*
const button = document.getElementById('btn')
button.onclick = (event) => {
    if (event.target.innerText == "Button") {
        event.target.innerText == "men bosildim..."
    }
    else {
        event.target.innerText = "Button"
    }
}*/


const boxes = document.querySelectorAll('box');
/*boxes.forEach( box => {
    box.onclick = (event) => {
        const body = document.querySelector('body');

        if (event.taget.classList[0] == "red") {
            body.style.backgroundColor = "red";
        } 
        else if (event.target.classList[0] =="yellow") {
            body.style.backgroundColor = "yellow";
        }
        else {
            body.style.backgroundColor = "green";
        }
    }
})*/

boxes .forEach(box => {
    box.addEventListener('mouserover', (event) => {
        document.querySelector('body').style.backgroundColor = event.target.classList[0]
    })
    box.addEventListener('mouseout', (event) => {
        document.querySelector('body').style.backgroundColor = "white"
    })

    
})





// script.js

// Postlarni yuklash uchun API URL
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// HTML konteyneri
const postsContainer = document.getElementById("posts-container");

// Postlarni yuklash funksiyasi
async function fetchPosts() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch posts");
    const posts = await response.json();
    displayPosts(posts); // Ma'lumotlarni ko'rsatish
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Postlarni sahifada ko'rsatish funksiyasi
function displayPosts(posts) {
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "bg-white shadow-md rounded-lg p-4";
    postElement.innerHTML = `
      <h2 class="text-xl font-semibold text-gray-800">${post.title}</h2>
      <p class="text-gray-600 mt-2">${post.body}</p>
    `;
    postsContainer.appendChild(postElement);
  });
}

// Postlarni yuklashni boshlash
fetchPosts();


