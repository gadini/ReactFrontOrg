import TextField from '../textField'
import './Form.css'

const Form = () => {
    return (
        <section className='form-field'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label='Nome' placeholder='Digite o seu nome' />
                <TextField label='Cargo' placeholder='Digite o seu cargo' />
                <TextField label='Imagem' placeholder='Digite o endereço da imagem'/>
                <TextField label='Time' placeholder='Digite o seu time' />
            </form>
        </section>
    )
}

export default Form