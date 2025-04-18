## Implement App as a stateful component that maintains appointments and contacts. It should also pass those values, along with callback functions to update those state values, to its child components.

### App Requirements:

- Keep track of the contacts and appointments data, each being an array of objects
- Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts
- Define a callback function that, given a name, contact, date, and time, adds a new appointment object with that data to the array of appointments
- Pass the array of contacts and the appropriate callback function as props to the ContactsPage component
- Pass the appointments array, contacts array, and the add appointment function as props to the AppointmentsPage component

### /src/App.js

```js
import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
```

## Implement ContactsPage as a stateful component to handle the logic for adding new contacts and listing current contacts.

### ContactsPage Requirements:

- Receive two props:
	- The current list of contacts
	- A callback function for adding a new contact
- Keep track of three local state values: the current name, phone, and email entered into the form
- Check for duplicates whenever the name in the form changes and indicate the name is a duplicate
- Only add a new contact on form submission if it does not duplicate an existing contact’s name
- A successful submission should clear the form
- In the Add Contact section, render a ContactForm with the following passed via props:
	- local state variables
	- local state variable setter functions
	- handleSubmit callback function
- In the Contacts section, render a TileList with the contact array passed via props

### /src/containers/contactsPage/ContactsPage.js

```js
import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = () => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};

```

## Implement ContactForm as a stateless component that renders a web form to collect the necessary contact information.

### ContactForm Requirements:

- Render a form with:
	- The onSubmit attribute set
	- 3 controlled <input> elements, one for each piece of contact data
	- A submit button
- Include a pattern attribute to the phone <input> with a regex that matches the phone locale of your preference

### /src/components/contactForm/ContactForm.js

```js
import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    </>
  );
};

```

## Implement TileList as a stateless component that renders a list of Tile components using an array of objects.

### TileList Requirements:

- Receive one prop:
	- An array of objects to render as a list
- Use the array passed via props to iteratively render Tile components, using each object in the array to pass the name and description props to each rendered Tile component
- The requirements for the TileList component are generalized and allow it to be shared by the ContactsPage and AppointmentsPage components. As long as an array of objects with either the contact data or appointments data is passed then the content will be handled appropriately.

### /src/components/tileList/TileList.js

````js
import React from "react";

export const TileList = () => {
  return (
    <div>
      
    </div>
  );
};
```

## implement Tile as a stateless component that renders the data from an object.

### Tile Requirements:

- Receive two props:
	- name
	- description
- Render a <p> element with the name prop. Give this element a className of "tile-title"
- Iterate over the values in the description object, passed in via props, and render a <p> element for each value and give each a className of "tile".
- Just like the TileList component, the Tile component is generalized to work with data from any object. This allows it to be used in both the ContactsPage and AppointmentsPage components.

### /src/components/tile/Tile.js

```js
import React from "react";

export const Tile = () => {
  return (
    <div className="tile-container">
      
    </div>
  );
};
```

## implement AppointmentsPage as a stateful component that handles the logic for adding new appointments and listing current appointments.

### AppointmentsPage Requirements:

- Receive three props:
	- The current list of appointments
	- The current list of contacts
	- A callback function for adding a new appointment
- Keep track of four local state variables, the current name, contact, date, and time entered into the form
- Add a new appointment on form submission
- Clear the form on submission
- In the Add Appointment section, render an AppointmentForm with the following passed via props:
	- local state variables
	- local state variable setter functions
	- handleSubmit callback function
- In the Appointments section, render a TileList with the appointment array passed via props

### /src/containers/appointmentsPage/AppointmentsPage.js

```js
import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = () => {
  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
```

## implement AppointmentForm as a stateless component that renders a web form to collect the necessary appointment information.

### AppointmentForm Requirements:

- Render a form with:
	- The onSubmit attribute set to the callback function passed in via props
	- 3 controlled input components, to be used for the name, date and time appointment data
	- A ContactPicker component with the contacts list passed in via props
	- A submit button
- Use getTodayString() to set the min attribute of the date input

### /src/components/appointmentForm/AppointmentForm.js

```js
import React from "react";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <></>
  );
};

```

##  implement ContactPicker as a stateless component that renders a drop-down list of all contact names.

### ContactPicker Requirements:

- Receive 4 props:
	- The array of contacts
	- A callback function to handle when the onChange event is triggered
	- value
	- name
- Render a select element with the onChange attribute set to the callback passed in via props, a value attribute set to the value prop, and a name attribute set to the name prop.
- Add a default option element with the text “No Contact Selected” and a value attribute of "".
- Iteratively add option elements using the contact names from the array passed in via props

### /src/components/contactPicker/ContactPicker.js

```js
import React from "react";

export const ContactPicker = () => {
  return (
    <></>
  );
};
```