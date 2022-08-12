async function fetchBlogPosts(callback) {
  const response = await fetch(
    "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
  );
  const responseJson = await response.json();
  callback(responseJson);
}

export default fetchBlogPosts;