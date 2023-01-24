const Profile = () => {
    return (
        <section className="app-content">
            <img src="https://images.unsplash.com/photo-1450387635522-8ecb968079bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW4lMjBwYW5vcmFtYXxlbnwwfHwwfHw%3D&w=1000&q=80" />
            <div className="app-content__info">
                <div className="app-content__photo">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/ice-mountain-mountains-snow-stars-background-design-template-a6af0eb69fdbbf26ec92f3dc506a7d17_screen.jpg?ts=1589741832" />
                </div>
                <div className="app-content__info">
                    <p className="app-content__username">Alex</p>
                    <p className="app-content__description">Description</p>
                </div>
                <div className="app-content__myPosts">
                    <h3>My posts</h3>
                    <div className="app-content__newPost">
                        <p>New post</p>
                    </div>
                    <div className="app-content__latestPosts">
                        <div className="app-content__lastPost">
                            Post 1
                        </div>
                        <div className="app-content__lastPost">
                            Post 2
                        </div>
                        <div className="app-content__lastPost">
                            Post 3
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;