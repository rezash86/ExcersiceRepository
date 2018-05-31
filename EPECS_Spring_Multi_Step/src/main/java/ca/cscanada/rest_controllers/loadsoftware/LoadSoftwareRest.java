package ca.cscanada.rest_controllers.loadsoftware;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ca.cscanada.model.LoadSoftwareStatus;
import ca.cscanada.model.Status;

import ca.cscanada.model_controller.LoadSoftwareController; 
@RestController
@RequestMapping("/loadsoftware")
public class LoadSoftwareRest {

	@Autowired
	LoadSoftwareController loadSoftwareController;

	// Logger instance
	private static final Logger logger = Logger.getLogger(LoadSoftwareRest.class);

	@RequestMapping(value = "/load/", method = RequestMethod.POST)
	public ResponseEntity<Status> LoadSoftware() {
		loadSoftwareController.loadSoftware();
		logger.info("Starting loading software");
		Status status = new Status("Starting loading software");
		return new ResponseEntity<Status>(status, HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(value = "/load/", method = RequestMethod.GET)
	public ResponseEntity<LoadSoftwareStatus> getLoadSoftwareStatus() {
		LoadSoftwareStatus result = loadSoftwareController.getLoadSoftwareStatus();
		return new ResponseEntity<LoadSoftwareStatus>(result, HttpStatus.OK);
	}
	

}
