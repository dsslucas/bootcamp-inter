import { useState, useEffect } from 'react';
import { Grid, Button, TextField } from '@material-ui/core/';

const Contatos = () => {

    //Link de acesso para a API.
    //ATENÇÃO: DEVE STARTAR O BACKEND!
    const url = 'http://localhost:5000/message'

    //Estados estabelecidos para a aplicação
    const [message, setMessage] = useState([]);
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [validator, setValidator] = useState(false);
    const [render, setRender] = useState(false);
    const [success, setSuccess] = useState(false);

    //Efeito que trabalha sobre uma função assíncrona
    useEffect(async () => {
        const response = await fetch(url)
        const data = await response.json();
        setMessage(data);
    }, [render])
    //Monitora a consulta. Entra em ação apenas quando há alteração.

    const sendMessage = () => {
        setValidator(false);

        //Caso não tneha mensagem. Vai pedir para preencher os campos do formulário
        if(author.length <= 0 || content.length <= 0){
            return setValidator(!validator)
        }

        //Corpo da requisição
        const bodyForm = {
            email: author,
            message: content,
        }

        //Consome a API
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyForm)
        })
        //"Depois que fez, confere se tá certo"
        .then((response) => response.json())

        //"Depois que terminar, confirmar os dados"
        .then((data) => {
            if(data.id) {
                setRender(true);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 5000)
            }
        })
        
        setAuthor('');
        setContent('');
        
        console.log(content)
    }  

    return(
        <>
            <Grid container direction="row" xs={12}>
                <TextField id="name" label="Name" value={author} onChange={(event)=>{setAuthor(event.target.value)}} fullWidth/>
                <TextField id="message" label="Message" value={content} onChange={(event)=>{setContent(event.target.value)}} fullWidth/>
            </Grid>

            {validator && 
                <div className="alert alert-warning alert-dismissible fade show mt-2" role="alert">
                    <strong>Por favor preencha todos os campos!</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }

            {success && 
                <div className="alert alert-success alert-dismissible fade show mt-2" role="alert">
                    <strong>Mensagem foi enviada</strong>
                </div>
            }

            <Button onClick={sendMessage} className="mt-2" variant="contained" color="primary">
                Sent
            </Button>

            {message.map((content) => {
                return(
                    <div className="card mt-2" key={content.id}>
                        <div className="card-body">
                            <h5 className="card-title">{content.email}</h5>
                            <p className="card-text">{content.message}</p>
                            <p className="card-text"><small className="text-muted">{content.created_at}</small></p>
                        </div>
                    </div>
                )
            } )}
        </>
    )
}

export default Contatos;
