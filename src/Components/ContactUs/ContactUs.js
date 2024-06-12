
import "./ContactUs.css"
export default function ContactUs() {

    return (
        <>
            <div class="d-flex justify-content-evenly container-fluid text-start contactmain" style={{ "background-color": "lightblue" }}>
                <div>
                <h1>Have a question?</h1>
                <h4>We love to hear from our customers!</h4>
                <img className="contactimg" src="./Images/contact.png" alt="" width={"100%"} />

                <div class="dropdown widt">
                    <div class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <h6 class="widt">How do I order online?</h6>
                    </div>

                    <ul class="dropdown-menu bg-info" aria-labelledby="dropdownMenuLink">
                        <h6><li><a class="dropdown-item" href="#">You can order our treats via <a>Zomato</a> or <a>Swiggy</a></a></li></h6>


                    </ul>
                </div>
                
                <div class="dropdown widt">
                    <div class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <h6 class="widt">What if there’s an issue with my online order?</h6>
                    </div>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#">For any concerns or complaints, please write to us on guestfeedback@keventers.com and we will get back to you at the earliest. </a></li>


                    </ul>
                </div>

                <div class="dropdown widt">
                    <div class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <h6 class="widt">How can I know more about the loyalty program?</h6>
                    </div>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Click here to see the details about our Loyalty Program.</a></li>


                    </ul>
                </div>
                </div>
                <div className=" p-4 formcontact m-5">

                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder="Name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">E-mail</label>
                        <input type="email" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder="E-mail" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Subject</label>
                        <input type="email" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder="Subject" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control " id="exampleFormControlTextarea1" rows="10"></textarea>
                    </div>

                    <div class="mb-2">
                        <button type="submit" className="btn border border-5 w-100 rounded-pill mt-5 p-3">SEND A MESSAGE</button>
                    </div>


                </div>

            </div>
        </>
    )
}