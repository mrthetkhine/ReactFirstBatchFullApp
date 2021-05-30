export function loadAllPost(loadPosts)
{
    fetch('http://localhost:8080/api/posts')
        .then(response=>response.json())
        .then(posts=>loadPosts(posts));
    ;
}