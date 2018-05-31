/**
 * WARNING This document contains technical data the export of which is or
 * may be restricted by Canada's Export and Import Permits Act R.S.C., 1985, c. E-19.
 * Diversion contrary to Canadian law is prohibited. The export, re-export,
 * transfer or re-transfer of this technical data to any other company, entity,
 * person, or destination, or for any use or purpose other than that for which
 * the technical data was originally provided, is prohibited without prior
 * written approval from CS-Canada and authorization under applicable export
 * control laws. Exported under the authority of license exception provided by
 * the Export Control List (ECL).
 * 
 * ECL Classification [P-ECCN US classification]: NLR [N/A]
 * 
 * Copyright 2017 CS Communication and Systems Canada Inc. All Rights Reserved.
 * 
 * The Information contained herein is confidential property of CS Communication
 * and Systems Canada Inc.
 * 
 * The use, copying, transfer or disclosure of such information is prohibited
 * except by express written agreement with CS Communication and Systems Canada
 * Inc.
 */

package ca.cscanada.model_controller;

import java.util.LinkedList;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ca.cscanada.model.Configuration;
import ca.cscanada.model.LoadSoftwareProgress;
import ca.cscanada.model.LoadSoftwareStatus;
import ca.cscanada.model.SoftwareCRC;
import ca.cscanada.rest_controllers.configuration.ConfigurationRest;

/**
 *
 * @author tbdiri
 */

@Component
public class LoadSoftwareController {
	class StatusUpdater extends Thread {
		@Override
		public void run() {

			for (LoadSoftwareProgress softwareInProgress : _loadSoftwareStatus.getProgressList()) {
				while (Integer.parseInt(softwareInProgress.getProgress()) < 100) {
					try {
						Thread.sleep(1000);
						int newProgress = Integer.parseInt(softwareInProgress.getProgress()) + 10;
						softwareInProgress.setProgress(String.valueOf(newProgress));
						if (Integer.parseInt(softwareInProgress.getProgress()) > 100) {
							softwareInProgress.setProgress("100");
						}
						logger.info("Name:" + softwareInProgress.getName() + ", Progress:"
								+ softwareInProgress.getProgress());

					} catch (InterruptedException e) {
						return;
					}

				}
			}
			_loadSoftwareStatus.setOverallStatus("100");
		}
	}

	// Logger instance
	private static final Logger logger = Logger.getLogger(LoadSoftwareController.class);

 
	private final LoadSoftwareStatus _loadSoftwareStatus = new LoadSoftwareStatus();
	private StatusUpdater statusUpdater;

	public void loadSoftware() {
		if(statusUpdater != null) { 
			statusUpdater.interrupt();
			try {
				statusUpdater.join();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		_loadSoftwareStatus.getProgressList().clear();
		_loadSoftwareStatus.setOverallStatus("0");
		LoadSoftwareProgress os = new LoadSoftwareProgress("os", "1");
		LoadSoftwareProgress as = new LoadSoftwareProgress("as", "1");
		LinkedList<LoadSoftwareProgress> progressList = new LinkedList<LoadSoftwareProgress>();
		progressList.add(as);
		progressList.add(os);
		_loadSoftwareStatus.setProgressList(progressList);
		statusUpdater = new StatusUpdater();
		statusUpdater.start();
	}

	public LoadSoftwareStatus getLoadSoftwareStatus() {
		return _loadSoftwareStatus;
	}
}
