import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
	return (
		<div ref={ref} id="contact">
			Contact
		</div>
	);
});

Contact.displayName = "Contact"; // Adding display name

export default Contact;
