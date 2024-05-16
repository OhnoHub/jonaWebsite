import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react"
import { useState } from "react"

const Contact = () => {
    const [input, setInput] = useState('')
  
    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === ''
  
    return (
        <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
         <form action="" method="POST" encType="multipart/form-data">

        <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input placeholder='First name' />

            <FormLabel className="pt-4">Last name</FormLabel>
            <Input placeholder='Last name' />
        </FormControl>

        <FormControl isInvalid={isError}>
            <FormLabel className="pt-4">Email</FormLabel>
                <Input placeholder="Email" type='email' value={input} onChange={handleInputChange} />
                {!isError ? (
                     <FormHelperText>I'll never share your data.</FormHelperText>
                ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
         </FormControl>

        <FormControl isRequired>
            <FormLabel className="pt-4">Subject</FormLabel>
            <Input placeholder="Subject" type="text" name="subject"/>

            <FormLabel className="pt-4">Message</FormLabel>
            <Textarea name="message" rows={10} placeholder='Please write a Message' />
        </FormControl>

        <button className="bg-gray-800 text-gray-100 mt-4 w-full p-4 rounded-lg">Send Message</button>
         </form>
         </div>
         
    )
  }

  export default Contact