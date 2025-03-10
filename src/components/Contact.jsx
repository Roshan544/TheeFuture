import React from "react";
import Swal from 'sweetalert2'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ef906ac1-0be5-4c8e-a412-21b46776ec48");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      Swal.fire({
        title: "Success!",
        text: "Message send successfully!",
        icon: "success"
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div name="Contact Us" className="mt-5 mb-5 px-8 md:px-28 py-10">
      <section className="py-12 md:py-0 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <div className="w-full md:w-full flex flex-col md:justify-center items-center px-8 py-5">
            <h3 className="mb-3 text-base opacity-70 text-start md:text-center">
              Send Your Message
            </h3>
            <form onSubmit={onSubmit}>
              <div className="input-box text-start flex flex-col">
                <label
                  className="px-0 font-bold text-[#F38522] text-2xl mt-0 w-50"
                  htmlFor="name"
                >
                  Name :-
                </label>
                <input
                  className="boreder-none outline-none bg-gray-800 text-white font-bold w-80 md:w-110 px-5 py-3 mb-2 ml-2 mr-4 rounded-sm"
                  type="text"
                  placeholder="Enter Your Full Name" name="name" required
                />
              </div>
              <div className="input-box text-start flex flex-col">
                <label
                  className="px-0 font-bold text-[#F38522] text-2xl mt-0 w-50"
                  htmlFor="name"
                >
                  Email id :-
                </label>
                <input
                  className="boreder-none outline-none bg-gray-800 text-white font-bold w-80 md:w-110 px-5 py-3 mb-2 ml-2 mr-4 rounded-sm"
                  type="email"
                  placeholder="Enter Your Email Id" name="email" required
                />
              </div>
              <div className="input-box text-start flex flex-col">
                <label
                  className="px-0 font-bold text-[#F38522] text-2xl mt-0 w-50"
                  htmlFor="name"
                >
                  Phone no :-
                </label>
                <input
                  className="boreder-none outline-none bg-gray-800 text-white font-bold w-80 md:w-110 px-5 py-3 mb-2 ml-2 mr-4 rounded-sm"
                  type="phone"
                  placeholder="Enter Your Phone no." name="phone" required
                />
              </div>
              <div className="input-box text-start flex flex-col">
                <label
                  className="px-0 font-bold text-[#F38522] text-2xl mt-0 w-50"
                  htmlFor="name"
                >
                  Message :-
                </label>
                <textarea
                  className="boreder-none outline-none bg-gray-800 text-white font-bold w-80 md:w-110 px-5 py-3 ml-2 mr-4 rounded-sm h-30"
                  type="message"
                  id=""
                  placeholder="Write Your Message" name="message" required
                ></textarea>
              </div>
              <div className="input-box items-center justify-center flex flex-col">
              <button className='flex px-5 py-2 mt-4 border justify-center items-center bg-[#F38522] hover:bg-orange-600 hover:scale-110 text-white text-xl transition duration-300 shadow-[#F38522]" rounded-3xl border-none' type='submit'>Submit</button>
              </div>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
