import MeetUpItem from './MeetUpItem';
import classes from './MeetupList.module.css'

function MeetUpList(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map(meetup => <MeetUpItem key={meetup.id} meetup={meetup} />)}
        </ul>
    );
}

export default MeetUpList;