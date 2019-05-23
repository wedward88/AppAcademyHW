export const fetchSearchGiphys = (searchTerm) => {
    return $.ajax({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=WXa9j3WhK2TIPkaMyDehb1W1aRVr0RHH&q=${searchTerm}&limit=2&offset=0&rating=R&lang=en`,
    })
};