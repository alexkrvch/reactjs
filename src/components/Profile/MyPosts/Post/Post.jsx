import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/ice-mountain-mountains-snow-stars-background-design-template-a6af0eb69fdbbf26ec92f3dc506a7d17_screen.jpg?ts=1589741832" />
            <div className={s.content}>
                <p>Post 1</p>
                <date>18.02.2022</date>
                <div>
                    <button>Like</button>
                    <button>Dislike</button>
                </div>
            </div>
        </div>
    )
}

export default Post;