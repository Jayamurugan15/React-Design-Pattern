import { useContext } from "react"
import { LangContext } from "../context"

const useLanguage = () => {
    const {language,translate,changeLanguage} = useContext(LangContext);

    return {language,translate,changeLanguage}
}

export { useLanguage }