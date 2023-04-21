import { Button, Container, TextInput } from "@mantine/core";
import type { ActionFunction } from "@remix-run/node";
import { redirect, Request } from "@remix-run/node"
import { Form } from "@remix-run/react";
import{ db } from "~/utils/db.server"


const randomstring = require("randomstring");
const random = randomstring.generate({
  length: 12, 
  charset: 'abcdefghijklmnopqrstuvwxyz1234567890'})


export const action: ActionFunction = async ({request}) =>{
  const form = await request.formData();
  const redirectUrl = form.get("redirectUrl")

  if(typeof redirectUrl !== "string") {
    throw new Error("Invalid redirectUrl");
  };

  const fields = {redirectUrl, trackId: random };

  const track = await db.track.create({
    data: fields,
  });

  console.log('*******'+redirectUrl+'*******')

  return redirect(`/tracks/${track.trackId}`)
};

export default function Index() {
  return (
  <Container>
    <Form method="post" style={{display: "flex", alignItems: "flex-end"}}>
      <TextInput  
      
      size="xl"
      placeholder="https://google.com"
      label="Redirect URl"
      required
      name="redirectUrl"
      style={{flex:1}}
      type="url"
      />

      <Button ml="md" size="xl" type="submit">
        Create tracker
      </Button>
    </Form>
  </Container>
  );
};
