import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://dev-reactblog-be.pantheonsite.io/wp-json/wp/v2/posts?_embed"
      );
      const posts = await response.json();

      console.log(posts);
      setData(posts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="singleWrapper">
        {!loading &&
          data.map((post, index) => (
            <div className="singlePost" key={post.slug}>
              <div className="imageWrapper">
                <img src={post._embedded["wp:featuredmedia"][0].source_url} />
              </div>
              <div className="postTitle">
                <h3>
                  <Link to={`/posts/${post.slug}`}>{post.title.rendered}</Link>
                </h3>
              </div>
            </div>
          ))}
      </div>
      {loading && <h1>loading...</h1>}
    </div>
  );
}
