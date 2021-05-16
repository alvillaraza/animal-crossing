import React, { useEffect, useState } from 'react';
import axios from 'axios';

import minus from '../images/btn-icon-minus.png';
import plus from '../images/btn-icon-x-remove.png';

import './Villagers.css';

function VillagersContainer({
    setApprovedVillagers,
    setRejectedVillagers,
    approvedVillagers,
    rejectedVillagers
}) {
    const [villagers, setVillagers] = useState([]);
    const [currentVillager, setCurrentVillager] = useState(0);
    const [cardFaceBack, setCardFaceBack] = useState(false);

    useEffect(() => {
        getVillagers();
    }, []);

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function swipeLeft(villager) {
        setRejectedVillagers([...rejectedVillagers, villager]);
        setCurrentVillager(currentVillager + 1);
        // TODO: remove the villager from original list, so that when user comes back, they don't double up on rejecting or approving the same villager twice (so it doesn't show up in rejected/approved array twice)
    }

    function swipeRight(villager) {
        setApprovedVillagers([...approvedVillagers, villager]);
        setCurrentVillager(currentVillager + 1);
        console.log(approvedVillagers);
        // TODO: remove the villager from original list, so that when user comes back, they don't double up on rejecting or approving the same villager twice (so it doesn't show up in rejected/approved array twice)
    }

    function skip() {
        setCurrentVillager(currentVillager + 1);
    }

    const getVillagers = () => {
        axios
            .get(
                'https://api.nookipedia.com/villagers?api_key=341a2ec2-f95e-4712-8577-086064734045'
            )
            .then((res) => {
                let tempArray = res.data;
                setVillagers(shuffle(tempArray));
            })
            .catch((err) => console.log('err'));
    };

    return (
        <>
            {villagers.map((villager, index) => (
                <div
                    className={`villager-container ${
                        currentVillager === index ? 'show-slide' : 'hide-slide'
                    }`}
                >
                    <div className='quotes-container'>
                        <div className='speech-bubble-brown'>
                            <p>"{villager.phrase}"</p>
                        </div>
                        {villager.quote ? (
                            <div className='speech-bubble-light'>
                                <p>"{villager.quote}"</p>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>

                    <div className='villager-card-wrapper'>
                        <div
                            className={`villager-card-container ${
                                cardFaceBack === true ? 'show-back' : ''
                            }`}
                            onClick={() => setCardFaceBack(!cardFaceBack)}
                        >
                            {/* Front of Villager Card */}
                            <div className='villager-card villager-card-front'>
                                <img
                                    className='villager-img'
                                    alt='amiibo card of villager'
                                    src={villager.image_url}
                                />
                            </div>

                            {/* Back of Villager Card */}
                            <div className='villager-card villager-card-back'>
                                <div className='villager-back-name'>
                                    <h1>{villager.name}</h1>
                                    <p>
                                        {villager.gender} {villager.species}
                                    </p>
                                </div>
                                <div className='villager-back-info'>
                                    <div className='villager-back-info-text'>
                                        <h2>
                                            {villager.birthday_month}{' '}
                                            {villager.birthday_day}
                                        </h2>
                                        <p>{villager.sign}</p>
                                        <h2>{villager.personality}</h2>
                                        <p>Personality</p>
                                    </div>
                                    <div>
                                        <img
                                            className='villager-img'
                                            alt='amiibo card of villager'
                                            src={villager.image_url}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='button-swipe'>
                        {/* TODO: need to move these buttons so it's outside of the card */}
                        <button
                            className='nav-villager nav-villager-reject'
                            onClick={() => swipeLeft(villager)}
                        >
                            <img src={minus} /> Reject
                        </button>
                        {/* <button onClick={() => skip()}>Skip</button> */}
                        <button
                            className='nav-villager nav-villager-approve'
                            onClick={() => swipeRight(villager)}
                        >
                            <img src={plus} /> Invite
                        </button>
                    </div>

                    <div className='name-container'>
                        <div className='speech-bubble-orange'>
                            <p>{villager.name}</p>
                        </div>
                    </div>

            
                </div>
            ))}
        </>
    );
}

export default VillagersContainer;
