package ca.cscanada.rest_controllers.configuration;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ca.cscanada.model.Configuration;
import ca.cscanada.model.Status;
import ca.cscanada.model_controller.ConfigurationController;


@RestController
@RequestMapping("/configuration")
public class ConfigurationRest {

	@Autowired
	ConfigurationController configurationController;

	// Logger instance
	private static final Logger logger = Logger.getLogger(ConfigurationRest.class);

	@RequestMapping(value = "/info/", method = RequestMethod.GET)
	public ResponseEntity<Configuration> getTargetConfiguration() {
		Configuration targetConfiguration = configurationController.getTargetConfiguration();
		logger.info("Received Configuration Target Info Request");
		return new ResponseEntity<Configuration>(targetConfiguration, HttpStatus.OK);
	}

	@RequestMapping(value = "/info/", method = RequestMethod.POST)
	public ResponseEntity<Status> postOperatorAndSerialNumber(
			@RequestParam(value = "operator_name", required = false) String operatorName,
			@RequestParam(value = "serial_number", required = false) String serialNumber) {
		Status status = new Status("Operator Name and Serial Number successfully created");
		logger.info("Operator Name:" + operatorName);
		logger.info("Serial Number:" + serialNumber);
		return new ResponseEntity<Status>(status, HttpStatus.OK);
	}

}
