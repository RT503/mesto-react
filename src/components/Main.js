import React, {useEffect, useState } from 'react';
import api from "../utils/Api";
import Card from './Card';

function Main (props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState({});
    const [cards, setCards] = React.useState([]);

    useEffect(() => { Promise.all([
            api.getUserInfo(),
            api.getCards()
        ])
            .then(([info, cards]) => {
                console.log(cards);
                setUserName(info.name);
                setUserDescription(info.about);
                setUserAvatar(info.avatar);
            })
            .catch((err) => {
                console.log(`Ошибка ${err}`);
            })}, []
    )

    useEffect(() => {
        return () => {

        }
    }, [])





    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info" >
                    <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
                    <button onClick={props.onEditAvatar} className="profile__avatar-button"></button>
                <div className="profile__text-block">
                    <div className="profile__row">
                        <h2 className="profile__name">{userName}</h2>
                        <button onClick={props.onEditProfile} type="button" className="profile__edit-button" ></button>
                    </div>
                    <p className="profile__status">{userDescription}</p>
                </div>
                </div>
            <button type="button" onClick={props.onAddPlace} className="profile__add-button"></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => (

                            <li className="card">
                                <img className="card__image" src={card.link} alt={card.name} />
                                    <button type="button" className="card__remove-button"></button>
                                    <div className="card__bottom-section">
                                        <h2 className="card__title">{card.name}</h2>
                                        <button type="button" className="card__like-button">
                                            <p className="card__counter">0</p>
                                        </button>
                                    </div>
                            </li>

                    ))}

                </ul>
            </section>


        </main>
    )


}

export default Main;