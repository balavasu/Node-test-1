function initPage() {
	onUploadForm();	
};

function onUploadForm() {
	var uploadForm = document.forms['ajaxUploadForm'];

	uploadForm.onsubmit = function(event) {
		event.preventDefault();

		var formData = new FormData(),
			uploadedImages = uploadForm['uploadedImages'].files;

		for (var i = 0; i < uploadedImages.length; i++) {
			formData.append('uploadedImages[]', uploadedImages[i]);	
		};

		ajaxx(uploadForm.action, uploadForm.method, formData, appendImages);
	};

	function appendImages(responseText, status) {
		var uploadedImagesContainer = document.getElementById('uploadedImages');

		responseText['uploadedFileNames'].forEach(function(value) {
			uploadedImagesContainer.innerHTML += '<img src="/uploads/' + value.base + '" width="150" />';
		});

	}
}




function getHttpRequestObject() {
	
	var xmlHttpRequst = false;
	
	    if (window.XMLHttpRequest) 
	{
        xmlHttpRequst = new XMLHttpRequest();
    }
    // IE
    else if (window.ActiveXObject) 
	{
        xmlHttpRequst = new ActiveXObject("Microsoft.XMLHTTP");
    }
	return xmlHttpRequst;
};

// Does the AJAX call to URL 
function ajaxx(url, method, data, responseHandler, async) {
	
	url = url || "";
	method = method || "GET";
	async = async || true;
	data = data || null;
	responseHandler = responseHandler || function () {};
	
	if(url == "")
	{
		alert("URL can not be null/blank");
		return false;
	}
	var xmlHttpRequst = getHttpRequestObject();
	
	
};
