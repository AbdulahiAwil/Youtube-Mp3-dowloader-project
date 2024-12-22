document.querySelector("#search-button").addEventListener("submit", async (event)=>{
    event.preventDefault();

    const query = document.querySelector("#search-input").value

    const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${query}=US&lang=en`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'de473292aemsh323a497ba493ceep123541jsn449764a94822',
            'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})

