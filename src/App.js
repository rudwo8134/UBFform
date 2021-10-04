import  {useState} from "react";
import styled from "styled-components";
import { AiFillPhone, AiTwotoneMail } from 'react-icons/ai';
import {IoIosSchool} from 'react-icons/io'
import {BsGenderTrans} from 'react-icons/bs'
import {v4 as uuid} from 'uuid'

import Logo from './asset/logo.png'
import background from './asset/background.jpg'
import { firestore } from "./firebase";
import Loader from "react-loader-spinner";


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
  @media screen and (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
 
`;

const Formcontainer = styled.div`
  width: 700px;
  height: 80vh;
  background-color: white;
  position: relative;
  margin: 2rem;
  border-radius: 30px;
  box-shadow: 0px 1rem 1.5rem rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin: 0;
    width: 700px;
    height: 90%;
    border-radius: 20px;
  }
  @media screen and (max-width: 480px) {
    width: 90vw;
    height: 90vh;
    margin: 1rem;
  }
  .maincontainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 380px) {
      margin-bottom: 1rem;
      margin-top: 0rem;
    }
    @media screen and (max-width: 320px) {
      margin-bottom: 0.5rem;
      margin-top: 0rem;
    }
    img {
      width: 100px;
      height: 50px;
      margin-right: 2rem;
      @media screen and (max-width: 480px) {
        margin-right: 1rem;
        width: 70px;
        height: 40px;
      }
      @media screen and (max-width: 380px) {
        width: 50px;
        height: 30px;
      }
    }
  }
  .MainName {
    font-size: 2.4rem;
    text-transform: capitalize;
    font-weight: 800;
    @media screen and (max-width: 480px) {
      font-size: 1.1rem;
    }
    @media screen and (max-width: 380px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 320px) {
      font-size:0.8rem;
    }
  }
`;

const Formcomponent = styled.form`
  margin-top: 2rem;
  width: 500px;
  height: 80%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-top: 3rem;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    margin-top: 0;
    padding: 1rem;
    align-items: center;
  }
  @media screen and (max-width: 380px) {
    width: 90%;
    padding: 0.5rem;
  }
  @media screen and (max-width: 320px) {
    width: 90%;
    padding: 0.3rem;
  }
  .optionbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px) {
      margin-top: 2rem;
    }
    @media screen and (max-width: 480px) {
      margin-top: 1rem;
      width: 100%;
      margin-bottom: 1rem;
    }
    .lablecontainerselect {
      display: flex;
      flex-direction: column;

      select {
        border: none;
        padding: 0.8rem;
        width: 200px;
        font-size: 14px;
        border-bottom: 0.5px solid #c6c6c6;
        @media screen and (max-width: 480px) {
          width: 100%;
        }
        @media screen and (max-width: 380px) {
          font-size: 12px;
          
        }
        @media screen and (max-width: 320px) {
          font-size: 10px;
        }
        &:focus {
          outline: 2px solid #e24429;
        }
      }
    }
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  label {
    font-size: 16px;
    color: #000000;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      margin-top: 1.2rem;
    }
    @media screen and (max-width: 480px) {
      font-size: 14px;
      font-weight: 500;
      align-self: flex-start;
      margin-top: 0.3rem;
    }
    @media screen and (max-width: 380px) {
      font-size: 12px;
    }
    @media screen and (max-width: 320px) {
      font-size: 10px;
    }
    svg {
      margin-right: 0.5rem;
      color: #c7c7c7;
    }
  }
  input {
    width: 100%;
    height: 50px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    box-shadow: 4px 10px 20px rgba(0, 0, 0, 0.1);
    font-size: 18px;
    padding: 1rem;
    transition: all 0.3s ease-in-out;
    margin: 0.65rem 0;
    @media screen and (max-width: 768px) {
      margin-top: 1rem;
    }
    @media screen and (max-width: 480px) {
      width: 100%;
      font-size: 12px;
      height: 30px;
      margin-top: 0.3rem;
    }
    @media screen and (max-width: 320px) {
      font-size: 10px;
      margin-top: 0.1rem;
    }
    &:focus {
      outline: 2px solid #e24429;
    }
    ::placeholder {
      font-size: 1rem;
      color: #c2c2c2;
      @media screen and (max-width: 480px) {
        font-size: 12px;
      }
      @media screen and (max-width: 380px) {
        font-size: 10px;
      }
      @media screen and (max-width: 320px) {
        font-size: 8px;
      }
    }
  }
  .inputbox {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 480px) {
      justify-content: space-between;
      width: 100%;
    }
    input {
      @media screen and (max-width: 480px) {
        width: 100%;
      }
      @media screen and (max-width: 380px) {
        width: 90%;
      }
      @media screen and (max-width: 320px) {
        width: 100%;
      }
    }

    .diveder {
      display: flex;
      flex-direction: column;
    }
  }
  .selectbox {
    margin-top: 0.65rem;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    select {
      border: none;
      padding: 0.8rem;
      font-size: 14px;
      border-bottom: 0.5px solid #c6c6c6;

      @media screen and (max-width: 480px) {
        padding: 0.3rem;
        font-size: 12px;
      }
      @media screen and (max-width: 320px) {
        padding: 0.2rem;
        font-size: 10px;
      }
      :focus {
        outline: 1px solid #e24429;
      }
    }
  }
  .submitbutton {
    border: none;
    padding: 1rem 5rem;
    text-align: center;
    margin: 3rem auto;
    font-size: 1.2rem;
    font-weight: 800;
    border-radius: 30px;
    border: 1px solid #fff;
    background-color: #e24429;
    box-shadow: 4px 10px 20px rgba(0, 0, 0, 0.1);
    color: #fff;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 380px) {
      padding: 0.5rem 3rem;
      font-size: 0.8rem;
      margin: 2rem auto;
    }
    @media screen and (max-width: 320px) {
      padding: 0.2rem 2rem;
      font-size: 0.8rem;
      margin: 1rem auto;
    }
    :hover {
      border: 1px solid black;
      color: #fff;
      background-color: black;
    }
  }
