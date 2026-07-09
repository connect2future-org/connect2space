import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactForm = () => {

const {register,handleSubmit,reset}=useForm();

const submit=(data)=>{

console.log(data);

toast.success("Enquiry Submitted Successfully");

reset();

}

return(

<form

onSubmit={handleSubmit(submit)}

className="glass rounded-[34px] p-10 space-y-6"

>

<input

placeholder="Your Name"

{...register("name")}

className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 outline-none"

/>

<input

placeholder="Phone"

{...register("phone")}

className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 outline-none"

/>

<input

placeholder="Email"

{...register("email")}

className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 outline-none"

/>

<select

{...register("service")}

className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4"

>

<option>Podcast Studio</option>

<option>Workspace</option>

<option>Meeting Room</option>

<option>Photography</option>

<option>Events</option>

</select>

<textarea

rows={6}

placeholder="Message"

{...register("message")}

className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4"

/>

<button

className="btn-primary w-full"

>

Send Enquiry

</button>

</form>

)

}

export default ContactForm