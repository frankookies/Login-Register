import {useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Signup() {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()
    const [image, setImage] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {firstName, lastName, email, address, password, phone, image})
        .then(result => {console.log(result)
            navigate('/login')
        })
        .catch(err => console.log(err))
    }

    function convertToBase64(e){
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result); //base64encoded string
            setImage(reader.result)
        };
        reader.onerror = error => {
            console.lof("Error: ", error);
        };
    }
    
    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-30">
            <h2>Create a client account with Bit Builders</h2>
            <p>Accounts may take up to 2 days to process</p>
            <form onSubmit={handleSubmit}>
                {/*First Name Field*/}
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>First Name:</strong>
                    </label>
                    <input 
                    type="text"
                    placeholder="Enter First Name"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                {/*Last Name Field*/}
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Last Name:</strong>
                    </label>
                    <input 
                    type="text"
                    placeholder="Enter Last Name"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                {/*Email Field*/}
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email:</strong>
                    </label>
                    <input 
                    type="email"
                    placeholder="Enter Email"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {/*Address Field*/}
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Current Address:</strong>
                    </label>
                    <input 
                    type="address"
                    placeholder="Enter Current Address"
                    autoComplete="off"
                    name="address"
                    className="form-control rounded-0"
                    onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                {/*Password Field*/}
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password:</strong>
                    </label>
                        <input 
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    className="form-control rounded-0"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {/*Phone Field*/}
                    <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Phone:</strong>
                    </label>
                        <input 
                    type="phone"
                    placeholder="Enter Phone Number"
                    name="phone"
                    className="form-control rounded-0"
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Upload Valid Government ID Here:</strong>
                        </label>
                        <input 
                            accept="image/*"
                            type="file" 
                            onChange={convertToBase64}
                        />
                        
                        {/*Preview the image being submitted*/}
                        {image=="" || image==null? "" : <img width={300} src={image}/>}
                        
                    </div>
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0 " style={{background: "#B5A9E8", color: "#39197C"}}>
                    Register
                </button>
                <p>Already Have an Account</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none ">
                    Or Sign In Here
                </Link>
                </form>

        </div>
    </div>
    );

}

export default Signup;