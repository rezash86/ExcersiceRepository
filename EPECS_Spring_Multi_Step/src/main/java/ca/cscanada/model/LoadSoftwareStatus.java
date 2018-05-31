package ca.cscanada.model;

import java.util.LinkedList;

import org.springframework.stereotype.Component;

@Component
public class LoadSoftwareStatus {
	private LinkedList<LoadSoftwareProgress> progressList = new LinkedList<LoadSoftwareProgress>();
	private String overallStatus = "0";

	public LinkedList<LoadSoftwareProgress> getProgressList() {
		return progressList;
	}

	public void setProgressList(LinkedList<LoadSoftwareProgress> progressList) {
		this.progressList = progressList;
	}

	public String getOverallStatus() {
		return overallStatus;
	}

	public void setOverallStatus(String overallStatus) {
		this.overallStatus = overallStatus;
	}
	
	
}
