
import './App.css'
import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {
  const handleSignUpSubmit = data=> {
    console.log("submit data", data)
  }
  const handleUpdateProfile = (data)=> {
    
    console.log("update data", data)
  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'Sign Up'} btnText={'Submit'} handleSubmit={handleSignUpSubmit }>
        <div>
          <h2>Sign Up</h2>
          <p>Please Fill up the form for sign up.</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Update'} btnText={'Update'} handleSubmit={handleUpdateProfile}>
      <div>
          <h2>Update</h2>
          <p>Always stay your profile updated.</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
