import { useHistory } from 'react-router-dom'

import NewMeetupForm from "../components/meetups/NewMeetUpForm";

function NewMeetupPage() {
    const history = useHistory();

    function addMeetUpHandler(meetUpData) {
        fetch('https://react-course-cb2f3-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetUpData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                history.replace('/');
            });
    }

    return (
        <section>
            <h1>New Meetup Page</h1>
            <NewMeetupForm onAddMeetUp={addMeetUpHandler} />
        </section>
    );
}

export default NewMeetupPage;