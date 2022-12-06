import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Post() {
  const param = useParams();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({});

  // fetch post data
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const response = await fetch(
        `https://dev-reactblog-be.pantheonsite.io/wp-json/wp/v2/posts?slug=${param.slug}&_embed`
      );
      const data = await response.json();
      setPost(data[0]);
      setLoading(false);
    };
    fetchPost();
  }, [param]);

  return (
    <div className="singlePage">
      {!loading && (
        <>
          <div className="singleImageContainer">
            <img
              src={post._embedded["wp:featuredmedia"]["0"].source_url}
              alt="post image"
            />
          </div>
          <div className="postTitle">
            <h1>{post?.title?.rendered}</h1>
            <hr />
          </div>
          <div
            className="postbody"
            dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
          ></div>
        </>
      )}
      {loading && <h1>loading...</h1>}
    </div>
  );
}
