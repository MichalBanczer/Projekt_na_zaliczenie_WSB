class btnOpenAccount{
    get button() { 
        return cy.get('.button').contains(".button","Zakładam konto");
    }

    clickBtnOpenAccount(){
        this.button.click();
    }

    verifyBtnOpenAccount(text){
        this.button.should("contain",text);
    }
    

}

export default new btnOpenAccount();