`;
const Endingmessage = styled.div`
  margin-top: 3rem;
  text-align: center;
  font-size: 1.2rem;
  h3 {
    margin-top: 2rem;
    color: green;
    font-size: 1.5rem;
    text-align: center;
  }
  h1 {
    font-size: 1.8rem;
    text-align: center;
  }
  h4 {
    color: red;
    margin-top: 2rem;
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Loadingcontainer =styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
function App() {
  const [credential, setcredential] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    Year: '',
    gender: '',
    haveyouread: '',
    biblestudy: '',
    whichday: '',
  });
  const [loading,setloading] = useState(false)
  const [success, setsuccess] = useState(false)
  const [error,seterror] = useState(undefined)

 
  const queryid =uuid()
  const Handlechange = (event) =>{
    const {name, value} =event.target
    setcredential({ ...credential, [name]: value });
  }

  const HandleSubmit = async (e) =>{
    e.preventDefault()
    setloading(true)
    const Ref = await firestore.doc(`info/${queryid}`);
    try{
      await Ref.set({
        ...credential
      });
      await setloading(false);
      await setsuccess(true);
    }catch(err){
      seterror(err.message)
      await setloading(false);
      await setsuccess(true);
    }
  }


  return (
    <Wrapper>
      <Formcontainer>
        <div className="maincontainer">
          <img src={Logo} alt="Logoimage" />
          <h1 className="MainName">University Bible FellowShip</h1>
        </div>

        {success ? (
          <Endingmessage>
            {error ? (
              <h4>{error}. please try later</h4>
            ) : (
              <h3> Successfully submitted</h3>
            )}
            <br />
            <h1> Thank you for participate.</h1>
            <br />
            You can close the website
          </Endingmessage>
        ) : (
          <Formcomponent onSubmit={HandleSubmit}>
            <div className="inputbox">
              <div className="diveder">
                <label htmlFor="firstname" className="firstname">
                  First Name
                </label>
                <input
                  name="firstname"
                  type="text"
                  id="firstname"
                  placeholder="Enter your Fist name"
                  onChange={Handlechange}
                  value={credential.firstname}
                  required
                />
              </div>
              <div className="diveder">
                <label htmlFor="lastname">Last name</label>
                <input
                  name="lastname"
                  type="text"
                  id="lastname"
                  placeholder="Enter your Last name"
                  onChange={Handlechange}
                  value={credential.lastname}
                  required
                />
              </div>
            </div>
            <label htmlFor="email">
              <AiTwotoneMail />
              Email Address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              onChange={Handlechange}
              value={credential.email}
              placeholder="Enter your Email Address"
              required
            />
            <label htmlFor="phonenumber">
              <AiFillPhone />
              Phone number
            </label>
            <input
              value={credential.phonenumber}
              className="numberbox"
              name="phonenumber"
              type="number"
              onChange={Handlechange}
              id="phonenumber"
              placeholder="ex) 6475308134"
              required
            />
            <div className="optionbox">
              <div className="lablecontainerselect">
                <label htmlFor="Year">
                  <IoIosSchool />
                  Year
                </label>
                <select
                  name="Year"
                  type="text"
                  id="Year"
                  value={credential.Year}
                  onChange={Handlechange}
                  required
                >
                  <option>Select</option>
                  <option value="1">First Year</option>
                  <option value="2">Second Year</option>
                  <option value="3">Third Year</option>
                  <option value="4">Fourth Year</option>
                </select>
              </div>
              <div className="lablecontainerselect">
                <label htmlFor="gender">
                  <BsGenderTrans />
                  Gender
                </label>
                <select
                  name="gender"
                  type="text"
                  id="gender"
                  value={credential.gender}
                  onChange={Handlechange}
                  defaultValue="Male"
                  required
                >
                  <option>Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="NA">No answer</option>
                </select>
              </div>
            </div>

            <div className="selectbox">
              <label htmlFor="haveyouread">1. Have you Read the Bible?</label>
              <select
                name="haveyouread"
                id="haveyouread"
                value={credential.haveyouread}
                onChange={Handlechange}
                defaultValue="yes"
                required
              >
                <option>Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="selectbox">
              <label htmlFor="biblestudy">
                2. Would you like to study the Bible?
              </label>
              <select
                name="biblestudy"
                id="biblestudy"
                value={credential.biblestudy}
                onChange={Handlechange}
                defaultValue="yes"
                required
              >
                <option>Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="selectbox">
              <label htmlFor="whichday">
                3. Which day prefet to have bible study?
              </label>
              <select
                name="whichday"
                id="whichday"
                value={credential.whichday}
                onChange={Handlechange}
                defaultValue="Tues"
              >
                <option>Select</option>
                <option value="Tues">Tues, 11am</option>
                <option value="Thurs">Thurs, 11am</option>
              </select>
            </div>
            {loading ? (
              <Loadingcontainer>
                <Loader
                  width="80"
                  height="80"
                  type="Circles"
                  color="#e24429"
                  timeout="10000"
                />
              </Loadingcontainer>
            ) : (
              <button type="submit" className="submitbutton">
                Submit
              </button>
            )}
          </Formcomponent>
        )}
      </Formcontainer>
    </Wrapper>
  );
}

export default App;
