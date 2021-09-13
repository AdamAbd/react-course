import classes from './MeetUpItem.module.css'

function MeetUpItem(props) {
    return (
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.meetup.image} alt={props.meetup.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.meetup.title}</h3>
                <address>{props.meetup.address}</address>
                <p>{props.meetup.description}</p>
            </div>
            <div className={classes.actions}>
                <button>To Favorites</button>
            </div>
        </li>
    );
}

export default MeetUpItem;
