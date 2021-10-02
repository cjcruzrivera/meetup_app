import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleRef = useRef();
  const imgRef = useRef();
  const descriptionRef = useRef();
  const addressRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredImg = imgRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredAddress = addressRef.current.value;

    const enteredMeetup = {
      title: enteredTitle,
      image: enteredImg,
      description: enteredDescription,
      address: enteredAddress,
    };

    props.onAddMeetup(enteredMeetup);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image URL</label>
          <input type="url" id="image" required ref={imgRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Create Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
