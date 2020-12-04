var assert = require('assert')

Feature('account');

Scenario('test something', ({ I }) => {
    I.amOnPage('https://www.moncompteformation.gouv.fr/espace-prive/html/#/')
    I.scrollPageToBottom()
    I.click('[title= "Se connecter"] > strong')
    I.click('.cursor-pointer')
    I.click('#fi-dgfip > img')
    I.fillField("#spi_tmp","2323299239")
    I.click("#btnAction")
    let message = I.grabValueFrom("#Cat1_spi")
    assert(message,"Votre numéro fiscal comporte 13 chiffres; veuillez vérifier votre saisie.")
});

Scenario('financeurs mon compte formation', ({I})=> {
    I.amOnPage('https://www.financeurs.moncompteformation.gouv.fr/espace-prive/html/')
    I.fillField('#siret',"47767120000012")
    I.fillField('#prenom',"Guillemette")
    I.fillField('#nom',"Matthieu")
    I.fillField('#password',"password1Z22")
    I.click('Se connecter')
    let error_message = I.grabValueFrom('.error-info')
    assert(error_message, "Les identifiants et mot de passe saisis ne sont pas valides. Veuillez renseigner à nouveau vos données.")
});

