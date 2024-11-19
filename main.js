const URL = "https://jsonplaceholder.typicode.com/posts";
const container = document.getElementById('root');

const loaderSpinner = `
    <div class="h-[100vh] flex items-center justify-center">
        <div role="status">
            <svg aria-hidden="true" class="inline w-10 h-10 text-gray-200 animate-spin text-white fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
    </div>
`;

;(async function fetchPosts() {
    container.innerHTML = loaderSpinner;

    const response = await fetch(URL);
    const data = await response.json();

    container.innerHTML = "";

    data.forEach(async post => {

        ;


        container.innerHTML += `
        <div class="border border-slate-500 rounded shadow shadow-slate-500 w-1/2 py-5 px-10">
            <h2 class="text-3xl">
                <span class="front-bold">Title:</span>
                ${post.title}
            </h2>
            
            <p class="text-xl">
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint beatae magnam voluptas sunt nostrum veritatis iste incidunt autem nesciunt, repellendus dolores. Odit eveniet, temporibus dolores eius itaque incidunt tempore officia consequatur deserunt, laboriosam sit dolor quasi dolore. Iusto esse doloremque ducimus eius suscipit provident impedit quaerat eum ipsam magni necessitatibus quae perspiciatis, porro aspernatur. Officia eius neque magni animi enim laudantium distinctio at. Esse deleniti corporis laboriosam tempora reprehenderit dolorem perferendis asperiores laborum recusandae saepe autem enim, cum veritatis ipsa iure nihil dolor! Culpa libero assumenda voluptates error ipsum quasi amet at minus optio sunt eveniet sed distinctio suscipit, id repudiandae provident magni vero earum dignissimos reiciendis? Explicabo amet quod aliquam tempora, quo, asperiores tempore aspernatur id possimus assumenda iusto repellat voluptatum rem corporis? Libero aliquam voluptatibus laudantium praesentium amet cum quibusdam. At voluptas quidem minima, maxime repudiandae rerum eveniet porro corporis repellendus dolores officia quam vel! Unde, et pariatur qui necessitatibus minus quasi eligendi quis temporibus voluptate architecto quos quisquam mollitia, deserunt facilis, ducimus hic! Asperiores eos ab quod deleniti blanditiis eum inventore, suscipit delectus eius! Voluptates, voluptatum quaerat molestiae rerum esse tempore eos temporibus, cum nemo sapiente quia porro ratione, animi repellat incidunt excepturi. Est voluptatem modi assumenda!
                
            </p>
            <p class="h-1 w-full bg-slate-500 my-5"></p>
            <h2 class="font-3xl">
                <span class="font-bold">Author:</span>
                <b>
                    <i class="text-slate-500">Azizova Madina</i>
                </b>
            </h2>
        </div>
        `;
    });
})();








/*const URL = "https://jsonplaceholder.typicode.com/posts";
const container = documnet.getElementById('root');

;(async function fetchPosts() {
    const response = await fetch(URL);
    const data = await response.json();

    data.forEach(post => {
        container.innerHTML += 
        <div class="border border-slate-500 rounded shadow shadow-slate-500 w-1/2 py-5 px-10">
                <h2 class="text-3xl"> 
                    <span class="front-bold">Title:</span>
                    ${post.title}
                </h2>
                
                <p class="text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint beatae magnam voluptas sunt nostrum veritatis iste incidunt autem nesciunt, repellendus dolores. Odit eveniet, temporibus dolores eius itaque incidunt tempore officia consequatur deserunt, laboriosam sit dolor quasi dolore. Iusto esse doloremque ducimus eius suscipit provident impedit quaerat eum ipsam magni necessitatibus quae perspiciatis, porro aspernatur. Officia eius neque magni animi enim laudantium distinctio at. Esse deleniti corporis laboriosam tempora reprehenderit dolorem perferendis asperiores laborum recusandae saepe autem enim, cum veritatis ipsa iure nihil dolor! Culpa libero assumenda voluptates error ipsum quasi amet at minus optio sunt eveniet sed distinctio suscipit, id repudiandae provident magni vero earum dignissimos reiciendis? Explicabo amet quod aliquam tempora, quo, asperiores tempore aspernatur id possimus assumenda iusto repellat voluptatum rem corporis? Libero aliquam voluptatibus laudantium praesentium amet cum quibusdam. At voluptas quidem minima, maxime repudiandae rerum eveniet porro corporis repellendus dolores officia quam vel! Unde, et pariatur qui necessitatibus minus quasi eligendi quis temporibus voluptate architecto quos quisquam mollitia, deserunt facilis, ducimus hic! Asperiores eos ab quod deleniti blanditiis eum inventore, suscipit delectus eius! Voluptates, voluptatum quaerat molestiae rerum esse tempore eos temporibus, cum nemo sapiente quia porro ratione, animi repellat incidunt excepturi. Est voluptatem modi assumenda!
                </p>
                <p class="h-1 w-full bg-slate-500 my-5"></p>
                <h2 class="font-3xl">
                    <span class="font-blod">Author:</span>
                    <b>
                        <i class="text-slate-500">Azizova Madina</i>
                    </b>
                </h2>

            </div>
    })
})();*/