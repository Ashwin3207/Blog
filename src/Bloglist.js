
const Bloglist = ({blogs,title}) => {
    // const blogs =props.blogs;
  
    return ( 
        <div className="blog-list">
            
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                
                <div className="blog-preview" key={blog.id}>
                     
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <p>{blog.body}</p>
                    <button id="delblog">Delete</button>

                </div>
                
            ))}
        </div>
     );
}
 
export default Bloglist;