import React, {useEffect} from 'react';
import api from "../utils/Api";
import Card from './Card';

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState({});
    const [cards, setCards] = React.useState([]);

    useEffect(() => {
            Promise.all([
                api.getUserInfo(),
                api.getCards()
            ])
                .then(([info, cards]) => {


                    const data = cards.map((item) => {
                        return {
                            card: item,
                            id: item._id,
                            src: item.link,
                            title: item.name,
                            owner: item.owner,
                            likes: item.likes,

                        }
                    })

                    setCards(data);
                    setUserName(info.name);
                    setUserDescription(info.about);
                    setUserAvatar(info.avatar);
                })
                .catch((err) => {
                    console.log(`Ошибка ${err}`);
                })
        }, []
    );


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя"/>
                    <button onClick={props.onEditAvatar} className="profile__avatar-button"></button>
                    <div className="profile__text-block">
                        <div className="profile__row">
                            <h2 className="profile__name">{userName}</h2>
                            <button onClick={props.onEditProfile} type="button"
                                    className="profile__edit-button"></button>
                        </div>
                        <p className="profile__status">{userDescription}</p>
                    </div>
                </div>
                <button type="button" onClick={props.onAddPlace} className="profile__add-button"></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {cards.map(card => <Card key={card.id} onCardClick={props.onCardClick} {...card}/>)}

                </ul>
            </section>


        </main>
    )


}

export default Main;