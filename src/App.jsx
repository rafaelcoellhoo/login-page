import { useState } from "react"
import imgAnimada from "/animada.svg"
import { ToastContainer, toast } from 'react-toastify';

export default function App(){
  //hooks (gancho)
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  //função para usar no click do botão
  function clickLogin(){
    if (!user || !pass){
      return toast.error("Preencha todos os campos!")
    }

    if(user.length < 8 || pass.length < 8){
      return toast.error("Usuário ou senha inválidos")
    }
    //requisição para o backend
    console.log(user)
    console.log(pass)
    toast.success('Sucesso', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

    return (
      <div className="w-full h-screen flex bg-[#201B2C]">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          theme="colored"
         />
        <div className="w-[50%] h-full flex items-center justify-center flex-col">
            <h1 className="text-[30px] font-bold text-[#00FF88]">Entre para o nosso time</h1>
            <img src={imgAnimada} alt="imagem-anima" width={500} />
        </div>
        <div className="w-[50%] h-full flex items-center justify-center">
            <div className="w-[50%] h-[350px] bg-[#2F2942] rounded-xl">
                <div className="w-full h-[15%] flex items-center justify-center">
                  <h1 className="text-[30px] text-[#00FF88] font-bold">LOGIN</h1>
                </div>
                <div className="w-full h-[60%] p-[20px]">
                    <label htmlFor="user" className="text-white">Usuário</label>
                    <input 
                    onChange={
                      (event) => {setUser(event.target.value)}
                    }
                    type="text" 
                    id="user" 
                    className="w-full rounded-md p-[10px] bg-[#514768] text-white mb-4" 
                    />

                    <label htmlFor="pass" className="text-white">Senha</label>
                    <input 
                    onChange={
                      (event) => {setPass(event.target.value)}
                    }
                    type="password" 
                    id="pass" 
                    className="w-full rounded-md bg-[#514768] p-[10px] text-white" 
                    />
                    <div className="w-full flex items-center justify-center text-white pt-1">
                      <a href="">Esqueceu a sua senha?</a>
                    </div>
                </div>
                <div className="w-full h-[25%] p-[20px] flex items-center">
                  <button
                  onClick={clickLogin} 
                  className="w-full h-[50px] text-[18px] font-bold text-[#201B2C] shadow-lg shadow-[#33f79c63] rounded-lg bg-[#00ff88]">LOGIN</button>
                </div>
            </div>
        </div>
      </div>
    )
}