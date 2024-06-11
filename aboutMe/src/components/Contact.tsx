import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState, ChangeEvent } from "react";

const Contact = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const isError = input === "";

  //evtl die placeholder rausnehmen
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center pb-8">Contact</h1>
      <form
        action="https://formspree.io/f/mqkrrpwv"
        method="POST"
        encType="multipart/form-data"
      >
        <FormControl isRequired>
          <FormLabel htmlFor="first-name" className="uppercase">
            First name
          </FormLabel>
          <Input id="first-name" name="firstName" placeholder="First name" />

          <FormLabel htmlFor="last-name" className="uppercase pt-4">
            Last name
          </FormLabel>
          <Input id="last-name" name="lastName" placeholder="Last name" />
        </FormControl>

        <FormControl isInvalid={isError}>
          <FormLabel htmlFor="email" className="uppercase pt-4">
            Email
          </FormLabel>
          <Input
            id="email"
            placeholder="Email"
            type="email"
            name="email"
            value={input}
            onChange={handleInputChange}
          />
          {!isError ? (
            <FormHelperText>I'll never share your data.</FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="subject" className="uppercase pt-4">
            Subject
          </FormLabel>
          <Input
            id="subject"
            placeholder="Subject"
            type="text"
            name="subject"
          />

          <FormLabel htmlFor="message" className="uppercase pt-4">
            Message
          </FormLabel>
          <Textarea
            id="message"
            name="message"
            rows={10}
            placeholder="Please write a Message"
          />
        </FormControl>

        <button className="bg-gray-800 text-gray-100 mt-4 w-full p-4 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
