import { useState } from "react"

const AppHook = () => {
    const [sistolica, setSistolica] = useState('')
    const [diastolica, setDiastolica] = useState('')
    const [resultPressao, setResultPressao] = useState('')

    const calcular = () => {
        if (sistolica < 130 && diastolica < 85) {
            setResultPressao("Normal")
        } else if (sistolica < 140 && diastolica < 90) {
            setResultPressao('Normal - Limítrofe')
        } else if (sistolica < 160 && diastolica < 100) {
            setResultPressao('Hipertensão leve')
        } else if (sistolica < 180 && diastolica < 110) {
            setResultPressao(' Hipertensão moderada')
        } else {
            setResultPressao(' Hipertensão grave')
        }
    }


    return (
        <div>
            <h1>Controle de pressão</h1> <br></br>
            Pressão Sistólica: <br />
            <input type="text" name='sistolica' onChange={(event) => setSistolica(event.target.value)} />


            <br />
            <br />

            Pressão Diastólica: <br />
            <input type="txt" name='diastolica' onChange={(event) => setDiastolica(event.target.value)} />
            <br /><br />

            <input type="button" value="Verificar"
                onClick={calcular} />

            <br></br>

            Result: {resultPressao}
        </div>
    )

}
export default AppHook