import { useState, useEffect } from 'react'

import MeetUpList from '../components/meetups/MeetupList';

function AllMetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetUp, setLoadedMeetUp] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-course-cb2f3-default-rtdb.firebaseio.com/meetups.json'
        ).then(response => {
            return response.json();
        }).then(data => {
            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key],
                };

                meetups.push(meetup);
            }

            setLoadedMeetUp(meetups);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
            <section>
                <h1>All Metups Page</h1>
                <p>Loading ...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All Metups Page</h1>
            <MeetUpList meetups={loadedMeetUp} />
        </section>
    );
}

export default AllMetupsPage;