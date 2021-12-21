//Classe de Conta Bancária
class ContaBancaria {
    
    //Constructor, vai utilizar ao longo do código.
    constructor(agencia, numero, tipo){
        //Refere-se ao objeto ContaBancaria
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0
    }

    //Getters e Setters, para manipulação do saldo. Importante colocar um _
    get saldo(){
        return this._saldo
    }

    set saldo(valor){
        this._saldo = valor
    }

    //Métodos de Sacar e Depositar
    sacar (valor){
        //O valor é mais alto que o saldo?
        if(valor > this._saldo) return "Operação inválida! Você não tem saldo suficiente!"

        this._saldo = this._saldo - valor
        return this._saldo
    }

    depositar(valor){
        this._saldo = this._saldo + valor
        return this._saldo
    }
}

//Classe de Conta Corrente
class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        //Super manda tudo pra classe pai. IMPORTANTE COLOCAR O EXTENDS
        super(agencia, numero)

        this.tipo = "corrente"
        this._cartaoCredito = cartaoCredito
    }

    //Getters e Setters, para o cartão de crédito. Importante colocar um _
    get cartaoCredito(){
        return this._cartaoCredito
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor
    }
}

//Classe de Conta Poupança
class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        //Super manda tudo pra classe pai. IMPORTANTE COLOCAR O EXTENDS
        super(agencia, numero)

        this.tipo = "poupanca"
    }
}

//Classe de Conta Universitária
class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        //Super manda tudo pra classe pai. IMPORTANTE COLOCAR O EXTENDS
        super(agencia, numero)

        this.tipo = "universitaria"
    }

    sacar(valor){
        if(valor > 500) return "Você não pode sacar valores superiores a R$ 500!"

        this._saldo = this._saldo - valor
    }
}