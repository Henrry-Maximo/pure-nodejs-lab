// modulos externos
const inquirer = require('inquirer');
const chalk = require("chalk");

// modulos internos
const fs = require('fs');

console.log("Iniciamos o Accounts");
operation();

function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
            'Criar Conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }]).then((answer) => {
        const action = answer['action'];
        if (action === "Criar Conta") {
            createAccount();
        } else if (action === "Consultar Saldo") {

        } else if (action === "Depositar") {
            depositar();
        } else if (action === "Sacar") {

        } else if (action === "Sair") {
            console.log(chalk.bgBlue.blue("Obrigado por usar o Accounts!"));
            process.exit();
        }
    }).catch((err) => console.log(err));
}

// create an account - message
function createAccount() {
    console.log(chalk.bgGreen.black("Parabéns por escolher nosso banco!"));
    console.log(chalk.green("Defina as opções de sua conta a seguir: "));
    buildAccount()
}

// create an account in input
function buildAccount() {
    inquirer.prompt([{
        name: "accountName",
        message: 'Digite um nome para a sua conta: '
    }]).then((answer) => {
        const accountName = answer["accountName"]
        console.info(accountName);

        try {
            if (!fs.existsSync('accounts')) {
                fs.mkdirSync('accounts');
            }
        } catch (err) {
            console.log(`teste>${err}`);
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Está conta já existe, escolha outro nome!'));
            buildAccount();
            return;
        }

        fs.writeFileSync(
            `accounts/${accountName}.json`,
            '{ "balance": 0 }',
            function (err) {
                console.log(`Erro: ${err}`);
            },
        )

        // message return and reboot
        console.log(chalk.green('Parabéns, sua conta foi criada!'));
        operation()
    }).catch(err => console.log(err));
}

function depositar() {
    inquirer.prompt([
        {
            nome: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer) => {
        const accountName = answer['accountName'];

        // verify if account exists
        if (!checkAccount(accountName)) {
            return depositar();
        }

    }).catch(err => console.log(err));
}

function checkAccount(accountName) {
    if (!fs.existsSync(`./accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black("Está conta não existe, escolha outro nome!"));
        return false
    }
    return true
}