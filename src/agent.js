const request = () => {
    get: url =>
        fetch(url).then(res => res.json())
    post: url
}