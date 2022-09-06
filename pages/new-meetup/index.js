import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    console.log(enteredMeetupData);

    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: { "Content-type": "application/json" },
    });

    const data = await response.json();

    console.log(data);
    router.push("/");
  };
  return (
    <Fragment>
      <Head>
        <title>Add a new Meetup</title>
        <meta
          name="description"
          content="Add your own meetup and create a amazing networking opportunities!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
};

export default NewMeetupPage;
