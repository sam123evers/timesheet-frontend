import axios from 'axios';
import gapi from 'googleapis';

var instance = axios.create({
  baseURL: 'https://sheets.googleapis.com/',
  timeout: 10000,
  headers: {'Authorization': 'Bearer'}
});

var ACTIONS = {
	appendValues(data) {
		var values = [
			[data.resource, data.projectName, data.activity, data.startTime, 
			 data.stopTime, data.date, data.taskName]
		];
		
	
		var body = {
			values: values,
		};
		gapi.client.sheets.spreadsheets.values.append({
	       spreadsheetId: '15T--7tRLkgJsc6VZbiSxPcWHF882hegzmr_Q7eF24Ak',
	       range: 'Sheet1!A1:G1',
	       valueInputOption: "USER_ENTERED",
	       resource: body
	    }).then((response) => {
	    	var result = response.result;
	    	console.log(`${result.updates.updatedCells} cells appended.`)
	    });
		
	}
};

export default ACTIONS

  
		