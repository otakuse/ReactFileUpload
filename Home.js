import React from "react";
import { useState } from "react"
const Home = () => {
    const[name,setName]= useState("");
    const[email,setEmail]= useState("");
    const[phone,setPhone]= useState("");
    const[password,setPassword]= useState("");
    const[place,setPlace]= useState("");
    const[filedata, setFiledata] = useState({selectedFile:null});
    // On file select (from the pop up)
    const onFileChange = (event) => {
        console.log(event.target.files[0]);
        // Update the state
        setFiledata({ selectedFile: event.target.files[0] });
      
      };
      const handleClick = (e) =>{
          e.preventDefault();
          console.log(filedata);
          // Create an object of formData
            const formData = new FormData();
            
            // Update the formData object
            formData.append(
                "myFile",
                filedata.selectedFile,
                filedata.selectedFile.name
            );
            
            // Details of the uploaded file
            console.log(formData);
            
            // Request made to the backend api
            // Send formData object
            // axios.post("api/uploadfile", formData);
      }
    return ( 
        <div className="home">
            <h1>Registration</h1>
            <form action="">
                <input type="text" name="Name" placeholder="Enter your Name" />
                <input type="text" name="Email" placeholder="Enter your Email"/>
                <input type="text" name="Phone" placeholder="enter your phone no." />
                <input type="Password" name="Password" placeholder="Set password" />
                <input type="file" onChange={onFileChange}/>
                <select name="Place" id="Place">
                    <option  placeholder="hghfh">SELECT PLACE</option>
                    <option value="AMERICA">AMERICA</option>
                    <option value="ASIA">ASIA</option>
                    <option value="EUROPE">EUROPE</option>
                    <option value="AFRICA">AFRICA</option>
                </select>
                <button type="submit" onClick={handleClick}>REGISTER</button>
            </form>
        </div>
     );
}
 
export default Home ;