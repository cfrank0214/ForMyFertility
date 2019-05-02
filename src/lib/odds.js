'use strict';
import { API } from 'aws-amplify'

module.exports = class Odds  {
    constructor() {
        this.Odds = {};
    }

    async getOdds(formID, currentIVF) {
        console.log(`the formID is ${formID} and the currentIVF is ${currentIVF}`)
        try {
            let fertilityResults = await API.get('oddsapi', `/odds/${formID}`);
            console.log(`the odds results are ${JSON.stringify(fertilityResults)} `)
                if (currentIVF === "no") {
                    this.Odds = ({ fertilityResults: {
                        propLiveBirth:  fertilityResults.propLiveBirth / 100 
                    }
                })    
                } else {
                    this.Odds = ({ fertilityResults: fertilityResults });
                }
                return this.Odds;
            } catch (e) {
                alert(e.message);
                return e.message;
              }
    }
}

