/// <reference types="cypress" />

import checkRegulations from "../support/pageObject/checkRegulations";
import logInPage from "../support/pageObject/logInPage";
import registerInPage from "../support/pageObject/registerInPage";
import completingForm from "../support/pageObject/completingForm";
import dropDownList from "../support/pageObject/dropDownList";
import btnOpenAccount from "../support/pageObject/btnOpenAccount";

describe("E2E - Rejestracja użytkownika",()=>{
    it("Otwórz stronę główną helion.pl", ()=>{
        cy.visit("https://helion.pl");
    })
    
    it('Wejdź na zakładkę "Twoje konto"', ()=>{
        logInPage.verifyBtnText("Zaloguj się");
        logInPage.clickBtnZalogujSie();
    })

    it('Naciśnij "Zarejestruj się"', ()=>{
        registerInPage.verifyBtnVisible();
        registerInPage.clickBtnZarejestrujSie();
    })

    it('Rozwiń pełną listę pól naciskajac "opcjonalnie uzupełnij dane teleadresowe"', ()=>{
        dropDownList.clickBtnPelneDane();
        dropDownList.verifyLinkText();
    })

    it("Wypełnij formularz rerestacji bez podawania nr telefonu", ()=>{
        completingForm.completingForm();

    })

    it("Zaznacz checkbox akceptujący regulamin", ()=>{
        checkRegulations.checkCheckboxRegulations();
        checkRegulations.verifyCheckbox();
    })

    it('Naciśnij "Zakładam konto"', ()=>{
        btnOpenAccount.verifyBtnOpenAccount("Zakładam konto");
        btnOpenAccount.clickBtnOpenAccount();
    })

    it("Sprawdzanie treści z komunikatu", ()=>{
        cy.get("#telefon-error").invoke('text')
        .should('equal', 'Podaj 9 cyfowy numer telefonu')
        })
       
})
