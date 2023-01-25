import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt="" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/ice-mountain-mountains-snow-stars-background-design-template-a6af0eb69fdbbf26ec92f3dc506a7d17_screen.jpg?ts=1589741832" />
            <div className={s.content}>
                <p>{props.message}</p>
                <span>{props.date}</span>
                <div>
                    <span>{props.countLike}</span>
                    <button>Like</button>
                    <button>Dislike</button>
                </div>
            </div>
        </div>
    )
}

export default Post;