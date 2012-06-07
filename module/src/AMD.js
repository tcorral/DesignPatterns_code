var MyModule = define('sampleModule', [], function() {
	var myModule = {
		container: document.getElementById("container"),
		init: function() {
			this.container.innerHTML = 'Test module';
		},
		destroy: function() {
			this.container.innerHTML = '';
		}
	};
	return myModule;
});