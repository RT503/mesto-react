import React from 'react';

function Main () {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <img className="profile__avatar" src="../images/profile-avatar.png" alt="Аватар пользователя" />
                    <button className="profile__avatar-button"></button>
                <div className="profile__text-block">
                    <div className="profile__row">
                        <h2 className="profile__name">Жак-Ив Кусто</h2>
                        <button type="button" className="profile__edit-button" ></button>
                    </div>
                    <p className="profile__status">Исследователь океана</p>
                </div>
                </div>
            <button type="button" className="profile__add-button"></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                </ul>
            </section>
        </main>
    )

}

export default Main;