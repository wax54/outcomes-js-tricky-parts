function createAccount(pin, amount=0) {
    const INVALID_PIN_RESPONSE ="Invalid PIN.";
    const pinValid = (testPin) => pin === testPin;

    return {
        changePin: function (oldPin, newPin) {
            if(pinValid(oldPin)) {
                pin = newPin;
                return "PIN successfully changed!";
            } else {
                return INVALID_PIN_RESPONSE;
            }
        },
        checkBalance: function(testPin) {
            if(pinValid(testPin)){
                return `$${amount}`;
            } else {
                return INVALID_PIN_RESPONSE;
            }
        },
        deposit: function(testPin, depositAmount) {
            if(pinValid(testPin)) {
                amount += depositAmount;
                return `Succesfully deposited $${depositAmount}. Current balance: $${amount}.`;
            } else {
                return INVALID_PIN_RESPONSE;
            }
        },
        withdraw: function(testPin, withdrawlAmount) {
            if(pinValid(testPin)) {
                if(amount >= withdrawlAmount){
                    amount -= withdrawlAmount;
                    return `Succesfully withdrew $${withdrawlAmount}. Current balance: $${amount}.`
                } else {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled.";
                }
            } else {
                return INVALID_PIN_RESPONSE;
            }
        }
    }
}

module.exports = { createAccount };
