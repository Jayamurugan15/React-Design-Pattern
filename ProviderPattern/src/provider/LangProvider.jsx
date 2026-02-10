import React , {useState} from 'react'
import { LangContext } from '../context';

export const translations = {
  en: {
    hi:"Hi",
    login: "Login",
    logout: "Logout",
    welcome: "Welcome",
    theme: "Change Theme",
    note:"Enter Your name",
    success: "You are successfully logged in.",
    danger:"Enter UserName"
  },
  ta: {
    hi:"வணக்கம்",
    login: "உள்நுழை",
    logout: "வெளியேறு",
    welcome: "வரவேற்கிறோம்",
    theme: "தோற்றத்தை மாற்று",
    note:"உங்கள் பயனர்பெயரை உள்ளிடவும்",
    success: "நீங்கள் வெற்றிகரமாக உள்நுழைந்துள்ளீர்கள்",
    danger:"பயனர்பெயரை உள்ளிடவும்"
  },
  ml: {
  hi: "ഹായ്",
  login: "ലോഗിൻ",
  logout: "ലോഗൗട്ട്",
  welcome: "സ്വാഗതം",
  theme: "തീം മാറ്റുക",
  note: "നിങ്ങളുടെ പേര് നൽകുക",
  success: "നിങ്ങൾ വിജയകരമായി ലോഗിൻ ചെയ്തിരിക്കുന്നു",
  danger: "ദയവായി ഉപയോക്തൃനാമം നൽകുക"
}

};


const LangProvider = ({children}) => {
    const [language,setLanguage ] = useState("en");
    const translate = (key) =>  translations[language][key] || key;

    const changeLanguage = (lang) => {
        setLanguage(lang)
    }

  return (
    <LangContext.Provider value={{language,translate,changeLanguage}}>
        {children}
    </LangContext.Provider>
  )
}

export default LangProvider