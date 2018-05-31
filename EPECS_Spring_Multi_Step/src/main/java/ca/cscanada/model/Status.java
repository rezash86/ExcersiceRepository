package ca.cscanada.model;

public class Status {

	private String _message;

	public Status(String message) {
		_message = message;
	}

	public String getMessage() {
		return _message;
	}

	public void setMessage(String message) {
		_message = message;
	}
}
