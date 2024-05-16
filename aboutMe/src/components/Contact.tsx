import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react"
import { useState } from "react"

const Contact = () => {
    const [input, setInput] = useState('')
  
    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === ''
  
    return (
        <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
         <form action="" method="POST" encType="multipart/form-data">

        <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input placeholder='First name' />

            <FormLabel>Last name</FormLabel>
            <Input placeholder='Last name' />
        </FormControl>

        <FormControl isInvalid={isError}>
            <FormLabel>Email</FormLabel>
                <Input placeholder="Email" type='email' value={input} onChange={handleInputChange} />
                {!isError ? (
                     <FormHelperText>We'll never share your email.</FormHelperText>
                ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
         </FormControl>
<FormControl isRequired>
    <FormLabel>Subject</FormLabel>
    <Input placeholder="Subject" type="text" name="subject"/>

                <FormLabel>Message</FormLabel>
                <Textarea name="message" rows={10} placeholder='Please write a Message' />
</FormControl>
         </form>
         </div>
         
    )
  }

  export default Contact