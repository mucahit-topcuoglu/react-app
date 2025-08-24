import React from 'react'

export const users =[
    {id:1, username:"kullanici", password:"12345"},
    {id:2, username:"admin", password:"12345"},
]

function Login() {
  return (
    <>
        <h1>Login Ekrani</h1>
        <p>Giris Yapmak Icin Bilgilerinizi Giriniz</p>
        <div> <p>Kullanici Adi </p>
        <input type="text" placeholder='Kullanici Adi' /></div>
        <div><p>Şifre </p>
        <input type="password" placeholder='Sifre' /></div>
        <p></p>
        <button>Giris Yap</button>
    </>
  )
}

export default Login
