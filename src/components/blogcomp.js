
export default function blog(props){    
return(
        <div  className="blog">
        <img src={props.image} className="blog_image" alt="" />
        <div className="blog_text">
           <a href={`../singleblog/single.html?id=${props.key}`}> 
           <h1 className="blog_title" >{props.title}</h1></a>
            <p className="blog_description">
            {props.body}
        </p></div>
        <div className="like_comment">
<div className="blog_like">
    <img id={`like_${props.key}`} src="./images/whitelike.png" className="like_icon" alt="" onclick="likethis(this.id)"/>
    <p className="blog_number">{props.likes.length}</p>
    </div>
<div className="blog_comment"><img id={`comment_${props.key}`} src="./images/comment.png" className="comment_icon" alt=""/>
<p className="blog_number">{props.comments.length}</p>
</div>
        </div> 
        </div>
    );
}