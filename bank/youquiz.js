const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

console.log(chalk.bgRed.green("\nBem-vindo ao Quiz YouQuiz!\n"))
menu();

async function menu() {
    await inquirer.prompt([
        {
            name: 'nameQuiz',
            message: 'Escolha uma das opções abaixo',
            type: 'list',
            choices: [
                'Anime',
                'Mangá',
                'Filme',
                'Serie',
                'Dorama',
                'Desenho',
                'Sair'
            ]
        }
    ]).then((answer) => {
        console.log(chalk.bgBlack.green(`Opção Selecionada: ${answer.nameQuiz}\n`));

        const option = answer['nameQuiz'];

        if (option === 'Anime') {

        } else if (option === 'Mangá') {
            operationManga();
        } else if (option === 'Filme') {

        } else if (option === 'Serie') {

        } else if (option === 'Dorama') {

        } else if (option === 'Desenho') {

        } else if (option === 'Sair') {
            console.log(chalk.bgWhite.green("Obrigado por usar o YouQuiz!\n"), chalk.bgRed.white("Desenvolvido por Henrique Maximo, 2023."));
            process.exit();
        }
    }).catch(err => console.log(err));
}

function operationManga() {
    inquirer.prompt([
        {
            name: 'value',
            message: 'Escolha um mangá:',
            type: 'list',
            choices: [
                'Attack On Titan',
                'Tokyo Ghoul',
                'Re:Zero',
                'Chainsaw Man'
            ]
        }
    ]).then((answer) => {
        const optionManga = answer['value'];
        console.log(`O  escolhido foi: ${optionManga}\n`);

        if (optionManga === "Attack On Titan") {
        } else if (optionManga === "Tokyo Ghoul") {

        } else if (optionManga === "Re:Zero") {

        } else if (optionManga === "Chainsaw Man") {

        }
    }).catch((err) => {
        console.log(`Erro: ${err}`);
    })
}