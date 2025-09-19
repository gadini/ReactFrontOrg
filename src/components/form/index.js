import ButtonField from '../button'
import DropDown from '../dropDown'
import TextField from '../textField'
import './Form.css'

const Form = () => {

    const times = [ 'Back-End', 'Front-End', 'Dados', 'Segurança']

    const onSaving = (event) => {
        event.preventDefault()
        console.log("Form submetido com sucesso")
    }

    return (
        <section className='form-field'>
            <form onSubmit={onSaving} >
                <h2>Preencha os dados para cadastrar colaborador</h2>
                <TextField mandatory={true} label='Nome' placeholder='Digite o seu nome' />
                <TextField mandatory={true} label='Cargo' placeholder='Digite o seu cargo' />
                <TextField label='Imagem' placeholder='Digite o endereço da imagem'/>
                <DropDown label='Time' items={times} />
                <ButtonField text='Cadastrar' />
            </form>
        </section>
    )
}

export default Form