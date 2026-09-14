import { ActionButton } from "./ActionButton"

export const ContactForm = () => {
    const saveContact = () => {
      alert("Contact saved")
    }

    return(
        <form action="">
            <label htmlFor="username"></label>
            <input type="text" id="username" placeholder="Your Name:" />
            <br />
            <label htmlFor="email"></label>
            <input type="email" id="email" placeholder="Your Email:"  tabIndex={1}/>
            <br />
            <ActionButton text="Save Contact" onClick={saveContact}></ActionButton>
        </form>
    )
}