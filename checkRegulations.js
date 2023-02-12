class checkRegulations{
    get checkboxAll() { 
        return cy.get("#check_all");
    }

    get checkboxAgreement() { 
        return cy.get("#zgoda");
    }

    get checkboxNewsletter() { 
        return cy.get("#newsletter_tak");
    }

    checkCheckboxRegulations(){
        this.checkboxAll.check({force: true});
    }

    verifyCheckbox(){
        this.checkboxAll.should('be.checked');
        this.checkboxAgreement.should('be.checked');
        this.checkboxNewsletter.should('be.checked');
    }

}

export default new checkRegulations();