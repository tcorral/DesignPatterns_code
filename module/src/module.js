var MyModule = (function(global) {
	return {
		container: document.getElementById("container"),
		init: function() {
			this.container.innerHTML = 'Test module';
		},
		destroy: function() {
			this.container.innerHTML = '';
		}
	};
}(this));