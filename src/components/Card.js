const Card = ({ id, src, title, owner, likes }) => {
    return (
        <li className="card">
            <img className="card__image" src={src} alt={title}/>
            <button type="button" className="card__remove-button"></button>
            <div className="card__bottom-section">
                <h2 className="card__title">{title}</h2>
                <button type="button" className="card__like-button">
                    <p className="card__counter">{likes.length}</p>
                </button>
            </div>
        </li>
    )
}

export default Card;