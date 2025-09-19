import ButtonField from '../button'
import DropDown from '../dropDown'
import TextField from '../textField'
import './Form.css'

const Form = () => {

    const times = [ 'Back-End', 'Front-End', 'Dados', 'Segurança']
    return (
        <section className='form-field'>
            <form>
                <h2>Preencha os dados para cadastrar colaborador</h2>
                <TextField label='Nome' placeholder='Digite o seu nome' />
                <TextField label='Cargo' placeholder='Digite o seu cargo' />
                <TextField label='Imagem' placeholder='Digite o endereço da imagem'/>
                <DropDown label='Time' items={times} />
                <ButtonField text='Cadastrar' />
            </form>
        </section>
    )
}

export default Form