const postsEl = document.getElementById("posts")

async function getData(){

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!response.ok){
            throw new Error ("There is a problem with the API")
        }
        const data = await response.json()

        for (let posts of data){
            postsEl.innerHTML += `<h2 id= "header">${posts.title}</h2>
                                <p id = "p1">${posts.body}</p>`
        }
        
       
    }
    catch(err){console.log(err)}
    
}
getData()

