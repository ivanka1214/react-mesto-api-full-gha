import Header from "../Header/Header";
import Main from "../Main/Main";


export default function ProtectedHome({dataUser, ...props}) {
  return(
    <>
      <Header dataUser={dataUser}/>
      <Main
        name='main'
        {...props}
      />
    </>
  )
}
